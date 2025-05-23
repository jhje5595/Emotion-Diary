import Header from "../components/Header";
import Button from "../components/button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

//nav -1 하면 뒤로가게해줌
// nav에서 2번째 인자로 { replace: true } => 뒤로가기 방지
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={<Button onClick={() => nav(-1)} text="< 뒤로가기" />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
