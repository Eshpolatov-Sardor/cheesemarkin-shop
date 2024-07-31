import React, { useState } from 'react';

function Home({ addToCart }) {
  const [activeContent, setActiveContent] = useState(null);
  const items = [
    {
      name: "Душистый перец горошком (100г)",
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
    <div className="p-4 flex container">
      <div className="flex flex-col">
        <button onClick={() => showContent('content1')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 1</button>
        <button onClick={() => showContent('content2')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 2</button>
        <button onClick={() => showContent('content3')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 3</button>
        <button onClick={() => showContent('content4')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 4</button>
        <button onClick={() => showContent('content5')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 5</button>
        <button onClick={() => showContent('content6')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 6</button>
        <button onClick={() => showContent('content7')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 7</button>
        <button onClick={() => showContent('content8')} className="bg-blue-500 text-white px-4 py-2 m-1">Content 8</button>
      </div>

      <div>
        <div className={`transition-opacity duration-500 absolute ${activeContent === 'content1' ? 'opacity-100' : 'opacity-0'} bg-gray-200 p-4`}>
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
                <span className="inline">
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
  );
}

export default Home;
