import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./LifeCycle";

/*
const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이 1",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "하이 3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];
*/

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
