import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState("./images/1.jpg");

  return (
    <div className="container">
      <div className="img-layer">
        <img src={imageSrc} alt="图片被猫猫吃掉啦~" />
      </div>
      <div className="title-layer">
        <h1>可以和小宋和好嘛~~~</h1>
      </div>
      <div className="button-layer">
        <ButtonGroup
          count={count}
          setCount={setCount}
          setImageSrc={setImageSrc}
        />
      </div>
    </div>
  );
}

export default App;
