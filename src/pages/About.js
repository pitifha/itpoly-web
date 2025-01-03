import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">เกี่ยวกับวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</h1>
          <p className="text-base sm:text-lg">
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่มุ่งเน้นในการสร้างการศึกษาที่มีคุณภาพเพื่อเตรียมความพร้อมนักเรียนสู่เส้นทางอาชีพที่ทันสมัย
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold">ประวัติวิทยาลัย</h2>
            <p className="mt-4 text-base sm:text-lg">
              วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ (Lanna Polytechnic ChiangMai) ตั้งอยู่เลขที่ 2 ถนนสุขเกษม ตำบล ป่าตัน อำเภอ เมือง จังหวัด เชียงใหม่ ได้รับอนุญาตให้ดำเนินการจากกระทรวงศึกษาธิการ ตั้งแต่ วันที่ 18 ธันวาคม 2521 เป็นต้นมา มีวัตถุประสงค์เพื่อส่งเสริมการศึกษา ด้านวิชาชีพแก่เยาวชนชาวเชียงใหม่ และเยาวชนทั่วไป โดยเฉพาะในภาคเหนือได้มีโอกาสศึกษาในสาขาวิชาช่างอุตสาหกรรม ในระดับมาตรฐานทัดเทียมกับสถาบันชั้นนำของประเทศ เมื่อแรกเริ่มวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา มีอาคารทิพยมณฑล เป็นอาคารเรียน 1 หลัง มีจำนวนนักศึกษา 350 คน ในเนื้อที่ 10 ไร่ ทำการสอนในหลักสูตรสถาบันเทคโนโลยีราชมงคล ระดับประกาศนียบัตรวิชาชีพ(ปวช.) 3 แผนก คือ แผนกช่างยนต์ แผนกช่างไฟฟ้า และแผนกพณิชยการ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* History Image */}
            <div className="flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510"
                alt="History"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            {/* History Details */}
            <div className="flex flex-col justify-center text-left space-y-4">
              <p className="text-base sm:text-lg">
                วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่เริ่มต้นด้วยการเปิดหลักสูตรระดับประกาศนียบัตรวิชาชีพ (ปวช.) และขยายเป็นระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
              </p>
              <p className="text-base sm:text-lg">
                เราได้พัฒนาหลักสูตรอย่างต่อเนื่อง เพื่อรองรับความต้องการของตลาดแรงงานและอุตสาหกรรมในยุคดิจิทัล
              </p>
              <p className="text-base sm:text-lg">
                ด้วยการสนับสนุนจากทั้งภาครัฐและเอกชน วิทยาลัยยังเป็นศูนย์กลางในการส่งเสริมการเรียนรู้และนวัตกรรมในภูมิภาค
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">พันธกิจและวิสัยทัศน์</h2>
          <p className="mt-4 text-base sm:text-lg">
            เรามุ่งเน้นการจัดการศึกษาที่ครอบคลุมและตอบสนองต่อความต้องการของนักเรียนและอุตสาหกรรม
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">พันธกิจ</h3>
              <p className="text-base sm:text-lg">
                - พัฒนาความรู้และทักษะที่สอดคล้องกับความต้องการของอุตสาหกรรม<br />
                - ส่งเสริมคุณธรรมและจริยธรรมในการดำเนินชีวิต<br />
                - สร้างความร่วมมือกับองค์กรในประเทศและต่างประเทศ
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">วิสัยทัศน์</h3>
              <p className="text-base sm:text-lg">
                เป็นสถาบันการศึกษาที่มีคุณภาพและเป็นผู้นำด้านการพัฒนานักศึกษาให้เป็นแรงงานที่มีทักษะและคุณธรรมในยุคดิจิทัล
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
