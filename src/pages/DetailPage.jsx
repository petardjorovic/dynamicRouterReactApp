import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CounterComponent from "../components/CounterComponent";
import LoadingComponent from "../components/LoaderComponent";
import ProductsServices from "../services/productsServices";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Rating } from "@mui/material";

function DetailPage() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [counter, setCounter] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [total, setTotal] = useState(counter * product.price);

  useEffect(() => {
    ProductsServices.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoaded(true);
        toast.success("Data arrived!");
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTotal(counter * product.price);
  }, [counter]);

  function handleCurrentImg(index) {
    setCurrentImg(index);
  }

  function handleLike() {
    setIsLiked(!isLiked);
    console.log(isLiked);
  }

  return (
    <div>
      {isLoaded ? (
        <div className="flex py-[30px] gap-[10px]">
          <div className="w-[50%] flex flex-col items-center gap-2">
            <img
              src={product.images[currentImg]}
              alt={product.title}
              className="w-[70%] border border-slate-900 object-cover rounded-md dark:border-slate-200"
            />
            <div className="flex gap-1 justify-center items-center w-[55%]">
              {product.images.map((el, i) => {
                return (
                  <img
                    src={el}
                    key={i}
                    className={`w-[20%] border border-slate-900 object-cover rounded-md dark:border-slate-200 ${
                      currentImg === i ? "selected dark:selected" : ""
                    }`}
                    onClick={() => handleCurrentImg(i)}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-[50%] pb-[70px]">
            <div className="border-b border-b-slate-400 h-[50%] flex flex-col justify-start gap-[25px]">
              <h4 className="text-3xl font-semibold">{product.title}</h4>
              <p className="text-lg">${product.price}</p>
              <p className="text-[12px] flex items-center gap-[10px]">
                Reviews:
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </p>
              {/* <div className="flex flex-col gap-3 items-center"> */}
              <p className="flex items-center gap-[10px]">
                Availability:
                {product.stock > 0 ? (
                  <span className="text-green-500 flex items-center gap-[10px]">
                    <FaCheck color="green" /> In stock
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-[10px]">
                    <ImCross color="red" /> Out of stock
                  </span>
                )}
              </p>
              {/* <b>Availability:</b>
                {product.stock > 0 ? (
                  <FaCheck color="green" />
                ) : (
                  <IoMdClose color="red" />
                )}
                {product.stock > 0 ? (
                  <span className="text-green-500">In stock</span>
                ) : (
                  <span className="text-red-500">Out of stock</span>
                )} */}
              {/* </div> */}
              {product.stock < 50 && (
                <p>
                  Hurry up! only <b>{product.stock}</b> product left in stock!
                </p>
              )}
            </div>
            <div className="border-b border-b-slate-400 h-[50%] pt-[50px] flex flex-col items-start gap-[25px]">
              <p className="font-bold">
                Total Price: {total ? total.toFixed(2) : product.price}
              </p>
              <p className="flex items-center justify-start gap-[20px] py-[5px]">
                <b>Quantity:</b>
                <CounterComponent
                  stock={product.stock}
                  counter={counter}
                  setCounter={setCounter}
                />
              </p>
              <div className="flex items-center gap-[30px]">
                <button className="text-white py-[12px] px-[30px] rounded-3xl bg-orange-400">
                  Add to Cart
                </button>
                <div
                  onClick={handleLike}
                  className="p-[10px] rounded-full bg-slate-400 flex items-center justify-center cursor-pointer"
                >
                  <FaHeart size={25} color={isLiked ? "" : "white"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default DetailPage;
