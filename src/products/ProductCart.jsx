import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiGuideLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const ProductCart = ({ cart, amount, isActive }) => {
  const [activeContent, setActiveContent] = useState("content1");
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Agree:', agree);
  };

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
            salom
          </div>
        )}
        {activeContent === "content2" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content2" ? "opacity-100" : "opacity-0"}`}>
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
        {activeContent === "content3" && (
          <div className={`transition-opacity duration-500 bg-white p-4 ${activeContent === "content3" ? "opacity-100" : "opacity-0"} flex flex-wrap w-full gap-5 rounded-lg`}>
            {cart.map((item) => (
              <div key={item.id} className="border  items-center justify-center w-[210px] cursor-pointer">
                    <div className="relative">
                      <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100%", height: "200px" }}
                        />
                        <FaHeart onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);}} className="absolute top-2 right-2 text-2xl text-red-500" />
                      </div>
                          <p className="p-2">{item.name}</p>
                          <hr />
                      <div className="flex pb-2 items-center justify-between gap-5">
                        <div className="inline text-xs">
                          <p>{item.price}₽</p>
                          <p className="text-red-700 line-through">
                            {item.price1e}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                          className="bg-yellow-500 text-white px-2 py-1 rounded mt-2 inline"
                        >
                          Добавить
                        </button>
                      </div>
              </div>
            ))}
          </div>
        )}
        {activeContent === "content4" && (
          <div className={`transition-opacity duration-500 bg-white mt-5 rounded-lg ml-5 p-4 ${activeContent === "content4" ? "opacity-100" : "opacity-0"}`}>
           <div className={`flex items-center p-4 border ${isActive ? 'bg-white' : 'bg-gray-100'} mb-4 rounded-md`}>
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 ${isActive ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center rounded-md`}>
                  <span className="text-white font-bold">ЛяЧиз</span>
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <p className={`text-sm ${isActive ? 'text-red-500' : 'text-green-500'} font-bold`}>
                  {isActive ? 'Не активный' : 'активный'}
                </p>
                <p className="text-lg font-semibold">
                  Скидочный купон на {amount} руб.
                </p>
                <p className="text-sm text-gray-500">
                  {isActive ? `До ${expiryDate}` : 'Срок действия закончился'}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-gray-500 text-sm">№123543</p>
                {isActive && (
                  <button className="mt-2 bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-md">
                    Скопировать код
                  </button>
                )}
              </div>
            </div>
           <div className={`flex items-center p-4 border ${isActive ? 'bg-white' : 'bg-gray-100'} mb-4 rounded-md`}>
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 ${isActive ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center rounded-md`}>
                  <span className="text-white font-bold">ЛяЧиз</span>
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <p className={`text-sm ${isActive ? 'text-red-500' : 'text-green-500'} font-bold`}>
                  {isActive ? 'Не активный' : 'активный'}
                </p>
                <p className="text-lg font-semibold">
                  Скидочный купон на {amount} руб.
                </p>
                <p className="text-sm text-gray-500">
                  {isActive ? `До ${expiryDate}` : 'Срок действия закончился'}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-gray-500 text-sm">№132456</p>
                {isActive && (
                  <button className="mt-2 bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-md">
                    Скопировать код
                  </button>
                )}
              </div>
            </div>
           <div className={`flex items-center p-4 border ${isActive ? 'bg-white' : 'bg-gray-100'} mb-4 rounded-md`}>
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 ${isActive ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center rounded-md`}>
                  <span className="text-white font-bold">ЛяЧиз</span>
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <p className={`text-sm ${isActive ? 'text-green-500' : 'text-red-500'} font-bold`}>
                  {isActive ? 'Активный' : 'Не активный'}
                </p>
                <p className="text-lg font-semibold">
                  Скидочный купон на {amount} руб.
                </p>
                <p className="text-sm text-gray-500">
                  {isActive ? `До ${expiryDate}` : 'Срок действия закончился'}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-gray-500 text-sm">№5432123</p>
                {isActive && (
                  <button className="mt-2 bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-md">
                    Скопировать код
                  </button>
                )}
              </div>
            </div>
          </div>


        )}
        {activeContent === "content5" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content5" ? "opacity-100" : "opacity-0"}`}>
            salom6
          </div>
        )}
        {activeContent === "content6" && (
          <div className={`transition-opacity duration-500 bg-gray-200 p-4 ${activeContent === "content6" ? "opacity-100" : "opacity-0"}`}>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Сменить пароль</h2>
                <p className="mb-4 text-gray-600">
                  После смены пароля мы пришлем подтверждение на ваш электронный адрес
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="oldPassword">
                      Старый пароль
                    </label>
                    <input
                      type="password"
                      id="oldPassword"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Введите старый пароль"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700" htmlFor="newPassword">
                      Новый пароль
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Не менее 8 символов"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                  >
                    Подтвердить
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {activeContent === "content7" && (
          <div className={`transition-opacity duration-500 bg-[#FFFBRD] rounded-lg p-4 ml-10 mt-10 ${activeContent === "content7" ? "opacity-100" : "opacity-0"}`}>
            <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex">
                <div className="w-1/2 p-6">
                  <h2 className="text-2xl font-bold mb-6">Регистрация аккаунта</h2>
                  <ul className="list-disc ml-5 text-gray-700 mb-4">
                    <li className="mb-2"><strong>Возвращаем 10% бонусами:</strong> При заказе на сумму от 3000 руб. до 20 июля 2021 г. предоставляем бесплатную доставку по всей России.</li>
                    <li className="mb-2"><strong>Гарантия качества:</strong> При заказе на сумму от 3000 руб. до 20 июля 2021 г. предоставляем бесплатную доставку по всей России.</li>
                    <li className="mb-2"><strong>Удобные способы оплаты:</strong> При заказе на сумму от 3000 руб. до 20 июля 2021 г. предоставляем бесплатную доставку по всей России.</li>
                  </ul>
                </div>
                <div className="w-1/2 p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700" htmlFor="name">
                        Ваше имя и фамилия
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите имя"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700" htmlFor="email">
                        Электронная почта
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@mail.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700" htmlFor="password">
                        Пароль для входа
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700" htmlFor="confirmPassword">
                        Подтвердите пароль
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Повторите пароль"
                      />
                    </div>
                    <div className="mb-4 flex items-center">
                      <input
                        type="checkbox"
                        id="agree"
                        className="h-4 w-4 text-orange-500"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      <label htmlFor="agree" className="ml-2 text-gray-700">
                        Принимаю условия соглашения
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                    >
                      Создать аккаунт
                    </button>
                    <div className="mt-4 flex justify-center space-x-4">
                      {/* Add icons for social media login options */}
                      <button className="bg-blue-500 text-white p-2 rounded-full">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-full">
                        <i className="fab fa-google"></i>
                      </button>
                      <button className="bg-blue-400 text-white p-2 rounded-full">
                        <i className="fab fa-twitter"></i>
                      </button>
                    </div>
                    <p className="mt-4 text-center text-gray-500">
                      Уже есть профиль? <a href="#" className="text-orange-500">Войти в аккаунт</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
