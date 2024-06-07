import React from 'react'

function TodoItem({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)} className="btn" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem


