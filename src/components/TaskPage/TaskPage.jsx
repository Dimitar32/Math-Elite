import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [searchParams] = useSearchParams(); // Extract query params
  const grade = searchParams.get("grade"); // Get the grade parameter
  const navigate = useNavigate();

  useEffect(() => {
    if (!grade) {
      navigate("/");
      return;
    }

    // Fetch tasks from API by grade
    fetch(`https://localhost:7140/api/Task/getTasksByGrade/${grade}`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [grade, navigate]);

  return (
    <div>
      <h2>Задачи за {grade} клас</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.question}</li>
          ))}
        </ul>
      ) : (
        <p>Няма задачи за този клас.</p>
      )}
    </div>
  );
};

export default TasksPage;
