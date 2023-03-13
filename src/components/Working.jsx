import React from "react";
// import { useSelector } from "react-redux";
import { StTodoPlace } from "../GlobalStyles";
import TodoBox from "./TodoBox";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";

function Working() {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <>
      <h2>Working...</h2>
      <StTodoPlace>
        {data.map((item) => {
          if (item.isDone === false)
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

export default Working;
