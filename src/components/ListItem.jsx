import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove, removeTodo } from "../features/todo/todoSlice";

const ListItem = ({ todo }) => {
  const { isSuccess } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
    if (isSuccess) {
      dispatch(remove(id));
    }
  };


  const handleEdit = (formData) => {
     dispatch(edit(formData))
  }

  return (
    <div>
      <li className="list-group-item rounded-0 my-3">
        <h1 className="display-4">{todo.title}</h1>
        <h1 className="display-6">
          {todo.description}

          <span className="float-end">
            <button className="btn btn-warning mx-1  rounded-0" onClick={() => handleEdit(todo)}>Edit</button>
            <button
              className="btn btn-danger mx-1  rounded-0"
              onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
          </span>
        </h1>
      </li>
    </div>
  );
};

export default ListItem;
