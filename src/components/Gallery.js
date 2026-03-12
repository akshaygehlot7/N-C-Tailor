import React from 'react'

function Gallery() {

  const images = new Array(6).fill("https://styleunion.in/cdn/shop/files/EPT00107OFFWHITE_1.jpg?v=1771844995&width=713");
  return (
    <section className="p-10">

      <h2 className="text-3xl text-center font-bold mb-8">
        Design Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((img, i) => (
          <img key={i} src={img} className="rounded shadow" />
        ))}

      </div>

    </section>
  )
}

export default Gallery