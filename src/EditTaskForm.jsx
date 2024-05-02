import React, { useState } from "react";

const EditTaskForm = ({ task, updateTask, toggleEdit }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTask(task.id, editedTask);
    toggleEdit();
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTaskForm;
