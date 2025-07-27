import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-4xl text-[#fff] md:text-6xl font-bold mb-4">
        Welcome to Imaginary Realms
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl">
        Dive into the world of Sci-Fi characters, fan art, and community-driven
        stories. Unleash your imagination.
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
