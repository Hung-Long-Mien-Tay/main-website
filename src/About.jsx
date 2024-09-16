import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBarDark from "./components/NavBarDark";
import Typography from "./components/Typography";
import ContactForm from "./components/ContactForm";

const About = () => {
  const location = useLocation()
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [location.hash]);
  return (
    <div>
      <div className="min-h-screen bg-green-gradient-tr">
        {/* Navigation Bar */}
        <NavBarDark />
        {/* Text */}
        <div className="flex-col my-36 sm:mx-10 lg:mx-40 max-w-xl">
          <Typography variant="h3" className="text-white">
            Tự hào là đơn vị cung cấp nguyên liệu chất lượng cao cho các nhà máy
            thức ăn chăn nuôi tại Việt Nam.
          </Typography>
          <Typography
            variant="body"
            className="text-white text-opacity-60 mt-10"
          >
            Chúng tôi chuyên tâm vào việc sản xuất và kinh doanh các mặt hàng
            nông sản với mong muốn đáp ứng nhu cầu thức ăn chăn nuôi cho gia
            súc, gia cầm và thủy sản.
          </Typography>
        </div>
        {/* Pictures */}
        <div className="flex flex-wrap sm:flex-nowrap mt-10 py-20 gap-10 sm:mx-10 lg:mx-40">
          {/* 1 */}
          <div className="flex-col xs:w-full sm:w-1/3">
            <img
              src="src\assets\products\bran.jpeg"
              alt="Bran"
              className="rounded-lg"
            />
            <Typography variant="h4" className="text-white mt-10">
              Đối Tác Tin Cậy Trong Ngành Thức Ăn Chăn Nuôi
            </Typography>
            <Typography
              variant="body"
              className="text-white text-opacity-60 mt-5"
            >
              Là nhà cung cấp hàng đầu nguyên liệu đầu vào cho ngành thức ăn
              chăn nuôi tại Việt Nam, chúng tôi cung cấp những sản phẩm nông sản
              chất lượng cao, hỗ trợ tối ưu hoá hiệu suất sản xuất và nâng cao
              giá trị chuỗi cung ứng cho khách hàng.
            </Typography>
          </div>
          {/* 2 */}
          <div className="flex-col xs:w-full sm:w-1/3">
            <img
              src="src\assets\products\pigs.jpeg"
              alt="Pigs"
              className="rounded-lg"
            />
            <Typography variant="h4" className="text-white mt-10">
              Phát Triển Bền Vững Cùng Nguyên Liệu Sạch
            </Typography>
            <Typography
              variant="body"
              className="text-white text-opacity-60 mt-5"
            >
              Với sứ mệnh mang đến những giá trị bền vững cho ngành chăn nuôi,
              chúng tôi cung cấp các loại nguyên liệu sạch, an toàn và giàu dinh
              dưỡng. Từ cám gạo đến bột cá, chúng tôi đảm bảo mỗi sản phẩm đều
              đạt tiêu chuẩn cao nhất, góp phần vào sự phát triển lâu dài của
              ngành chăn nuôi Việt Nam.
            </Typography>
          </div>
          {/* 3 */}
          <div className="flex-col xs:w-full sm:w-1/3">
            <img
              src="src\assets\products\production.jpg"
              alt="Pigs"
              className="rounded-lg"
            />
            <Typography variant="h4" className="text-white mt-10">
              Quy Trình Sản Xuất Và Kiểm Tra Chất Lượng
            </Typography>
            <Typography
              variant="body"
              className="text-white text-opacity-60 mt-5"
            >
              Mỗi bao nguyên liệu đều trải qua quy trình sản xuất nghiêm ngặt và
              kiểm soát chất lượng khắt khe. Đội ngũ chuyên gia của chúng tôi
              không ngừng giám sát để đảm bảo sản phẩm đạt tiêu chuẩn cao nhất.
            </Typography>
          </div>
        </div>
      </div>
      {/* SECTION 2: FACTORY IMGs */}

      {/* SECTION 3: CONTACT US */}
      <div ref={contactRef} id="contact" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        {/* <div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-contactbg bg-cover bg-right"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-black opacity-20"></div>
        </div> */}

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
