import React from "react";
import { Link } from "react-router-dom";

function SingleProductCardComponent({ product }) {
  return (
    <div className="w-[300px] bg-gray-300 border border-slate-900 rounded-md dark:border-slate-200 dark:bg-gray-600">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="border-b border-b-slate-900 object-cover h-[200px] w-full bg-white rounded-t-md dark:border-b-white"
      />
      <div className="flex flex-col items-center gap-[20px] p-[10px]">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link
          to={"/products/singleProduct/" + product.id}
          className="bg-green-700 px-[24px] py-[12px] rounded-lg dark:bg-orange-600"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
