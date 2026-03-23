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

      <h2 className="mb-8 text-center text-3xl font-bold">
        Our Services
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {services.map((s, i) => (
          <div key={i} className="hover:scale-80 rounded bg-white p-6  shadow hover:-translate-y-1 hover:bg-indigo-200">
            {s}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Services