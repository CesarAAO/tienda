import React from "react";

const Card = ({ img, title, price }) => {
  return (
    <article>
      <div class="w-full h-44 bg-gray-200 mb-2 relative">
        <img
          src={img}
          alt=""
        />
        <button class="text-xs font-semibold bg-white absolute bottom-2 hover:scale-105 hover:text-white hover:bg-rose-500 transition-all right-2 border rounded-full px-4 py-1">
          Añadir al carrito
        </button>
      </div>
      <div class="flex justify-between items-center px-1">
        <span class="font-medium">{title}</span>
        <span class="text-rose-500 font-semibold">${price}</span>
      </div>
    </article>
  );
};

export default Card;

const Main = () => {
  return (
    <>
      <Card
        img="https://es.marsgaming.eu/uploads/_thumnails/mrk0-light-1_960x480.png"
        title="Teclado Gaming"
        price="40"
      />
      <Card
        img="https://www.gizcomputer.com/wp-content/uploads/2018/11/Keep-Out-F89CHV2-F89PRO-y-F89PT.png"
        title="Teclado Keepout"
        price="60"
      />
    </>
  );
};
