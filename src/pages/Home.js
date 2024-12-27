import React from "react";

const Home = () => {
  return (
    <div className="pt-20"> {/* Add padding-top to prevent overlap */}
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Lanna Polytechnic</h1>
          <p className="mt-4">Empowering students with skills for the future</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">Lanna Polytechnic College is a renowned institution that fosters creativity and innovation in students.</p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Image Cards for Activities */}
            <div className="bg-white shadow-lg p-4">
              <img src="activity1.jpg" alt="Activity 1" className="w-full h-48 object-cover" />
              <h3 className="mt-4 font-semibold">Activity 1</h3>
            </div>
            <div className="bg-white shadow-lg p-4">
              <img src="activity2.jpg" alt="Activity 2" className="w-full h-48 object-cover" />
              <h3 className="mt-4 font-semibold">Activity 2</h3>
            </div>
            <div className="bg-white shadow-lg p-4">
              <img src="activity3.jpg" alt="Activity 3" className="w-full h-48 object-cover" />
              <h3 className="mt-4 font-semibold">Activity 3</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
