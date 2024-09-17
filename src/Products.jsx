import React from "react";
import NavBarLight from "./components/NavBarLight";
import NavBarDark from "./components/NavBarDark";
import Typography from "./components/Typography";
import Footer from "./components/Footer/Footer";
import buttonConfig from "./config/buttonConfig";
import ProductTabs from "./components/ProductsPage/ProductTabs";

const Products = () => {
  return (
    <div>
      <div className="bg-black">
      <NavBarDark />
      </div>
      <div className="">
        <div>
          <Typography
            variant="h3"
            className="text-black mt-20 xs:w-3/4 xs:px-24 sm:w-3/4 sm:mx-20 md:w-1/2"
          >
            Nguồn nguyên liệu sử dụng cho sản xuất thức ăn chăn nuôi phù hợp với
            công nghệ và tiêu chuẩn sản xuất tại Việt Nam.
          </Typography>
        </div>

        <div className="ms-20 mt-20 w-3/4 h-96 lg:me-44">
          <ProductTabs />
        </div>
      </div>

      <div className="mt-64">
        <Footer buttonlinks={[buttonConfig.workWithUs]} />
      </div>
    </div>
  );
};

export default Products;
