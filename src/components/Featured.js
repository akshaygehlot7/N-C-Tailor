import React from 'react'

const products = [
  {
    name: "Designer Blouse",
    img: "https://via.placeholder.com/300"
  },
  {
    name: "Fancy Kurti",
    img: "https://via.placeholder.com/300"
  },
  {
    name: "Party Wear Dress",
    img: "https://via.placeholder.com/300"
  }
];

function Featured() {
  return (
    <section className="p-10" id="designs">

      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Designs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((item, i) => (
          <div key={i} className="shadow-lg rounded overflow-hidden">

            <img src={item.img} alt="" />

            <h3 className="p-4 text-center font-semibold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200">
              {item.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Featured