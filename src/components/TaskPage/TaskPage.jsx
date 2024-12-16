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
        grouped[task.topic.title] = [];
      }
      grouped[task.topic.title].push(task);
    });
    return Object.entries(grouped).map(([title, tasks]) => ({
      title,
      tasks,
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
      <h2 className={styles.pageTitle}>Задачи за {grade} клас</h2>
      {topics.length === 0 ? (
        <p>Няма налични задачи за този клас.</p>
      ) : (
        topics.map((topic, index) => (
          <div key={index} className={styles.topicDropdown}>
            {/* Topic Title */}
            <div
              className={styles.topicHeader}
              onClick={() => toggleTopic(index)}
            >
              <h3>{topic.title}</h3>
              <span className={styles.toggleIcon}>
                {openTopic === index ? "−" : "+"}
              </span>
            </div>

            {/* Tasks */}
            {openTopic === index && (
              <div className={styles.taskList}>
                {topic.tasks.map((task) => (
                  <div key={task.id} className={styles.taskItem}>
                  {/* Task Expression */}
                  <span className={styles.taskExpression}>{task.expression} =</span>

                  {/* Input for Answer */}
                  <input
                    type="text"
                    placeholder="?"
                    value={userAnswers[task.id] || ""}
                    onChange={(e) => handleInputChange(task.id, e.target.value)}
                    className={styles.answerInput}
                  />

                  {/* Feedback Icon */}
                  {userAnswers[task.id] && (
                    <span
                      className={`${styles.feedbackIcon} ${
                        checkAnswer(task) ? "" : styles.incorrect
                      }`}
                    >
                      {checkAnswer(task) ? "✔" : "✖"}
                    </span>
                  )}
                </div>

                
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskPage;
