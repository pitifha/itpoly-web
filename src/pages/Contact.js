import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-4xl font-bold">ติดต่อเรา</h1>
      <form className="mt-6">
        <label className="block text-lg mb-2">Name:</label>
        <input type="text" className="w-full p-2 mb-4 border" />
        <label className="block text-lg mb-2">Email:</label>
        <input type="email" className="w-full p-2 mb-4 border" />
        <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded">Submit</button>
      </form>
      <div className="mt-6">
        <p>Phone: 123-456-789</p>
        <p>Email: info@lannapoly.ac.th</p>
      </div>
    </div>
  );
};

export default Contact;
