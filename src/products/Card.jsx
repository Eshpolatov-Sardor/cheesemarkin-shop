import React, { useState } from "react";

const Cart = ({ cart, length, onRemoveItem, setCart }) => {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [agreement, setAgreement] = useState(false);

  // Create state to manage the count for each item
  const [itemCounts, setItemCounts] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Calculate the total price based on item counts
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price1e || 0) * itemCounts[item.id],
    0
  );

  // Handlers to increment and decrement item counts
  const incrementCount = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrementCount = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(1, prevCounts[id] - 1),
    }));
  };

  // Handler to remove an item from the cart
  const handleRemoveItem = (id) => {

    let res = cart.filter((item) => item.id !== id)
    setCart(res)
  };

  return (
    <div className="flex container">
      <div className="container">
        <h1 className="text-2xl font-mono p-4">Оформление заказа</h1>
        <div className="w-[850px] bg-white rounded-lg p-10">
          <h1 className="ml-5 text-xl">Контактные данные:</h1>
          <hr />
          <div className="flex justify-between py-4">
            <form action="name" className="flex flex-col">
              <label className="text-xl p-2">Имя и фамилия</label>
              <input
                className="border border-block p-2 w-96 rounded-lg"
                type="text"
                placeholder="Иванов Андрей"
              />
            </form>
            <form action="name" className="flex flex-col">
              <label className="text-xl p-2">Электронный адрес</label>
              <input
                className="border border-block p-2 w-96 rounded-lg"
                type="text"
                placeholder="ivan.services@gmail.com"
              />
            </form>
          </div>
          <hr />
        </div>
        <div className="w-[850px] gap-5 p-10 bg-white mt-10 rounded-lg">
          <div className="flex justify-between">
            <h1>Заказ {length}</h1>
            <h2>на сумму {totalPrice.toFixed(2)} руб.</h2>
          </div>
          {cart.length === 0 ? (
            <h1 className="text-center text-4xl">Cart is empty</h1>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex mt-10 bg-white border-none rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-44 h-44 p-2"
                    src={item.image}
                    alt={item.name}
                  />
                </a>
                <div className="p-5 flex">
                  <div>
                  <a href="#">
                    <h5 className="mb-2 w-96 text-xl font-bold tracking-tight text-black dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="mb-3 text-xs text-black dark:text-white">
                    {item.price}
                  </p>
                  <p className="mb-3 text-black dark:text-white">{item.price1e}</p>
                  <button onClick={() => handleRemoveItem(item.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      Delete
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                  </button>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button onClick={() => decrementCount(item.id)}>-</button>
                    <p>{itemCounts[item.id]}</p>
                    <button onClick={() => incrementCount(item.id)}>+</button>
                  </div>
                  <div className="flex items-center ml-5">
                    <p>{(item.price1e * itemCounts[item.id]).toFixed(2)} руб.</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="bg-white w-[850px] p-10">
          <h2 className="text-lg font-semibold mb-4">Выберите способ доставки:</h2>
          <div className="flex flex-col space-y-2 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="delivery"
                value="free"
                checked={deliveryMethod === "free"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="form-radio"
              />
              <span>Бесплатная доставка (0 руб.)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="delivery"
                value="courier"
                checked={deliveryMethod === "courier"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="form-radio"
              />
              <span>Курьер (0 руб.)</span>
            </label>
          </div>

          <h2 className="text-lg font-semibold mb-4">Ваши данные для доставки:</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Имя и фамилия"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Номер телефона"
              className="p-2 border border-gray-300 rounded"
            />
            <select className="p-2 border border-gray-300 rounded">
              <option>Выберите страну</option>
              <option>Российская Федерация</option>
              {/* Add more countries as needed */}
            </select>
            <select className="p-2 border border-gray-300 rounded">
              <option>Выберите регион</option>
              <option>Нижний Новгород</option>
              {/* Add more regions as needed */}
            </select>
            <input
              type="text"
              placeholder="Улица, дом и квартира"
              className="p-2 border border-gray-300 rounded col-span-2"
            />
            <input
              type="text"
              placeholder="Индекс"
              className="p-2 border border-gray-300 rounded col-span-2"
            />
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              className="form-checkbox"
            />
            <span>
              Согласен на обработку персональных данных в соответствии с{" "}
              <a href="#" className="text-orange-500">
                политикой конфиденциальности
              </a>
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-4">Выберите способ оплаты:</h2>
          <div className="flex flex-col space-y-2 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span>Онлайн оплата</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span>Оплата наличными</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cards"
                checked={paymentMethod === "cards"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span>Кредитные карты / Интернет банкинг / QIWI / Yandex</span>
            </label>
          </div>
        </div>
      </div>
      <div className="w-96 bg-[#FEF0C2] p-5 h-[400px] rounded-lg pb-10">
        <h1 className="p-2">
          Итоги заказа
        </h1>
        <hr />
        <h2 className="p-2">
          Есть промокод для скидки?
        </h2>
        <div className="p-2 flex items-center">
          <input className="mb-2 py-1 px-2" type="text" value="cheese2021"/>
          <button className="flex items-center mb-2 py-1 px-2 bg-white border-l boder-block">Применить</button>
        </div>
        <span className="flex justify-between text-[15px] mt-2 p-2">
          <h2>Сумма заказа</h2>
          {totalPrice.toFixed(2)} руб.
        </span>
        <span className="flex justify-between text-[15px] mt-2 p-2">
          <h2>Доставка</h2>
          0 руб.
        </span>
        <span className="flex justify-between text-[15px] mt-2 p-2">
          <h2>Промокод</h2>
          -300 руб.
        </span>
        <hr />
        <span className="flex justify-between text-[15px] mt-2 p-2">
          <h2>К оплате</h2>
          {(totalPrice.toFixed(2))-300} руб.
        </span>
        <button className="bg-yellow-500 py-2 px-10 rounded-lg ml-14">Подтвердить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
