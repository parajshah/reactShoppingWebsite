import React from "react";
import WishlistItem from "./WishlistItem";

const WishlistItems = ({ value }) => {
  const { wishlist } = value;

  const wishlistItems = wishlist.map((item) => {
    return <WishlistItem key={item.id} wishlistItem={item} value={value} />;
  });
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column">{wishlistItems}</div>
    </div>
  );
};

export default WishlistItems;
