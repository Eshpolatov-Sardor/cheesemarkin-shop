import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiGuideLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

const ProductCart = ({ cart }) => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (id) => {
    setActiveContent(id);
  };

  return (
    <div className="p-4 container">
      <div className="flex gap-10 text-xs bg-white rounded-lg">
        <button
          onClick={() => showContent("content1")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 py-2 m-1 flex items-center justify-between"
        >
          <CgProfile />Мой профиль
        </button>
        <button
          onClick={() => showContent("content2")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 py-2 m-1 flex items-center justify-between"
        >
          <IoBasketOutline />Мои заказы
        </button>
        <button
          onClick={() => showContent("content3")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 px-4 py-2 m-1 flex items-center "    >
          <CiHeart /> Избранные товары
        </button>
        <button
          onClick={() => showContent("content4")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 py-2 m-1 flex items-center justify-between"
        >
          <MdOutlineDiscount /> Мои купоны
        </button>
        <button
          onClick={() => showContent("content5")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 py-2 m-1 flex items-center justify-between"
        >
          <RiGuideLine />Адрес доставки
        </button>
        <button
          onClick={() => showContent("content6")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 px-4 py-2 m-1 flex items-center "    >
          <RiLockPasswordFill />Сменить пароль
        </button>
        <button
          onClick={() => showContent("content7")}
          className="rounded-lg text-black hover:bg-yellow-200 gap-2 py-2 m-1 flex items-center justify-between"
        >
          <BiLogIn /> Выход
        </button>
      </div>

      <div className="">
        {activeContent === "content1" && (
          <div className={`transition-opacity duration-500 p-4 ${activeContent === "content1" ? "opacity-100" : "opacity-0"}`}>
            {cart.map((item) => (
              <div key={item.id} className="p-5 flex justify-between items-center border-b border-gray-300">
                <div>
                  <img src={item.image} alt="" />
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-black dark:text-white">
                    {item.quantity} шт. x {item.price} руб. = {(item.price * item.quantity).toFixed(2)} руб.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeContent === "content2" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content2" ? "opacity-100" : "opacity-0"}`}>
            Content 2 Information
          </div>
        )}
        {activeContent === "content3" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content3" ? "opacity-100" : "opacity-0"}`}>
            Content 3 Information
          </div>
        )}
        {activeContent === "content4" && (
          <div className={`transition-opacity duration-500 bg-white mt-5 rounded-lg ml-5 p-4 ${activeContent === "content4" ? "opacity-100" : "opacity-0"}`}>
            salom5
          </div>
        )}
        {activeContent === "content5" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content5" ? "opacity-100" : "opacity-0"}`}>
            salom6
          </div>
        )}
        {activeContent === "content6" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content6" ? "opacity-100" : "opacity-0"}`}>
            Content 6 Information
          </div>
        )}
        {activeContent === "content7" && (
          <div className={`transition-opacity duration-500 bg-[#FFFBRD] rounded-lg p-4 ml-10 mt-10 ${activeContent === "content7" ? "opacity-100" : "opacity-0"}`}>
            salom
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
