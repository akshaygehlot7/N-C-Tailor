import React from 'react'

function Hero() {
  return (
    <section
      className="h-[80vh] flex flex-col justify-center items-center bg-pink-100"
      id="home"
    >
      <h1 className="text-5xl font-bold mb-5">
        N.C. Ladies Designer & Boutique
      </h1>

      <p className="text-xl">
        Elegant Blouses • Party Wear • Custom Stitching
      </p>

      <a
        href="https://wa.me/919822933458"
        className="mt-6 bg-green-500 text-white px-6 py-3 rounded"
      >
        Order on WhatsApp
      </a>
    </section>
  )
}

export default Hero