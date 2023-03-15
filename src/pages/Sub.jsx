import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StSub, StSubBox, StSubBoxText } from "../GlobalStyles";
import { editTodo } from "../api/todos";

function Sub({ data }) {
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const subTodo = data.find((item) => {
    return item.id === Number(param.id);
  });
  console.log(param);
  const queryClient = useQueryClient();
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  return (
    <StSub>
      <StSubBox>
        <Link to="/">메인화면</Link>
        <StSubBoxText> ID:{param.id}</StSubBoxText>
        <StSubBoxText>제목: {subTodo.title}</StSubBoxText>
        <StSubBoxText>내용: {subTodo.content}</StSubBoxText>
      </StSubBox>
    </StSub>
  );
}

export default Sub;
