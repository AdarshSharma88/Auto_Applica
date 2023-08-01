import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Application = () => {
  return (
    <div className="w-auto flex flex-col">
      <div className="applicationtypes ">
        <h1 className="text-center text-3xl uppercase font-medium tracking-wider font-sans my-5">
          Types of Application
        </h1>
      </div>
      <div className="applicationCards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <AppliCard type={"Sick Leave Application"} />
        <AppliCard type={"Permission Seeking Application"} />
        <AppliCard type={"Migration Certificate Application"} />
        <AppliCard type={"Out-Pass Application"} />
      </div>
    </div>
  );
};

const AppliCard = (props) => (
  <div className="applicard  bg-cyan-100 rounded-2xl flex md:flex-row lg:flex-row sm:flex-col font-sans transition ease-in-out delay-150">
    <div className="applicationimage">
      <img
        className="w-40 p-2 mr-auto ml-auto rounded-2xl aspect-square object-cover"
        src="https://i0.wp.com/orbitcareers.com/wp-content/uploads/2021/04/Leave-application-format.png?resize=768%2C1086&ssl=1"
        alt=""
      />
    </div>
    <div className="applicationdetail w-full border-solid border-black">
      <div className="applicationName text-center">
        <h1 className="text-2xl font-semibold p-4 text-black">{props.type}</h1>
      </div>
      <div className="applicationEdit  border-solid border-x-black flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center">
        <Link
          to={"/pdf"}
          className=" text-center m-2 ml-auto mr-auto sm:ml-0 sm:mr-3 transition ease-in-out delay-50 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-lg p-1 w-20"
        >
          Edit
        </Link>
      </div>
    </div>
  </div>
);
AppliCard.defaultProps = { type: "Leave Application" };

export default Application;
