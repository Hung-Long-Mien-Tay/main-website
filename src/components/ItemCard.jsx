import React from "react";

// image
import cartIcon from "./../assets/btn_icons/cart-icon.png";

const ItemCard = ({ title, imageUrl }) => {
  const picture = [{ src: cartIcon }];

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-3 flex justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-end">
          <img src={picture[0].src} alt="cart-icon" className="h-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
