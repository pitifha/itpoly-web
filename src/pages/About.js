import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">About Lanna Polytechnic</h2>
          <p className="mt-4 text-lg">
            Lanna Polytechnic College aims to provide quality education and training to students, preparing them for careers in technology and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Mission & Vision</h2>
          <p className="mt-4 text-lg">
            Our mission is to provide comprehensive education programs that meet the needs of students and industries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
