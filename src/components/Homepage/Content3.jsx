import React from "react";
import Typography from "../Typography";
import ItemCard from "../ItemCard";

// images
import rice from "./../../assets/products/tam-gao.jpeg";
import cassava from "./../../assets/products/cassava2.jpg";
import cassavaResidue from "./../../assets/products/cassava-residue.png";
import riceBran from "./../../assets/products/rice-bran.jpg";

const Content3 = () => {
  const products = [
    { id: 1, title: "Tấm Gạo", src: rice },
    { id: 2, title: "Khoai Mì Lát", src: cassava },
    { id: 3, title: "Bã Mì", src: cassavaResidue },
    { id: 4, title: "Cám Gạo", src: riceBran },
  ];

  return (
    <div>
      {/* Heading */}
      <div>
        <div className="bg-green-gradient-horizontal h-1 rounded-full w-1/4"></div>
        <Typography variant="h2" className="text-black mt-5 mx-5 sm:mx-10">
          Sản Phẩm <span className="text-primaryGreen">Nông Sản</span>
        </Typography>
      </div>
      {/* Menu Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 sm:px-5 md:px-16">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            title={product.title}
            imageUrl={product.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Content3;
