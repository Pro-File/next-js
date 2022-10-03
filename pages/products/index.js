import React from "react";
import Link from "next/link";
import style from "../../styles/Home.module.css";

const Products = () => {
  return (
    <div className={style.container}>
      <h1>
        {" "}
        <Link href={"/"}>
          <a>Product 01</a>
        </Link>
      </h1>
      <h1> Product 02</h1>
      <h1> Product 03</h1>
    </div>
  );
};

export default Products;
