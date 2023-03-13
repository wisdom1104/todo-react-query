import styled from "styled-components";

export const Stlayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  max-width: 1200px;
  margin: auto;
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  font-size: 30px;
`;

export const StForm = styled.form`
  display: flex;
  width: 98%;
  height: 70px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(141, 175, 203);
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StInput = styled.input`
  border-radius: 10px;
  border: 2px solid rgb(141, 175, 203);
  height: 30px;
  width: 190px;
  &:hover {
    border: 2px solid steelblue;
  }
`;

export const StFormBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  padding: 7px 20px;
  &:hover {
    border: 2px solid steelblue;
  }
`;

export const StMain = styled.div`
  width: 95%;
  height: 100%;
`;

export const StTodoPlace = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StTodoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid steelblue;
  border-radius: 20px;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  word-break: break-all;
`;

export const StTodBoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StBtn = styled.button`
  border: 2px dotted ${(props) => props.borderColor};
  border-radius: 10px;
  padding: 7px 10px;
  &:hover {
    border: 2px solid ${(props) => props.borderColor};
  }
`;

export const StSubBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StBtnPlace = styled.div`
  display: flex;
  gap: 7px;
  margin: 0px 20px;
`;

export const StSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StSubBox = styled.div`
  border: 5px solid steelblue;
  border-radius: 50px;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const StSubBoxText = styled.span`
  font-size: 20px;
`;
