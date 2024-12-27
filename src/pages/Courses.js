import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-4xl font-bold">หลักสูตร</h1>
      <p className="mt-4">มีระบของ ปวช. และ ปวส. สามารถอ่านรายละเอียดต่อไปได้เลยตามไฟล์ PDF</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">มีดั้งนี้</h2>

        <div className="mt-8 space-y-6">
          {/* First PDF Embed */}
          <div className="pdf-container">
            <h3 className="text-xl font-semibold">ประกาศนียบัตรวิชาชีพ</h3>
            <embed
              src="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/preview" // Replace with your actual PDF path
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>

          {/* Second PDF Embed */}
          <div className="pdf-container">
            <h3 className="text-xl font-semibold">ประกาศนียบัตรวิชาชีพ</h3>
            <embed
              src="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/preview" // Replace with your actual PDF path
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>

          {/* Third PDF Embed */}
          <div className="pdf-container">
            <h3 className="text-xl font-semibold">ประกาศนียบัตรวิชาชีพชั้นสูง</h3>
            <embed
              src="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/preview" // Replace with your actual PDF path
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>

          {/* Fourth PDF Embed */}
          <div className="pdf-container">
            <h3 className="text-xl font-semibold">ประกาศนียบัตรวิชาชีพชั้นสูง</h3>
            <embed
              src="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/preview" // Replace with your actual PDF path
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
