import React from "react";
import TopPartHeader from "./TopPartHeader";
import BottomPartHeader from "./BottomPartHeader";
import ProductPages from "./ProductPages";

const Header = () => {
  return (
    <header>
      <TopPartHeader />
      <BottomPartHeader />
      <ProductPages />
    </header>
  );
};

export default Header;
