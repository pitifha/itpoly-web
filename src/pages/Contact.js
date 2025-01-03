import React, { useState } from "react";

const Contact = () => {
  // State สำหรับเก็บจำนวนดาวที่ผู้ใช้เลือก
  const [rating, setRating] = useState(0);

  // ฟังก์ชันเมื่อผู้ใช้คลิกดาว
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="container mx-auto py-8 text-center px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">ติดต่อเรา</h1>
      <form className="mt-6 max-w-2xl mx-auto">
        <label className="block text-lg mb-2">Name:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Your Name"
        />
        <label className="block text-lg mb-2">Email:</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Your Email"
        />
        <label className="block text-lg mb-2">Message:</label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          placeholder="Your Message"
        ></textarea>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">ให้คะแนนตามความพึ่งพอใจ</h2>
          <div className="flex justify-center items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl cursor-pointer ${
                  rating >= star ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg">
            คุณให้คะแนน:{" "}
            <span className="font-semibold text-yellow-500">{rating} ดาว</span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 mt-6"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        <p className="text-lg">2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง, Chiang Mai, Thailand, Chiang Mai</p>
        <p className="text-lg">Phone: 053 213 061</p>
        <p className="text-lg">Email: lannapoly@lannapoly.ac.th</p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">แผนที่</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.408446532354!2d98.98770782899899!3d18.811330263950982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1735868390091!5m2!1sth!2sth"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lanna Polytechnic Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
