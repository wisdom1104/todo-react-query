import React from "react";
import { useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getTodos } from "../api/todos";
import Home from "../pages/Home";
import Sub from "../pages/Sub";

const Router = () => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="sub/:id" element={<Sub data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
