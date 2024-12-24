import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./TaskPage.module.css";

const TaskPage = () => {
  const [topics, setTopics] = useState([]);
  const [searchParams] = useSearchParams();
  const grade = searchParams.get("grade");
  const [openTopic, setOpenTopic] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  // Fetch topics and tasks by grade
  useEffect(() => {
    if (grade) {
      fetch(`https://localhost:7140/api/Task/GetTasksByGrade/${grade}`)
        .then((res) => res.json())
        .then((data) => setTopics(groupTasksByTopics(data)))
        .catch((err) => console.error("Error fetching tasks:", err));
    }
  }, [grade]);

  // Group tasks by topic
  const groupTasksByTopics = (tasks) => {
    const grouped = {};
    tasks.forEach((task) => {
      if (!grouped[task.topic.title]) {
        grouped[task.topic.title] = { description: task.topic.description, tasks: [] };
      }
      grouped[task.topic.title].tasks.push(task);
    });
    return Object.entries(grouped).map(([title, content]) => ({
      title,
      ...content,
    }));
  };

  // Handle toggling topics
  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  // Handle user input
  const handleInputChange = (taskId, value) => {
    setUserAnswers({ ...userAnswers, [taskId]: value });
  };

  // Check if the answer is correct
  const checkAnswer = (task) => {
    return userAnswers[task.id]?.trim() === task.answer;
  };

  return (
    <div className={styles.taskPage}>
      <h2 className={styles.pageTitle}>Теми</h2>
      {topics.length === 0 ? (
        <p>Няма налични задачи за този клас.</p>
      ) : (
        topics.map((topic, index) => (
          <div key={index} className={styles.topicDropdown}>
            {/* Topic Title */}
            <div
              className={`${styles.topicHeader} ${
                openTopic === index ? styles.active : ""
              }`}
              onClick={() => toggleTopic(index)}
            >
              <h3>{topic.title}</h3>
              <span className={styles.toggleIcon}>
                {openTopic === index ? "−" : "+"}
              </span>
            </div>

            {openTopic === index && (
              <div className={styles.topicContent}>
                <div className={styles.videoWrapper}>
                  <iframe
                    // width="100%"
                    // height="315"
                    src="https://www.youtube.com/embed/Ef75kGRNP18"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* when api have it 
                src={topic.videoLink} // Replace hardcoded video link
                <p className={styles.description}>{topic.description}</p> // Dynamic description */}

                {/* Description */}
                <p className={styles.description}>{topic.description}</p>

                {/* Tasks */}
                <div className={styles.taskList}>
                  {topic.tasks.map((task) => (
                    <div key={task.id} className={styles.taskItem}>
                      <span className={styles.taskExpression}>
                        {task.expression} =
                      </span>
                      <input
                        type="text"
                        placeholder="?"
                        value={userAnswers[task.id] || ""}
                        onChange={(e) =>
                          handleInputChange(task.id, e.target.value)
                        }
                        className={styles.answerInput}
                      />
                      {userAnswers[task.id] && (
                        <span
                          className={`${styles.feedbackIcon} ${
                            checkAnswer(task) ? styles.correct : styles.incorrect
                          }`}
                        >
                          {checkAnswer(task) ? "✔" : "✖"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskPage;
