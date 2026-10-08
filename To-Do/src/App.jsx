import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          To-Do List
        </h1>

        <Form addTask={addTask} />

        <Result
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

      </div>
    </div>
  );
}

export default App;