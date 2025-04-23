import React, { useEffect } from "react";
import ThemeTitle from "../theme/ThemeTitle";

const News = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ThemeTitle title="Tin tức">
      <p>
        Chúng tôi sẽ cập nhật những tin tức mới nhất về bảo hiểm và hoạt động
        của Công ty cổ phần môi giới bảo hiểm An Phúc tại đây.
      </p>
    </ThemeTitle>
  );
};

export default News;
