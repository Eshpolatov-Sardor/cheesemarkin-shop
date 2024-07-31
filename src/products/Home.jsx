import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
function Home({ addToCart }) {
  const [activeContent, setActiveContent] = useState(null);
  const items = [
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: "1300₽/ 1 шт.",
      price1e: "1800₽",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
  ];

  const showContent = (id) => {
    setActiveContent(id);
  };

  return (
    <React.Fragment>
      <div className="p-4 flex container">
        <div className="flex flex-col w-64 bg-white rounded-lg">
          <button onClick={() => showContent('content1')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Закваски для сыра <FaChevronRight /></button>
          <button onClick={() => showContent('content2')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Ферменты для сыра</button>
          <button onClick={() => showContent('content3')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Хлористый кальций</button>
          <button onClick={() => showContent('content4')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Плесень для сыра</button>
          <button onClick={() => showContent('content5')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">CКисломолочные закваски</button>
          <button onClick={() => showContent('content6')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Красители для сыра</button>
          <button onClick={() => showContent('content7')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Специи для сыра</button>
          <button  className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Специи для сыра</button>
        </div>

        <div>
          <div className={`transition-opacity duration-500 absolute block ${activeContent === 'content1' ? 'opacity-100' : 'opacity-0'} p-4`}>
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
      <div className="flex flex-col w-64 bg-white rounded-lg">
        <button onClick={() => showContent('content11')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Формы для сыра <FaChevronRight /></button>
        <button onClick={() => showContent('content21')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Латексное покрытие <FaChevronRight /></button>
        <button onClick={() => showContent('content31')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Воск для сыра <FaChevronRight /></button>
        <button onClick={() => showContent('content41')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1  flex items-center justify-between">Термоусадочные пакеты <FaChevronRight /></button>
        <button onClick={() => showContent('content51')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Дренажные коврики <FaChevronRight /></button>
        <button onClick={() => showContent('content61')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Дренажные мешки и салфетки для прессования <FaChevronRight /></button>
        <button onClick={() => showContent('content71')} className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1 flex items-center justify-between">Дренажные контейнеры <FaChevronRight /></button>
        <button  className="border border-black rounded-lg text-black hover:bg-yellow-200 px-4 py-2 m-1">Специи для сыра</button>
      </div>

      <div className=''>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content11' ? 'opacity-100' : 'opacity-0'} p-4`}>
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
