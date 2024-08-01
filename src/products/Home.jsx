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
import { CiCircleQuestion } from "react-icons/ci";
import cekImg from '../assets/imags/cek.png'
import milkImg from '../assets/imags/milk.png'
import pivaImg from '../assets/imags/piva.png'
import rImg from '../assets/imags/r.png'
import pishloqImg from '../assets/imags/pishloq.png'
import { CiUser } from "react-icons/ci";
import sira1Img from '../assets/imags/sira1.png'
import sirImg from '../assets/imags/sir.png'
import sir2Img from '../assets/imags/sir2.png'
import sir3Img from '../assets/imags/sir3.png'
import sir4Img from '../assets/imags/sir4.png'
import sir5Img from '../assets/imags/sir5.png'
import molodImg from '../assets/imags/molod.png'
import tverImg from '../assets/imags/tver.png'
import polutImg from '../assets/imags/polut.png'
import pastaImg from '../assets/imags/pasta.png'
import kisloImg from '../assets/imags/kislo.png'
import rassolmg from '../assets/imags/rassol.png'
import tarelka from '../assets/imags/tarelka.png'
import { FaHeart } from "react-icons/fa";


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
      length: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 2,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      length: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 3,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      length: 1,
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
            <div className="transition-opacity duration-500 p-4 absolute">
              <div><h2 className='mt-[1rem] text-[25px] font-semibold text-[#4E2D2D]'>Калькулятор сыродела</h2></div>
            <div className='flex gap-[2rem]'>
                <div className='py-5 px-5 bg-white mt-6'>
                  <h4 className='text-[#4E2D2D] font-bold text-[18px]'>Расчет количества закваски</h4>
                  <div>
                    <p className='mt-2'>На какой объем рассчитан весь пакет?</p>
                    <form action="">
                      <label htmlFor=""></label>
                      <input className="w-[290px] h-[35px] border border-black mt-2" type="search"/>
                    </form>
                  </div>
                  <div className='mt-4'>
                    <p>Какой объем молока вы используете?</p>
                    <input className='w-[290px] h-[35px] border border-black mt-2' type="number" />
                  </div>
                  <div className='mt-4'>
                    <p>Сколько весит вся закваска в пакете?</p>
                    <input className='w-[290px] h-[35px] border border-black mt-2' type="number" />
                  </div>
                  <div className='mt-6'>
                  <button className='w-[290px] h-[35px] bg-[#FD9339] hover:bg-[#f4b37a]'>Рассчитать</button>
                  </div>
                </div>
                <div className='py-5 px-5 bg-white mt-6'>
                  <h4 className='text-[#4E2D2D] font-bold text-[18px]'>Результат</h4>
                  <div>
                    <p className='mt-2 text-[14px] w-[300px] leading-relaxed'>Для переработки 2 литров молока вам потребуется 1/1 часть пакета закваски или 1 грамм (0,5 грамм на каждый литр молока)</p>
                  </div>
                  <div className='mt-8'>
                    <h4 className='text-[#4E2D2D] font-bold text-[16px] '>Нужна помощь с расчетами?</h4>
                  </div>
                  <div className='leading-relaxed mt-2'>
                    <p className='w-[300px] text-[13px] mt-2 flex'><span className='mt-1 text-[#FD9339]'><CiCircleQuestion /></span> Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока. </p>
                    <p className='w-[300px] text-[13px] mt-2 flex'><span className='mt-1 text-[#FD9339]'><CiCircleQuestion /></span> Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока. </p>
                    <p className='w-[300px] text-[13px] mt-2 flex'><span className='mt-1 text-[#FD9339]'><CiCircleQuestion /></span> Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока. </p>
                  </div>
                </div>

            </div>
            </div>
          )}

          {activeContent === "content311" && (
            <div className="transition-opacity duration-500 p-4 absolute">
              <div className='flex items-center gap-[13rem]'>
                <h2 className='mt-[1rem] text-[25px] font-semibold text-[#4E2D2D]'>отзывы покупателей</h2>
                <div className='flex gap-2 mt-5'>
                  <p>Что бы оставить отзыв необходимо</p>
                  <p className='flex text-[#FEB06C]'><a href="#" className='flex items-center gap-2 font-semibold'><span><CiUser /></span> Авторизоваться</a></p>
                </div>
              </div>
            <div className='mt-5 flex gap-[2rem]'>
              <div className='w-[400px] h-[340px] bg-white'>
                <div className='flex justify-between px-4 py-4'>
                  <div>
                    <h4 className='font-semibold text-[#4E2D2D]'>Светлана Петровна</h4>
                    <p className='opacity-[60%]'>г. Москва</p>
                  </div>
                  <div className="flex -mt-[3px]">
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-gray-300 text-2xl">&#9733;</span>
                  </div>
                </div>
                <div>
                  <p className='text-[14px] px-4 opacity-75'>Заказываю сама и рекомендую всем! Всегда в наличии <br />все необходимое для моего хобби: закваски, <br />ферменты и еще много чего. Доставка, оплата - <br />быстро и четко. Для тех, кто только пробует себя в <br />сыроделии - проконсультируют и помогут.</p>
                </div>
                <div className='flex gap-2 px-4 mt-4'>
                  <img src={cekImg} alt="img" />
                  <img src={milkImg} alt="img" />
                  <img src={pivaImg} alt="img" />
                </div>
                <div className='px-4 mt-4'>
                  <p className='opacity-60'>24 октября 2020</p>
                </div>
              </div>
              <div className='w-[400px] h-[340px] bg-white'>
                <div className='flex justify-between px-4 py-4'>
                  <div>
                    <h4 className='font-semibold text-[#4E2D2D]'>Irina Volkiva</h4>
                    <p className='opacity-[60%]'>г. Москва</p>
                  </div>
                  <div className="flex -mt-[3px]">
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-gray-300 text-2xl">&#9733;</span>
                  </div>
                </div>
                <div>
                  <p className='text-[14px] px-4 opacity-75'>Неделю назад нашла этот магазин. Очень удобно, не <br />нужно ходить куда-то за покупками, все заказала <br />онлайн и с доставкой. После оформления заказа, <br />позвонил менеджер, уточнил все и отправил мои <br />покупки. Оплатила через яндекс кошелек. </p>
                </div>
                <div className='flex gap-2 px-4 mt-4'>
                  <img src={rImg} alt="img" />
                  <img src={pishloqImg} alt="img" />                </div>
                <div className='px-4 mt-4'>
                  <p className='opacity-60'>24 октября 2020</p>
                </div>
              </div>
            </div>
            <div className='mt-5 flex gap-[2rem]'>
              <div className='w-[400px] h-[290px] bg-white'>
                <div className='flex justify-between px-4 py-4'>
                  <div>
                    <h4 className='font-semibold text-[#4E2D2D]'>Светлана Петровна</h4>
                    <p className='opacity-[60%]'>г. Санкт-Петербург</p>
                  </div>
                  <div className="flex -mt-[3px]">
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-gray-300 text-2xl">&#9733;</span>
                  </div>
                </div>
                <div>
                  <p className='text-[14px] px-4 opacity-75'>Отличный магазин. Большой выбор, цены низкие. <br />Сайт удобный, быстро нашел все, что мне <br />интересовало. Сделал заказ, доставили оперативно. <br />Есть несколько видов оплаты, можно заплатить <br />банковской картой сбербанка или онлайн кошельком. <br />Всем советую.</p>
                </div>
                <div className='px-4 mt-4'>
                  <p className='opacity-60'>24 октября 2020</p>
                </div>
              </div>
              <div className='w-[400px] h-[290px] bg-white'>
                <div className='flex justify-between px-4 py-4'>
                  <div>
                    <h4 className='font-semibold text-[#4E2D2D]'>Irina Volkiva</h4>
                    <p className='opacity-[60%]'>г. Ростов-на-Дону</p>
                  </div>
                  <div className="flex -mt-[3px]">
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-yellow-500 text-2xl">&#9733;</span>
                    <span className="text-gray-300 text-2xl">&#9733;</span>
                  </div>
                </div>
                <div>
                  <p className='text-[14px] px-4 opacity-75'>Очень часто заказываю здесь все необходимые <br />ингредиенты для приготовления сыра. На сайте <br />можно найти все, что касается сыроваренья. <br />Несколько дней назад заказал закваску, качество <br />отличное. <br /> Спасибо большое за хороший сервис.</p>
                </div>
                <div className='px-4 mt-4'>
                  <p className='opacity-60'>24 октября 2020</p>
                </div>
              </div>
            </div>
            </div>
          )}

          {activeContent === "content411" && (
            <div className="transition-opacity duration-500 p-4 absolute">
              <div>
              <div className='mt-[1rem] text-[25px] font-semibold text-[#4E2D2D]'><h2 className=''>Вопросы и ответы</h2></div>
              <div>
                <div className='w-[800px] h-[400px] bg-[#FEF0C2] mt-6 rounded-lg'>
                  <ol className='mx-6 py-6 leading-8'>
                    <li className='hover:text-red-500'><a className='hover:text-red-500'href="#">01. Как, и как долго можно хранить моцареллу?</a></li>
                    <li><a href="#">02.Почему на сыре появляется черная плесень?</a></li>
                    <li><a href="#">03.От чего у  камамбера появляется горький вкус?</a></li>
                    <li><a href="#">04.Знаю, что сычужный белок бывает одного вида, тогда каким образом <br />изготавливаются разные виды сыра? </a></li>
                    <li><a href="#">05.Можно приготовить сыр, используя молоко не первой свежести, предварительно <br />прокипятив его?</a></li>
                    <li><a href="#">06.Для чего используется хлористый кальций?  </a></li>
                    <li><a href="#">07.Можно приготовить сыр, используя молоко не первой свежести, предварительно <br />прокипятив его? </a></li>
                    <li><a href="#">08.Для чего используется хлористый кальций?</a></li>
                  </ol>
                </div>
              </div>
              <div className='mt-8'>
                <h2 className='font-bold text-[20px] text-[#4E2D2D]'>01.Как, и как долго можно хранить моцареллу?</h2>
                <p className='font-semibold mt-2 opacity-[60%]'>Для хранения моцареллы нужно приготовить рассол 2%: для этого понадобится 20 грамм соли на 1 литр <br />чистой воды, е 10 мл 10% раствора хлористого кальция, и 0,6 мл 9% уксуса. Когда рассол готов, добавьте <br />сыр, закройте крышкой и положите в холодильник. <br />
                  Соленую моцареллу можно хранить одну неделю, а несоленую два, три дня.</p>
              </div>
              <div className='mt-8'>
                <h2 className='font-bold text-[20px] text-[#4E2D2D]'>02.Почему на сыре появляется черная плесень?</h2>
                <p className='font-semibold mt-2 opacity-[60%]'>Сыр покрывается черной плесенью, когда он находится внутри холодильника и рядом с сыром стоят <br />фрукты или овощи. Необходимо класть отдельно данные продукты, но перед этим нужно почистить <br />холодильник, чтобы внутри не осталась плесень.</p>
              </div>
              <div className='mt-8'>
                <h2 className='font-bold text-[20px] text-[#4E2D2D]'>03.От чего у  камамбера появляется горький вкус?</h2>
                <p className='font-semibold mt-2 opacity-[60%]'>Причин много, выделяем самые популярные:</p>
                <p className='font-semibold mt-2 opacity-[60%]'>1. Плохое качество молока.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>2.Возможно корове давали силос, и это изменило вкус молока.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>3. Большое количество хлористого кальция добавлено.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>4. Есть вероятность, что каким-то образом плесень стала влажной. </p>
              </div>
              <div className='mt-8'>
                <h2 className='font-bold text-[20px] text-[#4E2D2D]'>04.Знаю, что сычужный белок бывает одного вида, тогда каким образом <br />изготавливаются разные виды сыра?</h2>
                <p className='font-semibold mt-2 opacity-[60%]'>Сычужный белок является коагулянтом, он стимулирует свертывание молока и создает сырный комок.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>Различаются четыре вида коагулянтов. </p>
                <p className='font-semibold mt-2 opacity-[60%]'>1 Естественный сычужный белок</p>
                <p className='font-semibold mt-2 opacity-[60%]'>2 Вегетарианский ренин</p>
                <p className='font-semibold mt-2 opacity-[60%]'>3 Микробиальный фермент</p>
                <p className='font-semibold mt-2 opacity-[60%]'>4 Пепсин</p>
                <p className='font-semibold mt-2 opacity-[60%]'>Если вы готовите сыр с долгой выдержкой, необходимо употребить естественный сычужный белок и <br />вегетарианский ренин.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>Сычужный белок  имеет два вида: жидкий и сухой. Можно использовать и тот и другой, важно <br />правильное использование – следуйте инструкции, которая указана на упаковке.</p>
              </div>
              <div className='mt-8'>
                <h2 className='font-bold text-[20px] text-[#4E2D2D]'>05.Можно приготовить сыр, используя молоко не первой свежести, <br />предварительно прокипятив его?</h2>
                <p className='font-semibold mt-2 opacity-[60%]'>Для хранения моцареллы нужно приготовить рассол 2%: для этого понадобится 20 грамм соли на 1 литр <br />чистой воды, е 10 мл 10% раствора хлористого кальция, и 0,6 мл 9% уксуса. Когда рассол готов, добавьте <br />сыр, закройте крышкой и положите в холодильник.</p>
                <p className='font-semibold mt-2 opacity-[60%]'>Соленую моцареллу можно хранить одну неделю, а несоленую два, три дня.</p>
              </div>
            </div>
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
            Наборы для сыра
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
                      <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <FaHeart
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="absolute top-2 right-2 text-2xl  hover:text-red-700 cursor-pointer"
                      />
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
              }  p-4`}
            ><div>
            <h2 className='font-bold text-[29px] mt-2 text-[#4E2D2D]'>Наборы для сыра</h2>
            <div className='mt-8'>
              <div className='flex gap-6'>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sira1Img} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для начинающих на 100 л молока</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sirImg} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для приготовления Пармезана</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 mt-6'>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sir2Img} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для приготовления Российских сыров</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sir3Img} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для приготовления сыра Гауда</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 mt-6'>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sir4Img} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для начинающих на 100 л молока</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
                <div className='w-[426px] h-[424px] bg-white'>
                  <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[#FD9339]'>Топ Продаж</p>
                    <CiHeart />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sir5Img} alt="" />
                  </div>
                  <div className='mt-4'>
                    <h5 className='font-semibold px-5 text-[18px]'>Набор для начинающих на 100 л молока</h5>
                    <p className='text-[14px] px-5 mt-2 opacity-65'>Набор ингредиентов для приготовления сыров <br />Имеретинский, Моцарелла, Альметте, Качотта, Рикотта</p>
                  </div>
                  <hr className='w-[90%] mx-auto mt-3'/>
                  <div className='flex justify-between items-center px-5 mt-4'>
                    <h3 className='text-[20px] font-semibold'>2400₽</h3>
                    <button className='w-[130px] h-[35px] bg-[#FD9339] rounded-lg text-white'>Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              }  p-4`}
            >
              <div>
                <div className="flex flex-wrap w-full  gap-5 rounded-lg">
                  {produtcart.map((item, index) => (
                    <div
                      key={index}
                      className="border flex items-center justify-center w-full cursor-pointer"
                    >
                      <div>
                      <p className="p-2 text-[26px] font-semibold text-[#4E2D2D] ">{item.name}</p>
                        <div className="flex items-center ">
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <div className="flex items-center gap-2 ml-3">
                            <span className="mt-1"><MdOutlineSms /></span>
                            2 Отзыва
                          </div>
                        </div>
                            <div className="mt-8">
                              <img className="w-[200px]"
                                src={item.image}
                                alt={item.name}
                                style={{ width: "350px", height: "400px" }}
                              />
                            </div>
                        <hr />
                      </div>
                      <div className=" pb-2 mt-[10rem]">
                        <div className="flex items-center gap-[16rem] -ml-[15rem]">
                          <div className="inline flex text-xs gap-2">
                            <p className="text-[28px] text-[#FD9339] font-semibold">{item.price}</p>
                            <p className=" opacity-60 mt-[4px] text-[16px] line-through">
                              {item.price1e}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="mt-1 text-[#FD9339]"><CiHeart /></span>
                            <p className="text-[#FD9339]">В избранное</p>
                          </div>
                        </div>
                        <div>
                          <div className="-ml-[15rem] mt-2 flex items-center gap-2">
                            <p className="">+ <span className="text-[#FD9339]">95</span> бонусных рублей</p>
                            <p className="text-[#FD9339]"><RiQuestionMark /></p>
                          </div>
                        <div className="-ml-[15rem]">
                          <h4 className="font-bold mt-2">Артикул:  <span className="opacity-70 font-semibold">23006</span></h4>
                        </div>
                        </div>
                        <div className="-ml-[15rem] mt-4 bg-gray-100 w-[255px] flex items-center gap-3">
                          <div className="flex items-center space-x-4">
                            <button
                              className=" text-blackn ml-4  px-4 py-2 rounded hover:bg-red-200"
                              onClick={() => setCount(count - 1)}>
                              -
                            </button>
                            <h1 className="text-2x4 font-bold ">{count}</h1>

                            <button
                              className=" text-black px-4 py-2 rounded hover:bg-green-200"
                              onClick={() => setCount(count + 1)}>
                              +
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              className="bg-yellow-500 w-[100px] text-white px-2 -mt-[2px] py-1 rounded mt-2 inline">
                              Добавить
                            </button>
                          </div>
                        </div>
                        <div className="w-[440px] h-[100px] mt-8 px-5 -ml-[15rem] bg-[#FCF6E3]">
                          <h1 className="pt-4 font-semibold">Выберите регион для рассчета стоимости доставки:</h1>
                          <div className="flex items-center mt-4 ">
                            <input className="w-[300px] h-[30px] " type="text"  placeholder="   Выберите регион" />
                            <p className="-ml-[2rem]"><BiSolidDownArrow /></p>
                          </div>
                        </div>
                      </div>

                    </div>

                  ))}
                </div>
              </div>
              <div>
                <div>
                  <div className="flex gap-20 mt-[3rem] ml-5">
                    <h2 className="font-bold text-[16px]">Описание</h2>
                    <h2 className="font-bold text-[16px]">Доставка и оплата</h2>
                    <h2 className="font-bold text-[16px]">Отзывы (3)</h2>
                  </div>
                  <div className="w-[850px] h-[440px] px-5 py-5 opacity-80 bg-white mt-10">
                    <p className="text-[14px]">P00802 Эта форма небольших размеров предназначена для получения маленьких головок сыра Рикотта и других мягких <br />сыров в условиях домашнего или фермерского производства. Наличие хорошего дренажа обеспечивает ее <br />использование для прессования сыров с плесенью, в том числе сорта Французский нешатель. Размер сырной головки, <br />которую удается получить при использовании этой формы – до 80 г. Это аккуратный, готовый к подаче кусочек сыра, <br />который не придется нарезать. Изготовлена форма из специального высококачественного пищевого пластика, который <br />хорошо адаптирован к агрессивной молочнокислой среде.</p>
                    <hr className="mt-3"/>
                    <div className="flex items-center gap-[10rem] mt-3 ">
                      <h3 className="font-bold">Выход сыра</h3>
                      <p className="mt-[4px]">до 5-6 кг</p>
                    </div>
                    <hr className="mt-3"/>
                    <div className="flex items-center gap-[11rem] mt-3">
                      <h3 className="font-bold">Материал</h3>
                      <p className="mt-[4px]">высококачественный пищевой пластик</p>
                    </div>
                    <hr className="mt-3"/>
                    <div className="flex items-center gap-[9.6rem] mt-3">
                      <h3 className="font-bold">Наличие дна</h3>
                      <p className="mt-[4px]">есть</p>
                    </div>
                    <hr className="mt-3"/>
                    <div className="flex items-center gap-[8.3rem] mt-3">
                      <h3 className="font-bold">Наличие ножек</h3>
                      <p className="mt-[4px]">нет</p>
                    </div>
                    <hr className="mt-3"/>
                    <div className="flex items-center gap-[11.7rem] mt-3">
                      <h3 className="font-bold">Размеры</h3>
                      <p className="mt-[4px]">высота - 22 см, диаметр верха - 27 см</p>
                    </div>
                  </div>
                </div>
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
          {activeContent === "content21" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content21" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 2 Information
            </div>
          )}
          {activeContent === "content31" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content31" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 3 Information
            </div>
          )}
          {activeContent === "content41" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content41" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 4 Information
            </div>
          )}
          {activeContent === "content51" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content51" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 5 Information
            </div>
          )}
          {activeContent === "content61" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content61" ? "opacity-100" : "opacity-0"
              }  p-4`}
            >
            <div>
            <div>
              <h2 className='text-[28px] font-bold text-[#4E2D2D]'>рецепты сыров</h2>
              <div>
                <div className='flex gap-6'>
                  <div className='mt-6'>
                    <img src={molodImg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px]  font-bold'>Молодые сыры</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <img src={tverImg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px] font-bold'>Твердые сыры</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <img src={polutImg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px]  font-bold'>Молодые сыры</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div className='mt-6'>
                    <img src={pastaImg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px]  font-bold'>Паста филата</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <img src={kisloImg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px] font-bold'>Кисломолочные сыры</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <img src={rassolmg} alt="img" />
                    <div className='-mt-14 px-4'>
                      <h4 className='text-white text-[20px]  font-bold'>Рассольные сыры</h4>
                      <p className='flex'><a href="#" className='flex items-center text-[14px] text-[#FD9339] gap-1'>Смотреть <span className='text-[12px] mt-[3px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-16'>
              <h2 className='text-[28px] font-bold '>Последние добавленные</h2>
              <div className='mt-6'>
                <div className='flex gap-6'>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img src={tarelka} alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>Сырная тарелка</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img className='w-[280px] h-[160px]' src="data:image/jpeg;base64,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" alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>Откуда в сыре дырки?</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img className='w-[280px] h-[160px]' src="https://uzreport.news/fotobank/image/04e446611e54e3707eea1f4066fce455.jpeg" alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>посол сырной головки</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>

                </div>
                <div className='flex gap-6 mt-6'>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img className='w-[280px] h-[160px]' src="data:image/jpeg;base64,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" alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>Откуда в сыре дырки?</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img className='w-[280px] h-[160px]' src="https://daryo.uz/static/2023/02/63fde400a558d.jpg" alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>Сырная тарелка</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>
                  <div className='w-[280px] h-[350px] bg-white'>
                    <img className="w-[280px] h-[160px]" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBgYFhcXGBgXFRgYFRUWGBcVFhYYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABAEAABAwIDBQYEAwYFBAMAAAABAAIRAyEEEjEFQVFhcQYTIoGRsTKhwfAUQtEHFSNSYnJDgpLh8VOissIkM1T/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAvEQACAgEEAQMCBQMFAAAAAAAAAQIRMQMSIUFRBBNhIpEUMmKBwXHh8CNCobHR/9oADAMBAAIRAxEAPwDKUGa8VFWBlENaQZUuIbImFxvhnqJWgWnQJXKuDcCn0numEZUDnNSu0wpKiuOGcDIRlF7iNF2gDF1LhJzJZYHiuQas938qTGE6hWtZnJQUqUuhInwZx5E2lopxRgKelSkypKjFNsegNwACgIELX9itkMr1nio0Oa1swdJJ3hbM9mcNNqTP9ITR05SVolLVjF0zx5oCnpMXsDtjUTrRonddjUPV7O4b/wDPT8hHsi/TyFXqI+DwzbLfGEC1oXvNfsfg3/Fhmdbg+6Cd+zrAf9M+Tiqxg0qEepFs8aLAYTu6svYHfs4wXCr5PQlb9mlD8taq0cDld9EdrCtSJ5HQpeIqWpRuvSKv7LCDLMUOjmfUFVmM/ZzjB8BpP6OIPoQs07MpRrJiK1EhTGnZX2N7I45uuHcf7SHexVe/CVGDx03t/uaR7ha+BlkHwLETiqVwmYMiUbi2ixSP8xWvpBKLdbKRzLBTUG3Uj6dlnkCXBF3a7WZoURTp+ydUp+Doh2FrgiFKxT2MkKWiz5hS0WWWDRBhKdnBDvpI7D0/GRyTK9O63Zq4IMOwEQutYJIT8M26dUbdZ5MsApYuok0klrBtKuqyFLTMthTPpTdMwwh3VVfKFXDBHMgyEVRdKIfREEQo6bADCW7QapkYABUggEFTPoNKZWwwhAOA+owEKPD4fepmUWlgMlEU6dgFFlCEU4HVIU7o7uphc7tKY0H7OqHirO5NHuVtCFnOwdGKL3fzP9gB+q0hK7dFVBHm67vUY2F3KuynKpEjyrkBSJFY1keRNNMKbKuZEKDZHkBXe7CkyrkI0axkLhYN4BUkLmVaka2A4nZOHqfHRpu/yhVWK7E4Kpqxzf7XELR5Ug1DavAynJdmFxH7Nm60q7hwDwD8xCp8X2LxDfhdTfJixI6a2vf7K1nbXtZQwbDTc9vfOAytkA5XEjMJ10IgKPs9tEmkzvNXX4gcWnkkcY7qKLWmlZiTsLFU4z0HiLWE+yH7ojM0gg87LX9rdobSw/8AFwpbWonVhp56lMn+272Hc71WUqftBx+lfBMI/ro1G+6WWl4ZSPqfKIcILdETSAuOarnds6RJzYFjTxp1Ht+RkKF/aakDak4f5g73ASODKx1o1yWrGfxAuYlsFVw7R0SQcrxHL/dSYntBh3R4iJ/mED1S7XY61IPslbZyIrAarRYTszTq4Zppma58QMw0/wBHpv4rO1QQcrmkEEgg6gjcUZRapghqRlaRwJJwdySSUVGd3FosUJUZlKs6jLX6obEUwSFRCMnbSmDxUFXDw5WWEaCxR4qgEiyO8AwoTuTa1MCEeyiIUVWgIWWTMWEaMkKZohMwdOB5qd1O6WS5AmJrd6dlspqdPwrrqe4JGgo3PZzD5MNTHESf81/qrAoB9aIHAAeilbil1x1IpUebKEm78hMpyjY+U9WTsm0OhJNSRAOSXAUiVgCISCSSARQuQkkHLGEQuALoCRWMZPt72aZie6qQ3MzM10taS5joOWXA5bjUXueKbQpACALfcLV4mlnYW8RbqNFnCz75obebDfFBOz8RfKdNx3hV+2NiVAc9DE1qUn4e8f3J/wAt+7PQR0R1OnF0bhnA+E6FMKZj9x7RPw4mm/hJY7/ypKN2xMf+elhn8SaNA/8AsFbNDqVR1KbGXM+oHv6oxuOeBrPI3+eqXga2ZHE7Irfm2dhXWMxRaDyuyosttjYNCo7LVw4wzuFMVyHDjlOYL1d+MzWJLQdYufnCre0NOn3dMUmknPLrGfhcJJKlNOrRXT2t0zy/Y23n4St3Lape1sZSWuEAfldMSOBgQvQ6raO0WZ2EMxIFxoHxxPHgfVYTtPsOu6s19Ki98i8DQjj5eysez/Z7Fh7XOHctm8kF0b8oabTzQjJydNcDyiocxfI6rhHNJabEGCDuISWtxOEa9xcdTHPQAazySTe18jfif0mXdTtMoSoDCsK1psg20nPs1jif6QT7JEdDJ9lNJBvopq9Ixqn7M7PYsunuXARq4hvuZV4zslXPxOY3zJWlF3wBasUuWU9FnhUdZq1mE7IsAh9Vx4wAEfT2DhWD4Z/uMrbGK/URMJhzqi6WDqu+Fjj5Ee62bMTQpad2OgH0UOI7QUvyhx8o91OTgsyMpzf5YlLQ2HXI0Dep/RHYTYBaQXuFiDEWseac7bL3fBTPn/sm97inObaBImANJvqkWpC+E2FrUrlpFlXPiSB9Vx+pXWcSn7I9E5q5W80xmJM6oV75KcwIb23wHYkuSxZilNTrgqoL1IKmUKi1Wib0kW/muKupYg6lTU8bOqotVMm9NoMSAUNPEgqVt1RSTwI01kcuLiUpgHYXAkF1ywDoKqNo0IdO43/VWZqKDFQ5sb9yFhor2usmExcJAxqmzPRYx3aTM9MPb8dO45xu+nmhmVw4B3EfYR9B0G+hsVVVqHd1XU/yu8TD8yOu/wAilkFElQGEG7FhrcxIblN5IvOluP6HgjGmyrtoYIVWiDGbK7SwInw87E6JW30Okr5CWYzMd4G4gSQToSN4RFOrLROos7qNRG5BUsFlbAJkBokEh0aZgRvEclWdktjVMKK7HEEPquey+ocJvOh+5RtmpF1n5JKPIksAvW4LCU9WUxzNz8047aw7ND/pCCp9mm6ueT0H1KKp7FotvlnqZUr1nhJFn7XbbIKvaUflYT1MKH9613fDTjyJVzToMHwtaPIKWSt7eo8z+wN8FiP3KQUcU/V2X0HsnN2GT8byfU+6uQn5Z0RXp4vPP9WB68ljgqWbHpN4lF0tlU23yeWp+aLZRG9PNW8J46UI9InLVm+yPuBG8eiX4Zp49U/PdOVOCdsz9SuCbGbmDxhPq1ICL2psmnXyklzHMByFtomN2/QKvdsXE28dJ3UuB6/CRK45QmrpWdcJwdW6OUrqRzoUn7uqjcD0IuhqrC13ii3MHyskcZRWB1JSeSYOgTvTWXKh7yTKkDoE7ghdhwOxdbRo80i/coWGTmKdm9Vrt2GklQTTdFh5qepjcsAIYeESUBnzORlJx4WRVBTdvBd0sfOqedosVJiq8CFXPxBSy9TKPCGj6aMuTWDaDF07QYskK9tVwYjVD8XqeEb8JE1jsYwphxbOKywxJTDiDxW/Fz8G/CryaDFvYb796YSqA1zxROztpXDHn+13/qfoVbR9TbqXBLU9PStFuaiW0aJqUpHxsuD0+/dccyFLhakO5GxXZ8HL8ldhnNeGmQ2QZncQLgwqvF4Ko51E03DI2pnIJMgXkN5EEiNLo/GUn0azg2PFLqciRmg2I3ghUfZatiia34hjwMwLS4QJMy1n9IgaWEqEsqJWONxabWovdR8FyZaRMEtBGZpnj6G4m6bgaFVmHa22ZjQAXHMd4bI1dYCeqb2hNYNinMtMw3+bwkAkasMDlcypNpYqrTpPfSALw1wbmmM2Wd2pFjG8Sm7DztR59i9o7WzutWHiNmsBaL/lIHw8OSS2nZnHVq2FpVKkh5BzeAtu1xabRySSU/I1/CN+HWBlIuQGyK3hLHatMeW775I5z4E+11VStWTap0IkrkpUK7agtrvG8KUCN335ornlC3XA2k2VIABolnPBRuko4QuR7qm5cMKBzkibJLsfadqPul3p0TMg3qXud6WpMNxR0YnjonOcHAiSObdRzCA70l0BsjedynFMN0MeyEdRt/AXBJfIHtqm7MxweQPhAkwXHQEb1kdoNxZeCfABfKG2P906+q3hh7SDcbwUF+FqNnLUlsWa4SQeE7wo6+k58q/2K6Ops4ZlMJtd4OWowgaZmgkTOpB08pRh2tSc7IHt4C8SfNE7T2g2kWtq0WkuvDdY4n73Ktr4XBVmucGZHATBt6jeuFyaezcr8PhnWqf1bX+3JatqW5KehujXmstTY+mIpPlovlNx0E3A5BWn7/YykO8Ba/fYlp6ED5FV09aLzwLPTl0WOOrbgmsOVs79yrcDjmVTLXgnUib+mqsAZ10CeL3PcK1tVA2KMDmUCCpsXWkoUuUW7fBVcI648lyU0v5pZrarUGyWLSoy5NklNLroi2ODlBUgypJUT1qNZe9ndpF/8GofEB4DvcB+U8wrMTwjksLVsQ5pIcDM8CDYhbTCY0V6baojMbPA3OGv69CF36Gpa2vo4taFO12E7aol9Jr2/E3TqLhB06ofTDhvGnDiPWVcYTxU3NVDh/A+pT3HxDzs4esFXkuSEWVlfaDzXaywizv5nZm2fOuoAtbVGbTxjqdMgDxmMoNhmAkZt8QN3BTOocQLacb8FX4rHDPTp1GZw4hry6wbqWls/EM2XhBKRlVz0HYbFyxrg0w5ocI08Qn6rqmytFgLCw6bklqFLGq/u6od+V0A+enzj1VsCOBVZi6edh4jcidnV81ME6izr7xy+fmhF06GkuLJ3sBMgQeOhTmPcLGHcxaP1XcjXDSWlRZGsMNHzJ9AqY5J2nwEPeAOCGq4jch69Y6KDuajtAAPu6hqa0rqKKQ01lsMZJ3Wixtfy1UVdxHHyUrSWw3UAa/SEi7cmcbVdgTp2V9LFPe7w6DX/nirjDVcrYcZP67lWUPCS3Qa/NTtElR0HKPLdspq1LHCJn18os2Oib+LnVo89UytiA3nxnf0QzsWDqDu0vEngnlOn+b9hYxtYLGlTYbgEHkVFXJaSWBQUnXs7XiI+/RGNrRYqiaa8Cu0/JR1dkB7i97i57vp7QoKuxWz8I87rSUsO0EkAAnVNrV6TficJ4an0F1CXpYZdIrH1EsIzrsBHIcghauDH8s9VpfC+7ATzII90PVwh4BSl6ZNcFI677M1U2VTcbtHlb2XH4Ko1pays9oPGHf+QMK9qYT7iyHfQaPiMqXsUU92zL/gMSDLcR/2NP0Q1TAYof4rfNq1L3xYNMeiFdVJ3AfMpNiXY6m2Z04TEjWoz/Qf1ThQxA1dSPk4fVXFRhNiSmmiBrCWmPwU/wD8jd3f/cmh2J/kYf8AOR9FcgXu0ef3dJtI74jyTJMV0U5rVxrSHk+T6Qo34yoNaLx5t/VXdS2gQ9VvDRNyDgpauN/oqf6Db0Vp2L201tfuXZg2tYS1wAeNNRaRI9FDWDvsH6oHFPazxGo0EXF4IIuDbnyVIzcWmJKKkqPVdnvyuynoq3bFHLUa7nlPR32FHsXabcRSp1mkHNZ0bnts4evyIVltqlmbPEfNeldxtHnNVKmAAW6KGrg2kzAJBkTuOtl2lUlrTxF+u/5qZrkKDYJ3/VdTjTKSAbNPEEggEG8H74oN2MFN0dzAdq4G0xYG2qnx7XZczdW8YuDqFW1Kz8rnvtEBoiJfujjGqWcmnQ0Yphn7weTDaYhAvxGIe45GtsYJMwD1lWoxLMjXE/EN+nNN/F09cw5Rp8kkobszGUqxEjwzHZfGQ5wucoIHTWSm1Mba1ju3eqd+96OtzH9J+qjobV7w+Ck6L+IwNCLRr/wi5RSqMv5Aoyy4/wAEQp1HCQQ29yZt0G88kRTlzjAsN53lB47aoa4NIcCNwgg8dSrDBY1jqQey7Tcaj1BuDySabg5NJ4yNPclbQOym9znWsLTcCd8TqBa4T6tIhuVpHMneVwbRLyRBHt6pUakmCstj4TyB7llDMPRrQQ5rXAG1xcdZUOLqd3Aa1kz4gXeIDlEieRXarO7zw9xEl2ptYWEmwQOxn0nuzZbi/ikh3ME81Ny2tQWfn+OB0rTk8fAXVwsxUHi4OAuOExuTsXWdTb3jvhhttb6ZWjeZRmzxbNGUkk5QZAvuI3b1K6rLjLczRG6YNwSPv3VFpLbadX/livUd1mgXB49r/DeYu0tIseMjgUZS2fTaPhHndSHEMBJtJiePmd6Dx2Mw/wDiVBxjOfYG6e4xX1NN/PH/AKJy39KaCmuuQ1thvtHlBXKogS4ho4yPSFXUNtOe4No0Tk3uIj0H6o4UmOdmcSTuDt3QJozU19P9jOLi+QXO2pOUOgbzv6BNqYYfyhWrqRIt8kLXqBnxEN6/d1nDyFT8FdUwpOjR52/5QtTZbjeUViO0GGYY70E/0gu+cR81X1u1bPyUnO5uIHyC5pS0e3/n7F4rV6R07JPX75Lg2aRuhBVtv4h1mtA5NbmPqZUJwuLq/Eanm4tHpopb4P8AKmyuyf8AuaQZiKbG/G9jepv8yq3EY6gPzud/aD9UVR7NO/MWjjvKNpdmGb3u8gAPUobNSWEbdBdmaqbVP5KR6uMeoQNXEYh/ww2f5dfmt7S2DSb/AIc/3X/2Tq9JjBrTYOcAfJH2J9s3ux6PPTs2s746jxwuZUdTYA3nzMk/NbLE7RoCf4jT0APsqTF9oKIBIDnRyDfql2pdhsk7FOFGoaF8tQy2dA8DdwkewW+e3NTI3tXiO1O0zplgykGWnmDIPqvW+zG3GYvD08Q2PEMtRo/LUFnt9bjkQu/00rjtZxeojzuQHQs57OBzDof9/dPJTdqeCqDumD0dofZOKoiYu+KSjzJImNcTIiBCBNAOMvJJbOUHQc/TijmEeXE/QIatUGa3Tz3fVCSTyGLrALsaoZqUnDTxN6HcPfzRlfAtdqAqraVU0qjKgAib/wBpF58vZWr8SeRnSEkara+h5Xe5dgNXZ4AOWfWQh27VbRBzMeTvgSPK8DorB0O8LjBn4dT5qB+y2uNpj197JHCS50xlKLVTKylhKWNfnNMkNsS5oAnWG6yZP3ZWVU08OwNMNY4gNgfmNr9forFjW02Bo0H3JVViH9/UbTEETJPDLpHOYSuOxfqZlLc/0o5+Jax0PMToYMWuQjatKmwF4BzEayZgxu0nRc/BgO8V4iARI3zrqoMZXafC/NujKefDgma2Rd18C3uar9x1FpzAaW89PdEjBNI4nidUNtHHNou8TfC7zXKVGnUIewnKL7xJWTVuK5ZmnW7CCMW5lGnnecrRAtp5wq+jtfO0uoNfVF7AACQdJd+ih7SbUeGdyKPe95LSbwOGm/eOkqDshh6mHJa8tyOiRIkO3GwjkfJJPUb1VGOO3WP4HjCtNyef+xuyHmtVcX0zTbF2Ov4jpFrW3Kwq7DoMmrDsoElrROm8AXjkj8ZTpOfmaQ2rAB5gXggecdVGym8OzZ4bEZQDJM6yYhFaMEqavnJvck+Vx8FOe1lACKVN79wm3TjZD1u0eIfZtJgHQuPz/RX1PZtEEuyAkmb3HoLKRzwD4Wi/IAmOHySOGq8y+yHUtNYj9zKGji6ky5wBvDRlHyV1gMHUyd3Xiow7n3I5tIuCiMRtCm34qjQRum/mNQgcV2owzIGfN0G/qlUIQduX/I7lKSpIazs7RY4nM8jcDHpMIungKLQIYPPVUuI7Ws/Kz1P6Koxvaaq42dkHBtzHAk+6Xdpxwg1N5Zu2loG5scI+aExW0abQCag8ivPK+1XuEGo4jgTZV1XECZ1+az1m8IC00snoL+1NEWGY8YiPmgMR2vyyGiPM/RYZ2N4fIIKviSZk+pQ3TfYdsTVY/tfUd+Y+UwqTF7cedXC/KT7qpqYi1oQz6pPH2Q2t5NdYD8TtEuHHqAqyvXJEWjgE1zjwUTmlOopCtkVQLT/sy7R/hcSaL3RRxENM6Nq6MfyB+E9W8FmXNHFD1mNhWg9rsnJWqZ9Cbbp5mSNRY9EDsvFioz+pvhcOY3+YVJ2L7S/isLleZrUYFTi9mjX8zFjzHNJ9f8PWz/kdZ3Q6OXQ3zZz1XBpS1JIVAbi4K4sAv6BloOlt339EnybCfpysEPsV/e0xB0srGm1CP1IpL6WVeJHeMggC3VP2BiA6mGuIzs8JBuY3EDp7I/EMaINhy49Fltph7ap7suaXa5ReFKb9t7slIf6i2mo/F0w4C4JtJaR5XCbjtp0qI8b2t1ibTGsDesezY9eo6SHu4Fxj3Rjezj+8bUqVAS0yA4l/lfRTWvqvERnoaazIJdWrYkw0Op0/5jZxHIahWNJlLDMJaRzc4jlMnyCfRqgnLPolVwdJxBdTDiDbMM3nBsnjCuVnyxZO+HjwUeK7VB3gotNR8xmghg5nefu6lbimSM5IJ5Wtz3K1q4RhEGAOGg9FX4oYZgvUE8AQfkFJx1MyaY6cMRRXbQw52jVphoextInM/wCEFpizd8mFeYur3LRRpNGbLDGjQAQLhAO7U0KNCWDxZoyEwT/WeSomdqnDM5oYHG5JBJPJMpRgru5PLQu2UuK4WEarZ9GsAMwDp13X5C6MxtZuUh7mt6kLzbGdo6rzDqhjgCQPQKtrbRHGfOUnv0qS+4/tc2zeYzbVJpY7PLwIdGhjQgyBKVftZRFwwzG86rzuptEax6oSrj55Jfcn0N7cTaYnttWM5e7Z5Fx9eKp8TtyrUBz1XGdwJaOllnc1on0ThayV7nljqlgPfiid591EXnp8lC1t9FO0CePkl2I24iBcOSa/NxReZMc9oGoTUgWAPad590wsKIr4hg/NdVmJ2tTbq4eqZRbwK5IIc08fJRub5qnr9oqe6XdBZAV9vVD8LY66qy0Zvom9SJonkIarimjeAsvVxlV2rlG+iTqSVRen8sT3G8Iv6+1WD8yBqbYG4Equ/DwiBQghU9uCBcmOftB50bCHdWqHfHREMpbkzJcpltWEBxfkm2FtWrhK7K7DJFnNJs5p+Jp6+4B3L1LD7UbXpQPEIzMO9zN7f7m8F5W+l4ZVh2e2saDgCYbmkH+R1vF0O9FvchXCsHodHatdjQ1plo06JJtJzXgPD8odfKIIB3xfSZSUwGz7O7S7t+U/DJB87grYuxbACSYAuV5XgMT3lGlWH5m+IcCLH9PJEDa5zA5nCOJkCOSlHUcLR0T01Pk9CptL3d4bWhoINh66lTOMak30AAuvPK/aysBao7qAz6hVeK7XVoIFRxmxNpPLNuHRL70fDB7bPUcbj2Ux4ntb/cVnMT2ppAkBwMakA/LiV5tW2k51z8zKYzEEiTb73pZ6sngeOmlk2re18nwMv/UYHUxqoMR2trmfGGxoGgC3U3WQdUsTooX1SN6lcvJSkX1fbhcbvc4ni4lBVtom9yJ5+wVWXLgS0EMqY127/dMdiHbyPZDOfb9FG0cPVZUAldW5LkneFxrV0hE1ifP/ADuSp33fqoamIa3VwHUge6rsRt+m2wOboCfnoqKEnhCOaWWXrLKUOHJZJ/aR35aZ6k/oEbsLCY7HPIpFrGD4nkQ1p4Tck3VPYl3wI9VdGhGMaBcoLGdoaLNXgngLn5IbHfs8x7agznvWXl1N4m24NeW+IqDZWC2Xmy1Ri805crmgQRranJnqnWhHt3/QX3G8IP2XUxWMDn4el/DZIdVqODKbYbmIO8mOHELZ4Xscz8MO9M1iy5DiGh5G6NwK1GyNk0qND8PTbFMNIyzM5pmSdZkoXtE2rRwLnUWNe+GtDCbeJzWkEn+kn0QUI9IRzfbMFtb9nze4inVd3stl9RzoAiHeEWgnlN1RYj9nGQZn4ukG28RFvUuHNen7Ldi69NraraLZA7yA4zyDswy9brG9uNh7LaC5uMIrjN/Cpk4kvcbgEl2WlB3zpu0V4SYjim+TC1tmNpvLG1GVRuezQ/oVyvh7Aqz7KYZhrU++/wDrBLn6mQGk5QG3JJhTP2Y4tdYgTInWN2nJSlJ7jpjHgz4pKXurK4p7CcQjcNsKWzCLZlAzJZZPyGxjetQ3YdtE9uyxkmFrG2GYbQM6aprsMZ+9y1tTAAFpjVDY/BwR190E+TOHBnaVCxHFDZNx6K9bQh3mg8bhyHadPdFPkRx4IaG0qrGhrXmBokmmgUkdwNpu+yeJPd1aO9pzs6OFx6j5op4LmydecFJJc2tktEr6giRAQjmyUkkqA8nLdUxzkkkGYjdUKY6rHNJJAIzviUjW4JJLUawatjWt+I+6FO3maNaXeg90kl1aejFxtkJ6kk6HYXE4qu/JRptzQTBcNGiTqQFLjOze0S0ueQGBrnOIe0ABszZtybJJJ41F8JAkryzP0sGCbmevRTfhANySS0puxlBUStZuFpF72PXlotP2R7THCNdTNPO1zs4IIa64aCNL6LqSRthpM7iu2WLqPc4FjGkHI0AnLGhn8zond5Kv2XtethxUdTcC5/xFwBkkzMcbn1SSQsKij2yptBlFhfUO9rQAJJLyGt+ZUP7RXVG7OqGg7K8GnBt/1Gg6g7kkl0JUjlzJHjeJwOMxAHfV31BNmuqEt8m6D0TsJsQ03ZXix5gpJKcm+DrjFGp2Xsho+iuG7PaGuEWSSU55LwwCswwy25EdQpcFQGVw3foVxJM8C9kXcyLc/ZQUaOo+7pJLPsPZAaX8PmDHzhDY+lLCfNJJL2Z4KnE0vvoocfTMApJIvoToBFI8UkkkAH//2Q==" alt="img" />
                    <div className='px-4'>
                      <h3 className='font-semibold text-[20px] mt-2 text-[#4E2D2D]'>Сырная тарелка</h3>
                      <p className='mt-2 opacity-70'>Особенно характерно наличие <br />дырочек разных размеров в <br />структуре швейцарских сортов...</p>
                      <p className='underline'><a href="#" className='flex items-center mt-5 text-[#FD9339] gap-2'>Читать далее <span className='mt-[3px] text-[12px]'><FaChevronRight /></span></a></p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
            </div>
          )}
          {activeContent === "content71" && (
            <div
              className={`transition-opacity duration-500 absolute ${
                activeContent === "content71" ? "opacity-100" : "opacity-0"
              } bg-gray-200 p-4`}
            >
              Content 7 Information
            </div>
          )}
          {activeContent === "content81" && (
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
