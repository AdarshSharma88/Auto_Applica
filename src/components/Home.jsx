import React from "react";
import img1 from "../assets/home_image_one.jpg";
import img2 from "../assets/home_image_two.jpg";
import img3 from "../assets/home_image_three.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let naviagate = useNavigate();

  return (
    <div className="homemain font-sans">
      <section className="home_one">
        <div className="services">
          <h1 className=" text-center text-4xl mt-10">What Can We Do ?</h1>
          <div className="flex flex-col lg:flex-row my-10 mx-20 justify-between gap-10 sm:bg-cyan-300 sm:p-20 sm:rounded-full ">
            <div className="first_service flex flex-col justify-center w-full">
              <div className="imgservice ">
                <img
                  onClick={() => naviagate("/applicationtypes")}
                  src={img1}
                  alt=""
                  className=" w-60 object-cover aspect-square hover:brightness-50 hover:cursor-pointer rounded-xl ml-auto mr-auto"
                />
              </div>
              <div className="serviceDetail ml-auto mr-auto">
                <h1 className=" font-semibold">
                  School Application Generator:{" "}
                </h1>
                <p className=" break-words text-clip font-thin w-60 p-4">
                  Generate any kind of application(s) for your school and
                  college puproses, and save your precious time.
                </p>
              </div>
            </div>
            <div className="secondService flex flex-col justify-center w-full">
              <div className="imgservice">
                <img
                  src={img2}
                  alt=""
                  className=" w-60 object-cover aspect-square hover:brightness-50 hover:cursor-pointer rounded-xl ml-auto mr-auto"
                />
              </div>
              <div className="serviceDetail ml-auto mr-auto">
                <h1 className=" font-semibold">
                  Scholarship Application Maker:{" "}
                </h1>
                <p className=" break-words text-clip font-thin w-60 p-4">
                  Just enter your credentials and Generate appliation(s) to
                  request for a Scholarship, and save your Precious time
                </p>
              </div>
            </div>

            <div className="thirdService flex flex-col justify-center w-full">
              <div className="imgservice">
                <img
                  src={img3}
                  alt=""
                  className=" w-60 object-cover aspect-square hover:brightness-50 hover:cursor-pointer rounded-xl  ml-auto mr-auto"
                />
              </div>
              <div className="serviceDetail ml-auto mr-auto">
                <h1 className=" font-semibold ">
                  Recommendation letter creater:
                </h1>
                <p className=" break-words text-clip font-thin w-60 p-4">
                  This letter is typically sent to an admissions officer or
                  hiring manager considering a candidate for admission.
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
