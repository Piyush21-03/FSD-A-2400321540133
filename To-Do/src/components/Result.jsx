function Result({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Your Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 py-6">
          No tasks added yet.
        </p>
      ) : (
        <div className="space-y-3">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4"
            >

              <div
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer flex-1 text-gray-700 ${
                  task.completed
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {task.text}
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="ml-4 px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Result;