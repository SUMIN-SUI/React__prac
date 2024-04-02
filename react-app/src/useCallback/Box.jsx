import React, { useEffect, useState } from "react";

const Box = ({ creatBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 사이즈 변화");
    setStyle(creatBoxStyle());
  }, [creatBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
