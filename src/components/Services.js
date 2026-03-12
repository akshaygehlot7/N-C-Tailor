import React from 'react'

function Services() {

  const services = [
    "Designer Blouse Stitching",
    "Party Wear Dresses",
    "Hand Work Jari",
    "Machine Embroidery",
    "All Ladies Repair Work"
  ]
  return (
    <section id="services" className="bg-gray-100 p-10">

      <h2 className="text-3xl text-center font-bold mb-8">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 shadow rounded  hover:-translate-y-1 hover:scale-80 hover:bg-indigo-200">
            {s}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Services