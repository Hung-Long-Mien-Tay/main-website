import React from 'react';

const ItemCard = ({title, imageUrl}) => {
    const ICON = {
        cart:"src/assets/cart-icon.png"
    }
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
            <div className="p-3 flex justify-between">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex justify-end">
                    <img src={ICON.cart} alt="cart-icon" className='h-3/4'/>
                </div>
            </div>
        </div>
    
  );
};

export default ItemCard;

