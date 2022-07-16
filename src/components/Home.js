import React from "react";
import image from "../assets/profile_photo.png";
const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="person's profile pic"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center items-center max-h-screen pt-24 lg:pg-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi, I'm Pank
        </h1>
      </section>
    </main>
  );
};

export default Home;
