import React from "react";

const Main = () => {
  return (
    <div
      className="h-96 w-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/bg-image.png')" }}
    >
      <h1 className="text-white text-5xl font-bold text-center pt-50">
        Welcome to Annapurna Restaurant
      </h1>
      <p className="text-white text-xl text-center pt-7">
        Authentic flavors, rich traditions. Experience the best cuisine with us.
      </p>
    </div>
  );
};

export default Main;



  