import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { BsBarChartSteps } from "react-icons/bs";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { MdOutlineSms } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiQuestionMark } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";
// ikonkalar
// leaflet jsniki
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconPng,
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});
function Home({ addToCart }) {
  const [activeContent, setActiveContent] = useState("content1");
  const [count, setCount] = useState(1);
    if (count < 1) {
      setCount(1);
    } [count];
  const items = [
    {
      id: 1,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 2,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 3,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 4,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 5,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 6,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 7,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 8,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
  ];
  const dost = [
    {
      id: 1,
      icon: <BsReverseLayoutTextSidebarReverse />,
      name: "Предоплата по счету1",
      price:
        "При оформлении заказа выберите в поле оплаты счёт для юридических лиц и введите реквизиты. Счет на оплату будет выслан на электронную почту.",
    },
    {
      id: 2,
      icon: <GiNetworkBars />,
      name: "Он-лайн оплата",
      price:
        "Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money",
    },
    {
      id: 3,
      icon: <BsBarChartSteps />,
      name: "Наличными при получении",
      price:
        "Вы всегда можете оплатить заказ наличными – курьеру, на почте или при получении в транспортной компании.",
    },
  ];
  const kontakt = [
    {
      id: 1,
      icon: "Телефон",
      name: "+7 9851425151",
      price: "+7 9851425151",
    },
    {
      id: 2,
      icon: "Мы работаем",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной",
    },
    {
      id: 3,
      icon: "Электронная почта",
      name: "По вопросам связанным с заказами:zakaz@lacheese.ru",
      price: "По вопросам сотрудничества: opt@lacheese.ru ",
    },
    {
      id: 4,
      icon: "График работы",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной",
    },
    {
      id: 5,
      icon: "Адрес",
      name: "ул.енина 25, офис 502",
      price: "ул.енина 25, офис 502",
    },
    {
      id: 6,
      icon: "Часы работы",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной",
    },
  ];
  const alifbo = [
    {
      id: 1,
      harf: "A",
      name: "Avanti ABC Design Anex Androx Endrio Aro Anmar Androx Agua AMMA Amalfy Aprica AquaPlay AUTOMOBLOX Adiri Avent Adamex",
    },
    {
      id: 2,
      harf: "B",
      name: "Bunchems Babiators Hearts&Keyhole Babiators Navigators Babiators Limited BIMBO Bugaboo Briciola Baby Italia Bebetto Babyhit Bebe Planete Brevi Baby Design Babyace Bumbleride Bertoni Baby Care Bebe Baby Ride",
    },
    {
      id: 3,
      harf: "C",
      name: "Carnival Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa Santa Casa ",
    },
    {
      id: 4,
      harf: "D",
      name: "D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G D&G",
    },
    {
      id: 5,
      harf: "E",
      name: "Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft Euroloft ",
    },
    {
      id: 6,
      harf: "F",
      name: "Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari Ferrari ",
    },
    {
      id: 7,
      harf: "G",
      name: "Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant Giant",
    },
    {
      id: 8,
      harf: "H",
      name: "H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M H&M ",
    },
    {
      id: 9,
      harf: "I",
      name: "IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA IKEA",
    },
    {
      id: 10,
      harf: "J",
      name: "J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew J.Crew",
    },
    {
      id: 11,
      harf: "K",
      name: "Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft Kraft",
    },
    {
      id: 12,
      harf: "L",
      name: "Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl Lidl",
    }
  ];
  const produtcart = [
    {
      id: 1,
      name: "Мезофильная закваска Hansen Flora Danica (50U)",
      price: "1300₽",
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },]
  const recipes = [
    {
      title: "ПОСОЛ СЫРНОЙ ГОЛОВКИ",
      description: "Особенно характерно наличие дырочек разных размеров в структуре швейцарских сортов сыра. Сначала люди думали, что эти",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ut5Bwg8uBxfufwW-yGCB0La6BlMSeVeHKsLh6zUvyPd0as-lWLa59mJNhVnE1MvLACw&usqp=CAU",
      link: "#"
    },
    {
      title: "СЫРНАЯ ТАРЕЛКА",
      description: "Так называется блюдо, которое состоит из разных сортов сыра.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ut5Bwg8uBxfufwW-yGCB0La6BlMSeVeHKsLh6zUvyPd0as-lWLa59mJNhVnE1MvLACw&usqp=CAU",
      link: "#"
    },
    {
      title: "ОТКУДА В СЫРЕ ДЫРКИ?",
      description: "Особенно характерно наличие дырочек разных размеров в структуре швейцарских сортов сыра. Сначала люди думали, что эти",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ut5Bwg8uBxfufwW-yGCB0La6BlMSeVeHKsLh6zUvyPd0as-lWLa59mJNhVnE1MvLACw&usqp=CAU",
      link: "#"
    }
  ];
  const showContent = (id) => {
    setActiveContent(id);
  };

  return (
    <React.Fragment>
      <hr />
      <div className="container">
        <div className="flex w-ful rounded-lg">
          <button className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">
            Формы для сыра
          </button>
          <button
            onClick={() => showContent("content111")}
            className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Доставка и оплата
          </button>
          <button
            onClick={() => showContent("content211")}
            className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Калькулятор Сыродела
          </button>
          <button
            onClick={() => showContent("content311")}
            className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Отзывы
          </button>
          <button
            onClick={() => showContent("content411")}
            className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1  flex items-center justify-between"
          >
            Вопросы и ответы
          </button>
          <button
            onClick={() => showContent("content511")}
            className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Контакты
          </button>
        </div>

        <div className="ml-80">
          {activeContent === "content111" && (
            <div className="transition-opacity duration-500 p-4 absolute">
              <h1 className="text-xl p-4 font-mono">Доставка и оплата</h1>
              <hr />
              <h2 className="p-4 font-mono text-lg">Способы оплаты:</h2>
              <div className="mx-auto p-4 flex gap-10">
                {dost.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white w-64 shadow-md rounded-lg p-6 mb-4"
                  >
                    <div className="bg-yellow-500 p-4 w-12 rounded-full">
                      {item.icon}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-mono p-4">Способы Доставки:</h1>
                  <h1 className="text-xl font-mono p-4">
                    Доставка по Новосибирску
                  </h1>
                  <p className="p-2">
                    Вы можете забрать товар из нашего <br /> магазина
                    самостоятельно, приехав по <br /> адресу:{" "}
                  </p>
                  <p className="text-yellow-400 p-2">
                    г. Новосибирск, ул. Котовского, д. 12/1, <br /> офис 1
                  </p>
                  <div className="flex gap-2 items-center p-2">
                    <MdOutlineDepartureBoard className="text-block text-6xl mr-4" />
                    <p className="text-xs">
                      Или заказать курьерскую доставку. <br /> Стоимость
                      доставки – 150 рублей.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg">
                  <div className="w-[450px] h-[350px] rounded-lg">
                    <MapContainer
                      center={[38.8, 65.7667]}
                      zoom={13}
                      className="h-full w-full rounded-lg"
                    >
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      <Marker position={[38.8, 65.7667]}>
                        <Popup>
                          Qarshi Ayraport <br /> Vorzakon
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <img
                    className="w-[400px] h-[350px] rounded-lg mt-5"
                    src="https://cdek-siam.com/images/358a112e809bad6125041b958105909d.jpeg"
                    alt="cdek"
                  />
                </div>
                <div className="w-[450px]">
                  <h1 className="text-2xl font-mono p-4">
                    Доставка по Российской федерации{" "}
                  </h1>
                  <p className="text-xxs w-96">
                    Доставка по РФ осуществляется логистическими службами СДЭК и
                    Почта России. В любой момент Вы можете отследить путь своего
                    заказа по трек-номеру. Приблизительные сроки и стоимость
                    доставки указаны в таблице ниже. Окончательная сумма зависит
                    от веса и способа оплаты заказа (при наложенном платеже –
                    стоимость доставки выше) и рассчитывается автоматически в
                    момент оформления.
                  </p>
                </div>
              </div>
              <div className="w-[1150px] -ml-80 mt-10">
                <ol className="flex justify-between bg-[#4E2D2D] p-2 text-white">
                  <li className="w-72"></li>
                  <li className="w-72">Транпортная компания СДЭК</li>
                  <li className="w-72">Пункт выдачи Boxberry</li>
                  <li className="w-72">Почта России</li>
                </ol>
                <ol className="flex justify-between p-2 bg-[#FBE8BB]">
                  <li className="w-72">Сроки доставки</li>
                  <li className="w-72">От 7 дней</li>
                  <li className="w-72">2-4 дня</li>
                  <li className="w-72">2-4 дня</li>
                </ol>
                <ol className="flex justify-between p-2">
                  <li className="w-72">Стоимость доставки</li>
                  <li className="w-72">От 200 руб.</li>
                  <li className="w-80">
                    От 350 руб. Итоговая сумма будет рассчитана после указания
                    точного адреса
                  </li>
                  <li className="w-72">От 200 руб.</li>
                </ol>
                <ol className="flex justify-between p-2 bg-[#FBE8BB]">
                  <li className="w-72">Бесплатная доставка</li>
                  <li className="w-72">При заказе от 2000 руб.</li>
                  <li className="w-72">При заказе от 7000 руб.</li>
                  <li className="w-72">При заказе от 2000 руб.</li>
                </ol>
              </div>
            </div>
          )}

          {activeContent === "content211" && (
            <div className="transition-opacity duration-500 p-4 bg-gray-200 absolute">
              Content 2 Information
            </div>
          )}

          {activeContent === "content311" && (
            <div className="transition-opacity duration-500 p-4 bg-gray-200 absolute">
              Content 3 Information
            </div>
          )}

          {activeContent === "content411" && (
            <div className="transition-opacity duration-500 p-4 bg-gray-200 absolute">
              Content 4 Information
            </div>
          )}
          {activeContent === "content511" && (
            <div className="transition-opacity duration-500 p-4 bg-white w-[850px] absolute">
              <h1 className="text-2xl font-mono">Контакты</h1>
              <div className="flex justify-between flex-wrap">
                {kontakt.map((item) => (
                  <div key={item.id}>
                    <div className="w-full">
                      <div className="w-64 h-44">
                        <h3 className="text-2xl py-4">{item.icon}</h3>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="flex mt-10">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-mono">Остались вопросы?</h1>
                  <p className="mt-4 text-xl">
                    Заполните форму и мы вам ответим
                  </p>
                  <input
                    className="border border-block p-2 rounded-lg mt-2"
                    type="text"
                    placeholder="Ваше Имя"
                  />
                  <input
                    className="border border-block p-2 mt-2 rounded-lg"
                    type="text"
                    placeholder="Email"
                  />
                  <textarea
                    className="border border-block p-2 mt-2 rounded-lg"
                    name="10"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="Сообщение или вопрос"
                  ></textarea>
                  <button className="mt-2 bg-yellow-400 p-2 rounded-lg">
                    Отправить{" "}
                  </button>
                </div>
                <div>
                  <div className="p-4 rounded-lg">
                    <div className="w-[450px] h-[350px] rounded-lg">
                      <MapContainer
                        center={[38.8, 65.7667]}
                        zoom={13}
                        className="h-full w-full rounded-lg"
                      >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[38.8, 65.7667]}>
                          <Popup>
                            Qarshi Ayraport <br /> Vorzakon
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div></div>
      <div className="p-4 flex container">
        <div className="flex flex-col w-72 bg-white rounded-lg">
          <button
            onClick={() => showContent("content1")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Закваски для сыра <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content2")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Ферменты для сыра <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content3")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 text-left px-4 py-2 m-1"
          >
            Хлористый кальций
          </button>
          <button
            onClick={() => showContent("content4")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Плесень для сыра <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content5")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Кисломолочные закваски <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content6")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 text-left px-4 py-2 m-1"
          >
            Красители для сыра
          </button>
          <button
            onClick={() => showContent("content7")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Специи для сыра <FaChevronRight />
          </button>
          <button className="border border-black rounded-lg text-black hover:bg-yellow-200  text-left px-4 py-2 m-1">
            Специи для сыра
          </button>
        </div>

        <div className="-mt-8">
          {activeContent === "content1" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content1" ? "opacity-100" : "opacity-0"
              } p-4`}
            >
              <h1 className="text-2xl p-2 font-mono">Оборудование</h1>
                <div className="flex flex-wrap w-full gap-5 rounded-lg">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="border flex flex-col items-center justify-center w-[210px] cursor-pointer"
                    >
                      <Link to={"/product-cart"}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "100%", height: "200px" }}
                          />
                          <p className="p-2">{item.name}</p>
                      </Link>
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
            </div>
          )}
          {activeContent === "content2" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content2" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 2 Information
            </div>
          )}

          {activeContent === "content3" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content3" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 3 Information
            </div>
          )}

          {activeContent === "content4" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content4" ? "opacity-100" : "opacity-0"
              } bg-white mt-5 rounded-lg ml-5 p-4`}
            >
              <div className="flex justify-between items-center w-[850px]">
                <h1 className="text-2xl font-mono">Производители</h1>
                <div className="relative">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Введите название товара или артикул"
                    className="pl-10 p-2 border border-gray-300 rounded-md w-96"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                {alifbo.map(item => (
                  <div key={item.id} className="p-4 border-b flex gap-2">
                    <h2 className="text-2xl font-bold">{item.harf}</h2>
                    <div className="w-20">
                      <a href="#">{item.name}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeContent === "content5" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content5" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
                <div className="flex flex-wrap w-full gap-5 rounded-lg">
                  {produtcart.map((item, index) => (
                    <div
                      key={index}
                      className="border flex items-center justify-center w-full cursor-pointer"
                    >
                      <div>
                      <p className="p-2 text-2xl">{item.name}</p>
                        <div className="flex items-center">
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <div className="flex items-center">
                            <MdOutlineSms />
                            2 Отзыва
                          </div>
                        </div>
                            <img
                              src={item.image}
                              alt={item.name}
                              style={{ width: "100%", height: "200px" }}
                            />
                        <hr />
                      </div>
                      <div className=" pb-2">
                        <div>
                          <div className="inline text-xs">
                            <p>{item.price}</p>
                            <p className="text-red-700 line-through">
                              {item.price1e}
                            </p>
                          </div>
                          <div>
                            <CiHeart />
                            В избранное
                          </div>
                        </div>
                        <div>
                          <div>
                            <p>+95 бонусных рублей</p>
                            <RiQuestionMark />
                          </div>
                        <div>Артикул:  23006</div>
                        </div>
                        <div className=" bg-gray-100 flex gap-3">
                          <div className="flex space-x-4">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                              onClick={() => setCount(count + 1)}>
                              +
                            </button>
                            <h1 className="text-4xl font-bold mb-4">{count}</h1>
                            <button
                              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                              onClick={() => setCount(count - 1)}>
                              -
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              className="bg-yellow-500 text-white px-2 py-1 rounded mt-2 inline">
                              Добавить
                            </button>
                          </div>
                        </div>
                        <div>
                          <h1>Выберите регион для рассчета стоимости доставки:</h1>
                          <div className="flex items-center">
                            <input type="text"  placeholder="Выберите регион"/>
                            <BiSolidDownArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          )}

          {activeContent === "content6" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content6" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 6 Information
            </div>
          )}

          {activeContent === "content7" && (
            <div
              className={`transition-opacity duration-500 absolute w-[850px] ${
                activeContent === "content7" ? "opacity-100" : "opacity-0"
              } bg-[#FFFBRD] rounded-lg p-4 ml-10 mt-10`}>
              <div>
                <h1 className="text-2xl font-mono">Описание сыра</h1>
                <p className="text-[15px] leading-loose pb-4 mt-5">Это мягкий вид сыра, который получают из коровьего молока. Считается одним из самых вкусных французских лакомств. Его изготавливают во многих странах Европы и в разных вариациях – де Мелен, де Мо, де Куломье. Для сыра характерен бледный оттенок. Имеет «благоприятную» плесень. Отличается наличием не сильного запаха нашатыря. Его приятный вкус буквально очаровывает (чем-то напоминает камамбер). При добавлении специальных ферментов может образовываться корочка. </p>
                <div className="flex justify-between">
                  <img className="w-48 rounded-lg" src="data:image/jpeg;base64,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" alt="" />
                  <img className="w-48 rounded-lg" src="data:image/jpeg;base64,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" alt="" />
                  <img className="w-48 rounded-lg" src="data:image/jpeg;base64,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" alt="" />
                  <img className="w-48 rounded-lg" src="data:image/jpeg;base64,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" alt="" />
                </div>
                <p className="text-[15px] leading-loose my-5">Хорошо подходит к праздничному застолью. Сочетается с закусками, бутербродами, супами и салатами. Также этот молочный продукт часто применяют для приготовления пикантных заправок и соусов. Некоторые сочетают Бри с мясом, овощами и фруктами. Поэтому можно считать этот сыр универсальным лакомством <br /> В егo химическом составе содержится витамин А. Он помогает вырабатывать коллаген, который улучшает цвет кожи. Витамин В благоприятно влияет на нервную систему человека. Это очень сильно помогает при усталости и бессоннице. </p>
                <div>
                  <h2 className="text-xl font-bold mb-2">Ингредиенты</h2>
                  <ul className="mb-4 bg-yellow-100 p-4 rounded-lg">
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Фермент – 1/8 ч.л.</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Термофильная закваска STI-12 (50U)</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Белая плесень – 10 грамм</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Молоко – 10 литров</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>20% солевой раствор: соль - 1 кг, вода кипячёная - 4 л, хлористый кальций - 1 ст.л., уксус столовый 9% - 1 ч.л.</span>
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mb-2">Оборудование</h2>
                  <ul className="bg-yellow-100 p-4 rounded-lg">
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Кастрюля из нержавейки</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Друшлаг, шумовка и марля</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Термометр для молока</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Форма для сыра Бри</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>Пищевой пульверизатор</span>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center justify-between gap-2"><SlBasket /> В корзину</button>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-[#FFFBED]">
                  <h2 className="text-xl font-bold mb-4">Польза Сыра</h2>
                  <p className="mb-4">
                    Который значительно укрепляет костную ткань. В сыре содержится много других минералов – магний, фосфор кальций, натрий, серы, цинк и др. Но при этом практически отсутствует лактоза. Поэтому Бри могут легко употреблять в пищу люди с аллергией на лактозу.
                  </p>
                  <p className="mb-4">
                    Пищевая ценность сыра в 100 граммах составляет 334 килокалорий. Жиры – 28 грамм, холестерин – 10 мг, натрий – 629 мг, калий – 152 мг, углеводы – 0.5 грамм, белки – 21 грамм.
                  </p>
                  <p className="mb-4">
                    Для получения сыра достаточно просто, Вам нужно подготовить все необходимые ингредиенты и оборудование. Следуйте рекомендованному процессу приготовления и не нарушайте дозировку, и тогда вы обязательно получите настоящей французский сыр.
                  </p>

                  <div className="mb-4">
                    <img src="https://cdnn21.img.ria.ru/images/07e4/07/0a/1574175401_0:0:1431:1431_1280x0_80_0_0_6e08626f87797f92dc4d7c2f55d79e77.jpg" alt="Cheese and wine" className="w-full rounded h-[550px]" />
                  </div>

                  <h2 className="text-xl font-bold mb-4">Как Приготовить В Домашних Условиях</h2>
                  <div className="space-y-4">
                    <div className="p-10 bg-white rounded shadow flex items-center gap-4">
                      <h3 className="text-6xl font-bold text-yellow-500">01</h3>
                      <p>
                        Поставьте на плиту кастрюлю и залейте в нее молоко (это нужно делать через марлю и друшлаг, чтобы никакой мусор не попал). Установите термометр и нагрейте жидкость до температуры 32 градуса Цельсия.
                      </p>
                    </div>
                    <div className="p-10 bg-white rounded shadow flex items-center gap-4">
                      <h3 className="text-6xl font-bold text-yellow-500">02</h3>
                      <p>
                        Высыпьте закваску и подождите пару минут пока она будет реанимироваться. Затем равномерно перемешайте смесь.
                      </p>
                    </div>
                    <div className="p-10 bg-white rounded shadow flex items-center gap-4">
                      <h3 className="text-6xl font-bold text-yellow-500">03</h3>
                      <p>
                        Спустя 30 минут введите стакан с 15-20 мл воды и растворите в ней фермент. Вылейте жидкость в молоко и оставьте эту смесь на 90 минут.
                      </p>
                    </div>
                    <div className="p-10 bg-white rounded shadow flex items-center gap-4">
                      <h3 className="text-6xl font-bold text-yellow-500">04</h3>
                      <p>
                        Поставьте на плиту кастрюлю и залейте в нее молоко (это нужно делать через марлю и друшлаг, чтобы никакой мусор не попал). Установите термометр и нагрейте жидкость до температуры 32 градуса Цельсия.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-100 -ml-96">
                  <h2 className="text-xl font-bold mb-4">популярные рецепты</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recipes.map((recipe, index) => (
                      <div key={index} className="bg-white rounded shadow-md overflow-hidden">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                          <p className="text-sm mb-4">{recipe.description}</p>
                          <a href={recipe.link} className="text-orange-500 hover:text-orange-700">Читать далее &gt;</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeContent === "content8" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content8" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 8 Information
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex container">
        <div className="flex flex-col w-72 bg-white rounded-lg">
          <button
            onClick={() => showContent("content11")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Формы для сыра <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content21")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Латексное покрытие
          </button>
          <button
            onClick={() => showContent("content31")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Воск для сыра
          </button>
          <button
            onClick={() => showContent("content41")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1  flex items-center justify-between"
          >
            Термоусадочные пакеты <FaChevronRight />
          </button>
          <button
            onClick={() => showContent("content51")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Дренажные коврики
          </button>
          <button
            onClick={() => showContent("content61")}
            className="border border-black rounded-lg text-[15px] text-black hover:bg-yellow-200 px-4 py-1 m-1 flex items-center justify-between"
          >
            Дренажные мешки и салфетки <br /> для прессования{" "}
          </button>
          <button
            onClick={() => showContent("content71")}
            className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between"
          >
            Дренажные контейнеры
          </button>
          <button className="border border-black rounded-lg text-left text-black hover:bg-yellow-200 px-4 py-2 m-1">
            Специи для сыра
          </button>
        </div>

        <div className="-mt-[470px]">
          {activeContent === "content11" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content11" ? "opacity-100" : "opacity-0"
              } p-4`}
            >
              <h1 className="text-2xl p-2 font-mono ">Оборудование</h1>
              <div className="flex flex-wrap w-full gap-5 rounded-lg">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border flex flex-col items-center justify-center w-[210px] cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <p className="p-2">{item.name}</p>
                    <hr />
                    <div className="flex pb-2 items-center gap-5 ">
                      <span className="inline text-xs ">
                        <p>{item.price}₽</p>
                        <p className="text-red-700 line-through">
                          {item.price1e}
                        </p>
                      </span>
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
            </div>
          )}
          {activeContent === "content12" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content21" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 2 Information
            </div>
          )}
          {activeContent === "content13" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content31" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 3 Information
            </div>
          )}
          {activeContent === "content14" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content41" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 4 Information
            </div>
          )}
          {activeContent === "content15" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content51" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 5 Information
            </div>
          )}
          {activeContent === "content16" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content61" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 6 Information
            </div>
          )}
          {activeContent === "content17" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content71" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 7 Information
            </div>
          )}
          {activeContent === "content18" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content81" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 8 Information
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
