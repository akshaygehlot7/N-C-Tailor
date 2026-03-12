import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="p-10 bg-pink-50
        "
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="flex justify-around">
        <div className="p-2">
          <p className="text-lg">
            157 Satyam Shivam AP <br />
            Near Ranka Hospital <br />
            Mukund Nagar Pune-37
          </p>
        </div>
        <div className="p-2">
          <p className="text-lg">📞 9922278174</p>
          <p className="text-lg">📞 9822933458</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
