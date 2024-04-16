import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../features/todo/todoSlice";

const ListGoroup = () => {
  const { allTodos, isLoding, isError } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  if (isLoding) {
    return (
      <h1 className="text-center display-6 text-secondary">Loding.....</h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center display-6 text-danger">
        somthing wants wrong.....
      </h1>
    );
  }

  return (
    <>
      <ul className="list-group my-3">
        {allTodos?.map((todo) => (
          <ListItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default ListGoroup;
