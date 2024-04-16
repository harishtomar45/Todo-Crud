import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit ? 
    dispatch(updateTodo({
      id : edit.todo._id,
      title,
      description,
    })) :

    dispatch(addTodo({ title, description }));

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="form-control w-100 my-3 rounded-0"
          placeholder="Enter Text here"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          type="text"
          className="form-control w-100 my-3 rounded-0"
          placeholder="Enter Description here"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}></textarea>
        <button className="btn btn-success w-100 my-3 rounded-0">save</button>
      </form>
    </>
  );
};

export default Form;
