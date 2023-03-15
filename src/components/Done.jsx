import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getTodos } from "../api/todos";
import { StTodoPlace } from "../GlobalStyles";
import TodoBox from "./TodoBox";

function Done({ data }) {
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
