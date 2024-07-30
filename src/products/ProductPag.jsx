import React, { useState } from "react";
import '../../src/index.css';

const ProductPag = ({addToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState("Закваски для сыра");

  const categories = [
    "Закваски для сыра",
    "Ферменты для сыра",
    "Хлористый кальций",
    "Плесень для сыра",
    "Кисломолочные закваски",
    "Красители для сыра",
    "Специи для сыра",
  ];

  const items = {
    "Закваски для сыра":
    [
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "1300₽/ 1 шт.",
        price1e: "1800₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAUtps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9Eol2xw_oeMfngWTadJd2n6tieADUs6iA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
      },
    ],
    "Ферменты для сыра": [
      {
        name: "Форма для твердого сыра 1 кг",
        price: "1300₽",
        image: "path/to/image3.jpg",
      },
      {
        name: "Красный перец молотый (100г)",
        price: "380₽",
        image: "path/to/image4.jpg",
      },
    ],
    "Хлористый кальций": [
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽",
        image: "path/to/image1.jpg",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "200₽",
        image: "path/to/image2.jpg",
      },
    ],
    "Плесень для сыра": [
      {
        name: "Форма для твердого сыра 1 кг",
        price: "1300₽",
        image: "path/to/image3.jpg",
      },
      {
        name: "Красный перец молотый (100г)",
        price: "380₽",
        image: "path/to/image4.jpg",
      },
    ],
    "Кисломолочные закваски": [
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽",
        image: "path/to/image1.jpg",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "200₽",
        image: "path/to/image2.jpg",
      },
    ],
    "Красители для сыра": [
      {
        name: "Форма для твердого сыра 1 кг",
        price: "1300₽",
        image: "path/to/image3.jpg",
      },
      {
        name: "Красный перец молотый (100г)",
        price: "380₽",
        image: "path/to/image4.jpg",
      },
    ],
    "Специи для сыра": [
      {
        name: "Мезофильная закваска Danisco CHOOZIT MM...",
        price: "1300₽",
        image: "path/to/image1.jpg",
      },
      {
        name: "Душистый перец горошком (100г)",
        price: "200₽",
        image: "path/to/image2.jpg",
      },
    ],
  };

  return (
    <div className="flex container">
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="font-bold mb-4">Ингредиенты</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer mb-2 hover:bg-gray-200"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="font-bold mb-4">Ингредиенты</h2>
        <div className="flex flex-wrap justify-between rounded-lg">
          {items[selectedCategory]?.map((item, index) => (
            <div key={index} className="border w-52 rounded-lg">
              <img src={item.image} alt={item.name} className="mb-2 w-full h-44 rounded-lg" />
              <h3 className="py-2 px-2">{item.name}</h3>
              <hr/>
              <div className="flex items-center py-4 justify-between">
               <span>
               <p className="px-1">{item.price}</p>
                <p className="px-2 text-red-700 line-through ">{item.price1e}</p>
               </span>
              <button onClick={()=>addToCart(item)} className="mt-2 ml-2 mb-2 mr-2 bg-orange-500 text-white py-2 px-2 rounded inline">
                Добавить
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPag;
