import React from "react";


const Home = () => {
  return (
    <>
      <div className="w-full  h-[729px] flex justify-end gap-6 items-center">
        <div className="w-[1200px] mr-20 flex justify-end h-[600px] bg-gradient-to-b from-[#f65050] rounded-3xl to-[#fea034]">
          <div className=" w-[500px] flex flex-col items-center mt-4 h-full">
            <div className=" w-[300px] ">
              <img className=" rounded-full " src="photos/ami.JPG" alt="profile" />
            </div>
            <div className=" mt-4 text-[40px] font-semibold text-white "><h2>Abdul Kader</h2></div>

          </div>
          <div className="w-[800px] h-[600px] bg-white rounded-3xl">
            <h2 className="text-[100px]">Exam class 36</h2>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
