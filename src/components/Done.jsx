import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getTodos } from "../api/todos";
import { StTodoPlace } from "../GlobalStyles";
import TodoBox from "./TodoBox";

function Done() {
  // const todo = useSelector((state) => state.todos);
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <>
      <h2>Done...</h2>
      <StTodoPlace>
        {data.map((item) => {
          if (item.isDone === true)
            return (
              <div key={item.id}>
                <TodoBox item={item} />
              </div>
            );
        })}
      </StTodoPlace>
    </>
  );
}

export default Done;
