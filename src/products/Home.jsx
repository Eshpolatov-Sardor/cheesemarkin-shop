import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { BsBarChartSteps } from "react-icons/bs";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Fix the default marker icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconPng,
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});
function Home({ addToCart }) {
  const [activeContent, setActiveContent] = useState(null);
  const items = [
    {
      id :  1,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id :   2,  name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id :   3,  name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id :   4,  name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {

      id :   5,  name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id :   6,  name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id :  7 ,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {

      id :   8,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
  ];
  const dost = [
        {
          id: 1,
          icon:<BsReverseLayoutTextSidebarReverse />,
          name: "Предоплата по счету1",
          price: "При оформлении заказа выберите в поле оплаты счёт для юридических лиц и введите реквизиты. Счет на оплату будет выслан на электронную почту."
        },
        { id: 2,
          icon:<GiNetworkBars />,
          name: "Он-лайн оплата",
          price: "Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money"
        },
        { id: 3,
          icon:<BsBarChartSteps />,
          name: "Наличными при получении",
          price: "Вы всегда можете оплатить заказ наличными – курьеру, на почте или при получении в транспортной компании."
        },
  ];
  const kontakt=[
    {
      id: 1,
      icon: "Телефон",
      name: "+7 9851425151",
      price: "+7 9851425151"
    },
    {
      id: 2,
      icon: "Мы работаем",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной"
    },
    { id: 3,
      icon:"Электронная почта",
      name: "По вопросам связанным с заказами:zakaz@lacheese.ru",
      price: "По вопросам сотрудничества: opt@lacheese.ru "
    },
    {
      id: 4,
      icon: "График работы",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной"
    },
    {
      id: 5,
      icon: "Адрес",
      name: "ул.енина 25, офис 502",
      price: "ул.енина 25, офис 502"
    },
    {
      id: 6,
      icon: "Часы работы",
      name: "Понедельник-пятница — с 10:00 до 18:00",
      price: "суббота — выходно, воскресенье — выходной"
    },
  ];

  const showContent = (id) => {
    setActiveContent(id);
  };

  return (
    <React.Fragment>
      <hr />
      <div className="container">
        <div className="flex w-ful rounded-lg">
          <button className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Формы для сыра</button>
          <button onClick={() => showContent('content111')} className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Доставка и оплата</button>
          <button onClick={() => showContent('content211')} className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Калькулятор Сыродела</button>
          <button onClick={() => showContent('content311')} className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Отзывы</button>
          <button onClick={() => showContent('content411')} className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1  flex items-center justify-between">Вопросы и ответы</button>
          <button onClick={() => showContent('content511')} className="rounded-lg text-black text-xs hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Контакты</button>
        </div>

        <div className='ml-80'>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content111' ? 'opacity-100' : 'opacity-0'} p-4`}>
              <h1 className='text-xl p-4 font-mono'>Доставка и оплата</h1>
              <hr />
              <h2 className='p-4 font-mono text-lg'>Способы оплаты:</h2>
              <div className=" mx-auto p-4 flex gap-10">
                {dost.map(item => (
                  <div key={item.id} className="bg-white w-64 shadow-md rounded-lg p-6 mb-4">
                    <div className='bg-yellow-500 p-4 w-12 rounded-full'>
                      {item.icon}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className='flex justify-between'>
                <div>
                  <h1 className='text-xl font-mono p-4'>Способы Доставки:</h1>
                  <h1 className='text-xl font-mono p-4'>Доставка по Новосибирску</h1>
                  <p className='p-2'>Вы можете забрать товар из нашего <br /> магазина самостоятельно, приехав по <br /> адресу: </p>
                  <p className='text-yellow-400 p-2'>г. Новосибирск, ул. Котовского, д. 12/1, <br /> офис 1</p>
                  <div className='flex gap-2 items-center p-2'>
                    <MdOutlineDepartureBoard className="text-block text-6xl mr-4"/>
                    <p className='text-xs'>Или заказать курьерскую доставку. <br /> Стоимость доставки – 150 рублей.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg">
                  <div className='w-[450px] h-[350px] rounded-lg'>
                    <MapContainer center={[38.8, 65.7667]} zoom={13} className="h-full w-full rounded-lg">
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[38.8, 65.7667]}>
                        <Popup>
                          Qarshi Ayraport <br /> Vorzakon
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
              </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <img className='w-[400px] h-[350px] rounded-lg mt-5' src="https://cdek-siam.com/images/358a112e809bad6125041b958105909d.jpeg" alt="cdek" />
                </div>
                <div className='w-[450px]'>
                  <h1 className='text-2xl font-mono p-4'>Доставка по Российской федерации </h1>
                  <p className='text-xxs w-96'>Доставка по РФ осуществляется логистическими службами СДЭК и Почта России.
                        В любой момент Вы можете отследить путь своего заказа по трек-номеру.
                        Приблизительные сроки и стоимость доставки указаны в таблице ниже. Окончательная сумма зависит от веса и способа оплаты заказа (при наложенном платеже – стоимость доставки выше) и рассчитывается автоматически в момент оформления.</p>
                </div>
              </div>
              <div className='w-[1150px] -ml-80 mt-10'>
                <ol className='flex justify-between bg-[#4E2D2D] p-2 text-white'>
                  <li className='w-72'></li>
                  <li className='w-72'>Транпортная компания СДЭК</li>
                  <li className='w-72'>Пункт выдачи Boxberry</li>
                  <li className='w-72'>Почта России</li>
                </ol>
                <ol className='flex justify-between p-2 bg-[#FBE8BB]'>
                  <li className='w-72'>Сроки доставки</li>
                  <li className='w-72'>От 7 дней</li>
                  <li className='w-72'>2-4 дня</li>
                  <li className='w-72'>2-4 дня</li>
                </ol>
                <ol className='flex justify-between p-2'>
                  <li className='w-72'>Стоимость доставки</li>
                  <li className='w-72'>От 200 руб.</li>
                  <li className='w-80'>От 350 руб. Итоговая сумма будет рассчитана после указания точного адреса</li>
                  <li className='w-72'>От 200 руб.</li>
                </ol>
                <ol className='flex justify-between p-2 bg-[#FBE8BB]'>
                  <li className='w-72'>Бесплатная доставка</li>
                  <li className='w-72'>При заказе от 2000 руб.</li>
                  <li className='w-72'>При заказе от 7000 руб.</li>
                  <li className='w-72'>При заказе от 2000 руб.</li>
                </ol>
              </div>
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content211' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 2 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content311' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 3 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content411' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 4 Information
          </div>
          <div className={`transition-opacity duration-500 w-[900px] absolute ${activeContent === 'content511' ? 'opacity-100' : 'opacity-0'} bg-[#FFBED] mt-10 rounded-lg p-4`}>
              <h1 className='text-2xl font-mono'>Контакты</h1>
              <div className='flex justify-between flex-wrap'>
              {kontakt.map(item=>(
                <div key={item.id}>
                 <div className='w-full'>
                  <div className='w-64 h-44'>
                    <h3 className='text-2xl py-4'>{item.icon}</h3>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                  </div>
                 </div>
                 <hr />
                </div>
              ))}
              </div>
              <div className='flex mt-10'>
                <div className='flex flex-col'>
                  <h1 className='text-2xl font-mono'>Остались вопросы?</h1>
                  <p className='mt-4 text-xl'>Заполните форму и мы вам ответим</p>
                  <input className='border border-block p-2 rounded-lg mt-2' type="text" placeholder='Ваше Имя' />
                  <input className='border border-block p-2 mt-2 rounded-lg' type="text" placeholder='Email'/>
                  <textarea className='border border-block p-2 mt-2 rounded-lg' name="10" id="" cols="10" rows="5" placeholder='Сообщение или вопрос'></textarea>
                  <button className='mt-2 bg-yellow-400 p-2 rounded-lg'>Отправить </button>
                </div>
                <div>
                <div className="p-4 rounded-lg">
                    <div className='w-[450px] h-[350px] rounded-lg'>
                      <MapContainer center={[38.8, 65.7667]} zoom={13} className="h-full w-full rounded-lg">
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
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
        </div>
      </div>
      <hr />
      <div>

      </div>
      <div className="p-4 flex container">
        <div className="flex flex-col w-72 bg-white rounded-lg">
          <button onClick={() => showContent('content1')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Закваски для сыра <FaChevronRight /></button>
          <button onClick={() => showContent('content2')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Ферменты для сыра <FaChevronRight /></button>
          <button onClick={() => showContent('content3')} className="border border-black rounded-lg text-black hover:bg-yellow-200 text-left px-4 py-2 m-1">Хлористый кальций</button>
          <button onClick={() => showContent('content4')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Плесень для сыра <FaChevronRight /></button>
          <button onClick={() => showContent('content5')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">CКисломолочные закваски <FaChevronRight /></button>
          <button onClick={() => showContent('content6')} className="border border-black rounded-lg text-black hover:bg-yellow-200 text-left px-4 py-2 m-1">Красители для сыра</button>
          <button onClick={() => showContent('content7')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Специи для сыра <FaChevronRight /></button>
          <button  className="border border-black rounded-lg text-black hover:bg-yellow-200  text-left px-4 py-2 m-1">Специи для сыра</button>
        </div>

        <div className='-mt-8'>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content1' ? 'opacity-100' : 'opacity-0'} p-4`}>
          <h1 className='text-2xl p-2 font-mono '>Оборудование</h1>
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
                  <div className='flex pb-2 items-center '>
                    <span className="inline text-xs">
                      <p>{item.price}</p>
                      <p className="text-red-700 line-through">{item.price1e}</p>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 inline"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content2' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 2 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content3' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 3 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content4' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 4 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content5' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 5 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content6' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 6 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content7' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 7 Information
          </div>
          <div className={`transition-opacity duration-500 absolute ${activeContent === 'content8' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
            Content 8 Information
          </div>
        </div>
      </div>
    <div className="p-4 flex container">
      <div className="flex flex-col w-72 bg-white rounded-lg">
        <button onClick={() => showContent('content11')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Формы для сыра <FaChevronRight /></button>
        <button onClick={() => showContent('content21')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Латексное покрытие</button>
        <button onClick={() => showContent('content31')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Воск для сыра</button>
        <button onClick={() => showContent('content41')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1  flex items-center justify-between">Термоусадочные пакеты <FaChevronRight /></button>
        <button onClick={() => showContent('content51')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Дренажные коврики</button>
        <button onClick={() => showContent('content61')} className="border border-black rounded-lg text-[15px] text-black hover:bg-yellow-200 px-4 py-1 m-1 flex items-center justify-between">Дренажные мешки и салфетки <br /> для прессования </button>
        <button onClick={() => showContent('content71')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Дренажные контейнеры</button>
        <button  className="border border-black rounded-lg text-left text-black hover:bg-yellow-200 px-4 py-2 m-1">Специи для сыра</button>
      </div>

      <div className='-mt-[470px]'>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content11' ? 'opacity-100' : 'opacity-0'} p-4`}>
        <h1 className='text-2xl p-2 font-mono '>Оборудование</h1>
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
                <div className='flex pb-2 items-center '>
                  <span className="inline text-xs">
                    <p>{item.price}</p>
                    <p className="text-red-700 line-through">{item.price1e}</p>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 inline"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content21' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 2 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content31' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 3 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content41' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 4 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content51' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 5 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content61' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 6 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content71' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 7 Information
        </div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content81' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
          Content 8 Information
        </div>
      </div>

  </div>
    </React.Fragment>

  );
}

export default Home;
