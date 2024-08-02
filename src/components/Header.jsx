import React from "react";
import { Link } from "react-router-dom";
import png4 from '../assets/icons/interface-essential-195 2.svg'
import png5 from '../assets/icons/alarm-clock-time-timer.3 1.svg'
import png6 from '../assets/icons/users-06 1.svg'
import png7 from '../assets/icons/Logo.svg'
import png8 from '../assets/icons/delivery-06 1.svg'
import png9 from '../assets/icons/credit-card-repeat 1.svg'
import png10 from '../assets/icons/user-protection-shield-square 1.svg'
import png11 from '../assets/icons/Telegram.svg'
import png12 from '../assets/icons/WhatsUp.svg'
import png13 from '../assets/icons/Messenger.svg'
import png14 from '../assets/icons/Vector.svg'
import png15 from '../assets/icons/phones-03 1.svg'
const Header = ({cart , length }) => {
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price1e), 0);
  return (
    <React.Fragment>
      <div className="container flex gap-5 my-[50px] justify-between">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={png4}
                alt="img"
              />
            </div>
            <div>
              <span>Ваш город:</span>
            </div>
            <div>
              <form className="w-[100px]">
                <fieldset>
                  <div className="relative border-none text-gray-800">
                    <label for="frm-whatever" className="sr-only">
                      My field
                    </label>
                    <select
                      className="appearance-none w-full py-1 px-2 bg-white"
                      name="whatever"
                      id="frm-whatever"
                    >
                      <option value="1">Москва</option>
                      <option value="2">Item 2</option>
                      <option value="3">Item 3</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-1 text-gray-700">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img
              src={png5}
              alt="clock"
            />
            <p>Пн-Пт 9:00 - 19:00</p>
          </div>
        </div>
        <div>
          <li className="flex items-center gap-10">
            <a href="#">О компании</a>
            <a href="#">Преимущества</a>
            <a href="#">Акционные товары</a>
           <Link to={"/product-cart"}>
            <a className="flex items-center gap-2" href="#"><img src={png6} alt="accovnt" /> Войти в аккаунт </a>
           </Link>

          </li>
        </div>
      </div>
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <a href="#"><img src={png7} alt="logo" /></a>
        </Link>
        <ol className="flex items-center gap-2">
          <li><img src={png8} alt="der" /></li>
          <li className="text-xs">Бесплатная <br /> доставка</li>
        </ol>
        <ol className="flex items-center gap-2">
          <li><img src={png9} alt="" /></li>
          <li className="text-xs">Скидка при <br /> оплате на сайте</li>
        </ol>
        <ol className="flex items-center gap-2">
          <li><img src={png10} alt="" /></li>
          <li className="text-xs">Защита <br /> покупателей</li>
        </ol>
        <ol className="flex items-center gap-2">
          <li><img src={png11} alt="" /></li>
          <li><img src={png12} alt="" /></li>
          <li><img src={png13} alt="" /></li>
        </ol>
        <ol className="">
          <li><h1 className="font-mono">+8 916 460-19-60</h1></li>
          <li className="flex gap-2 text-yellow-500 border border-yellow-500 py-1 px-2 rounded-2xl">
            <button>
              <img src={png15} alt="" />
            </button>
              <p>Заказать звонок</p>
            </li>
        </ol>
        <ol className="flex items-center gap-2 text-end">
          <li>Ваша корзина <p className="text-yellow-500">{totalPrice} rubl</p></li>
          <li className="ml-3 -mt-3">
            <Link to={"/cart"}>
            <a href="#">{length}<img className="-mt-3 -ml-3" src={png14} alt="karzinka" /></a>
            </Link>
          </li>
        </ol>
      </div>

    </React.Fragment>
  );
};

export default Header;
