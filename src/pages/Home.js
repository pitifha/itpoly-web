import React from "react";

const Home = () => {
  return (
    <div className="pt-20"> {/* Add padding-top to prevent overlap */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Welcome to Lanna Polytechnic College
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            วิทยาลัยไฮโชย่านป่าตัน วิทยาลัยดีเด่นตลอดกาล
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100 bg-opacity-90 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/470802195_1090579936196785_6969815105585068204_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoijZTmAzK-fyV6V_5cjh_rsTRfWVc8uiuxNF9ZVzy6KDcQRLy4aPndrp1jm8l1flE7AgDSZBKeWsBL0XDLrAv&_nc_ohc=TOot_RfEqwkQ7kNvgHpIe62&_nc_oc=AdiiMRaEngc9KEngtanYQze4rQCMeqN9a6iHb1KVbxevCL8a4gHNhCR3_rBuyCqALwM&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=ADqtl7MFnHDXZ94AqrWipQQ&oh=00_AYBms4gyJgLPDSry-jFRfBisTHXE6yeFDBL2QpUE3uhI_A&oe=677D13EC')",
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-blue-800">
            About Us
          </h2>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
          วิทยาลัยสารพัดช่างล้านนาเป็นสถาบันที่มีชื่อเสียงที่มีความมุ่งมั่น
            ส่งเสริมความคิดสร้างสรรค์และนวัตกรรมให้กับนักเรียน เรามุ่งมั่นที่จะจัดหา
            การศึกษารอบรู้ที่เตรียมผู้เรียนให้พร้อมสำหรับความสำเร็จ
            สาขาที่พวกเขาเลือกและช่วยให้พวกเขากลายเป็นพลเมืองโลก
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-blue-800">
            Our Activities
          </h2>
          <p className="mt-4 text-lg text-gray-700">
          สำรวจกิจกรรมที่น่าตื่นเต้นหลากหลายที่ส่งเสริมความคิดสร้างสรรค์
            การทำงานเป็นทีมและการเติบโตทางอาชีพ
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* Image Cards for Activities */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://konlanna.com/media/img/4k9ajACv5frpQGm7vUTnbEnSCYjU7ssq.jpg"
                alt="Activity 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">
                  Academic Excellence
                </h3>
                <p className="mt-2 text-gray-600">
                  Participate in workshops, seminars, and activities that
                  promote academic growth and development.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/469428045_893698729579549_2378760859031205994_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJF9Fe_lD_EV93E5yiZAobrypYbZFnR0-vKlhtkWdHT-tEntV0w2XqRoOknAD2T4fkZiwWijFLUzeTbGSfhpFn&_nc_ohc=kGIlfdBXYD4Q7kNvgEgXgLn&_nc_oc=AdhLnYnSACCLUeqvp9kvoheJie3SK7xeLtbKjF-THbE9g-3ZKdKlnkdViR3hETgBWGA&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AmMgRBe_HzS4gP1BA2wDg6I&oh=00_AYCai1CfusRQjFAJGjJ8UYHjCpXSs17wELrFIok4jidBrg&oe=677D2EF9"
                alt="Activity 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">
                  Creative Arts
                </h3>
                <p className="mt-2 text-gray-600">
                  Express your creativity through a variety of art-related
                  events and performances.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://www.siameagle.com/wp-content/uploads/2024/09/1038470_0.jpg"
                alt="Activity 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">
                  Community Service
                </h3>
                <p className="mt-2 text-gray-600">
                  Get involved in community-based projects that make a
                  difference in society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
