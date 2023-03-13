import React, { useState } from "react";
import { StForm, StFormBtn, StInput, StInputBox } from "../GlobalStyles";
import { addTodo } from "../api/todos";
import { useMutation, useQueryClient } from "react-query";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <>
      <StForm
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            title,
            content,
            isDone: false,
          };
          mutation.mutate(newTodo);
          setTitle("");
          setContent("");
        }}
      >
        <StInputBox>
          <span>제목: </span>
          <StInput
            maxLength={15}
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <span> 내용: </span>
          <StInput
            maxLength={50}
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </StInputBox>
        <StFormBtn borderColor={"steelblue"} type="submit" value="추가하기">
          추가하기
        </StFormBtn>
      </StForm>
    </>
  );
}

export default Form;
