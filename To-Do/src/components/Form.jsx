import { useState } from "react";

function Form({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>

    </form>
  );
}

export default Form;