import React from "react";
import NavBarLight from "./components/NavBarLight";
import Typography from "./components/Typography";
import Footer from "./components/Footer/Footer";
import buttonConfig from "./config/buttonConfig";
import ProductTabs from "./components/ProductsPage/ProductTabs";

const Products = () => {
  return (
    <div>
      <NavBarLight />
      <div className="">
        <div>
          <Typography
            variant="h3"
            className="text-black mt-20 xs:w-full xs:px-5 sm:w-3/4 sm:mx-20 md:w-1/2"
          >
            Nguồn nguyên liệu sử dụng cho sản xuất thức ăn chăn nuôi phù hợp với
            công nghệ và tiêu chuẩn sản xuất tại Việt Nam.
          </Typography>
        </div>

        <div className="mt-40 w-full lg:me-44">
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
