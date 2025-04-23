import React, { useEffect } from "react";
import ThemeTitle from "../theme/ThemeTitle";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ThemeTitle title="Giới thiệu về Công ty cổ phần môi giới bảo hiểm An Phúc">
      <p>
        Công ty cổ phần môi giới bảo hiểm An Phúc (APIB) được thành lập theo
        Giấy phép thành lập và hoạt động số 96/GP/KDBH do Bộ Tài chính cấp ngày
        03/04/2024, và Giấy phép điều chỉnh số 96/GPĐC1/KDBH do Bộ Tài chính cấp
        ngày 21/02/2025.
      </p>
      <p>
        Với tầm nhìn tiên phong trong lĩnh vực bảo hiểm công nghệ (InsurTech)
        tại Việt Nam, chúng tôi cam kết đưa bảo hiểm đến gần hơn với người tiêu
        dùng thông qua việc tái định hình thị trường bảo hiểm bằng các giải pháp
        công nghệ tiên tiến. Để hiện thực hóa sứ mệnh này, An Phúc đang phát
        triển nền tảng số InsureGo, cho phép khách hàng dễ dàng tiếp cận và mua
        sắm các sản phẩm bảo hiểm một cách nhanh chóng, tiện lợi.
      </p>
    </ThemeTitle>
  );
};

export default About;
