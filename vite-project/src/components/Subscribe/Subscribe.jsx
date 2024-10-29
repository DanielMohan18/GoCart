import React from 'react'
import backIMG from "../../assets/orange-pattern.jpg"
const BannerImg = {
    backgroundImage: `url(${backIMG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 "
      style={BannerImg}
    >
      <div className="container  py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-black !text-center sm:text-left sm:text-4xl font-semibold dark:text-white">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 text-black dark:bg-gray-600 dark:text-white"
            // onClick={()=>{alert("Saved")}}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe