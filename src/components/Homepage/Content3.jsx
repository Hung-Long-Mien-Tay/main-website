import React from "react";
import Typography from "../Typography";
import ItemCard from "../ItemCard";

const Content3 = () => {
  const products = [
    
    { id: 1, title: 'Tấm Gạo', imageUrl: 'src/assets/products/tam-gao.jpeg' },
    { id: 2, title: 'Khoai Mì Lát', imageUrl: 'src/assets/products/cassava2.jpg' },
    { id: 3, title: 'Bã Mì', imageUrl: 'src/assets/products/cassava-residue.png' },
    { id: 4, title: "Cám Gạo", imageUrl: 'src/assets/products/rice-bran.jpg' },
    // { id: 5, title: 'Dairy Products', imageUrl: 'src/assets/products/dairy.png' },
    // { id: 6, title: 'Sea Food', imageUrl: 'src/assets/products/seafood.png' }
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
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Content3;
