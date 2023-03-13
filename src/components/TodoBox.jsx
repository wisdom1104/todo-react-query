import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { completTodo, editTodo, removeTodo } from "../api/todos";
import {
  StBtn,
  StBtnPlace,
  StInput,
  StSubBtn,
  StTodBoxText,
  StTodoBox,
} from "../GlobalStyles";
import { EditTodo } from "../redux/modules/todosSlice";

function TodoBox({ item }) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);
  const [edit, setEdit] = useState(false);

  const queryClient = useQueryClient();
  // 삭제 확인 용 메시지 관리

  const deleteMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const completMutation = useMutation(completTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <StTodoBox>
      {!edit ? (
        <div>
          <StSubBtn>
            {/* <Link to={`/sub/${item.id}`}>상세페이지</Link> */}
            <StBtn
              borderColor={"#ffc95f"}
              onClick={() => {
                navigate(`/sub/${item.id}`);
              }}
            >
              상세페이지
            </StBtn>
          </StSubBtn>
          <StTodBoxText>
            <h2 style={{ margin: "0px" }}>{item.title}</h2>
            <span style={{ margin: "20px 0px" }}>{item.content}</span>
          </StTodBoxText>
          <StBtnPlace>
            <StBtn
              borderColor={"#ff7c92"}
              onClick={() => {
                deleteMutation.mutate(item.id);
              }}
            >
              삭제하기
            </StBtn>
            <StBtn
              borderColor={"#83c671"}
              onClick={() => {
                const payload = {
                  id: item.id,
                  isDone: !item.isDone,
                };
                console.log(item.id, !item.isDone);
                completMutation.mutate(payload);
              }}
            >
              {item.isDone ? "취소" : "완료"}
            </StBtn>
            <StBtn
              borderColor={"#5fc4ff"}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              수정하기
            </StBtn>
          </StBtnPlace>
        </div>
      ) : (
        <div>
          <div>
            제목 :
            <StInput
              maxLength={15}
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          </div>
          <div>
            내용 :
            <StInput
              maxLength={50}
              style={{ margin: "20px 0px" }}
              type="text"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
          </div>
          <div>
            <StBtn
              borderColor={"#5fc4ff"}
              onClick={() => {
                const payload = {
                  id: item.id,
                  title: editTitle,
                  content: editContent,
                };
                editMutation.mutate(payload);
                setEdit(!edit);
              }}
            >
              수정완료
            </StBtn>
          </div>
        </div>
      )}
    </StTodoBox>
  );
}

export default TodoBox;
