import React from "react";
// import { useSelector } from "react-redux";
import { StTodoPlace } from "../GlobalStyles";
import TodoBox from "./TodoBox";

function Working({ data }) {
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
