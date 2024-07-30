import React, { useState } from "react";
import "../../src/index.css";


const ProductList = ({ addToCart }) => {
  const [selectedCategory1, setSelectedCategory1] =
    useState("Закваски для сыра");
  const [selectedCategory2, setSelectedCategory2] = useState("Формы для сыра");
  const renderSVGIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M7.5 15l5-5-5-5"
          stroke="#808080"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const categories = [
    "Закваски для сыра",
    "Ферменты для сыра",
    "Хлористый кальций",
    "Плесень для сыра",
    "Кисломолочные закваски",
    "Красители для сыра",
    "Специи для сыра",
  ];

  const categories1 = [
    "Формы для сыра",
    "Латексное покрытие",
    "Воск для сыра",
    "Термоусадочные пакеты",
    "Дренажные коврики",
    "Дренажные мешки и салфетки для прессования",
    "Дренажные контейнеры",
  ];

  const items = {
    "Закваски для сыра": [
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
    ],
    "Ферменты для сыра": [],
    "Хлористый кальций": [],
    "Плесень для сыра": [],
    "Кисломолочные закваски": [],
    "Красители для сыра": [],
    "Специи для сыра": [],
    "Формы для сыра": [
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      // Add more items here...
    ],
    "Латексное покрытие": [],
    "Воск для сыра": [],
    "Термоусадочные пакеты": [],
    "Дренажные коврики": [],
    "Дренажные мешки и салфетки для прессования": [],
    "Дренажные контейнеры": [],
  };

  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="w-1/4 bg-white rounded-lg pt-3">
            <h2 className="font-bold mb-4 ml-4">Категория 1</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory1(category)}
                  className="cursor-pointer mb-5 hover:bg-yellow-400 rounded-lg px-4 py-2 w-full flex items-center justify-between"
                >
                  <span className="ml-2">{category}</span>
                  {renderSVGIcon()}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 p-4">
            <h2 className="font-bold mb-4">Категория 1 Ингредиенты</h2>
            <div className="flex flex-wrap justify-between rounded-lg">
              {items[selectedCategory1]?.map((item, index) => (
                <div key={index} className="border w-52 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-2 w-full h-44 rounded-lg"
                  />
                  <h3 className="py-2 px-2">{item.name}</h3>
                  <hr />
                  <div className="flex items-center py-4 justify-between">
                    <span>
                      <p className="px-1">{item.price}</p>
                      {item.price1e && (
                        <p className="px-2 text-red-700 line-through">
                          {item.price1e}
                        </p>
                      )}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-2 ml-2 mb-2 mr-2 bg-orange-500 text-white py-2 px-2 rounded inline"
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="w-1/4 bg-white rounded-lg">
            <h2 className="font-bold mb-4 ml-4 pt-3">Оборудование</h2>
            <ul>
              {categories1.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory2(category)}
                  className="cursor-pointer mb-4 hover:bg-yellow-400 rounded-lg px-4 py-2 flex items-center justify-between"
                >
                  <span className="w-64">{category}</span>
                  {renderSVGIcon()}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 p-4">
            <h2 className="font-bold mb-4">Оборудование</h2>
            <div className="flex flex-wrap justify-between rounded-lg">
              {items[selectedCategory2]?.map((item, index) => (
                <div key={index} className="border w-52 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-2 w-full h-44 rounded-lg"
                  />
                  <h3 className="py-2 px-2">{item.name}</h3>
                  <hr />
                  <div className="flex items-center py-4 justify-between">
                    <span>
                      <p className="px-1">{item.price}</p>
                      {item.price1e && (
                        <p className="px-2 text-red-700 line-through">
                          {item.price1e}
                        </p>
                      )}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-2 ml-2 mb-2 mr-2 bg-orange-500 text-white py-2 px-2 rounded inline"
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://example.com/path/to/your/image.jpg"
          alt="paggi rasm"
        />
        <div>
          <h1>Мы подобрали для вас</h1>
          <span>
            <img src="" alt="paggi rasm1" />
            <img
              src="https://example.com/path/to/another/image.jpg"
              alt="paggi rasm2"
            />
          </span>
        </div>
        <div className="max-w-2xl m-auto">
          <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                </div>
            </div>
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
