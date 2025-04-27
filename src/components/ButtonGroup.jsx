import { useEffect } from "react";

const ButtonGroup = ({ count, setCount, setImageSrc }) => {
  const text = [
    "不要",
    "对不起，宋宋知道错啦",
    "我们可以今晚聊聊嘛",
    "我真的在乎你",
    "我真的真的不想失去你",
    "一起吃饭聊聊好嘛",
    "原谅宋宋吧，求求啦",
    "最后一次机会",
    "求求了，给我个台阶下吧",
  ];

  const baseWidth = 100;
  const scaleFactor = 1.4;

  const handleRightClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    // 更新图片
    if (newCount < 5) {
      setImageSrc("./images/2_5.jpg");
    } else if (newCount < 9) {
      setImageSrc("./images/6_8.jpg");
    } else {
      setImageSrc("./images/9.jpg");
    }
  };

  const handleLeftClick = () => {
    setTimeout(() => {
      window.location.href = "./res.html";
    }, 300);
  };

  // 计算左按钮样式
  const leftBtnStyle = {
    width: baseWidth * Math.pow(scaleFactor, count),
    height: baseWidth * Math.pow(scaleFactor, count) * 0.5,
    fontSize: 16 * Math.pow(scaleFactor, count), // 字体大小随按钮同比例缩放
  };

  return (
    <div className="button-container">
      <button id="left-btn" style={leftBtnStyle} onClick={handleLeftClick}>
        和好
      </button>
      <button id="right-btn" onClick={handleRightClick}>
        {text[Math.min(count, text.length - 1)]}
      </button>
    </div>
  );
};

export default ButtonGroup;
