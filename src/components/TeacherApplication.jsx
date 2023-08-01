import React from "react";
import { Link } from "react-router-dom";

const TeacherApplication = (props) => {
  return (
    <div className="w-auto h-40 bg-orange-100 rounded-xl flex flex-row lg:m-10 md:m-5 sm:m-0">
      <div className="view flex  content-center h-auto justify-center items-center">
        <Link
          to={"/viewpdf"}
          className=" text-center lg:m-5 md:m-2 sm:m-0.5 sm:ml-0 sm:mr-3 bg-orange-400 rounded-lg text-lg p-1 w-20"
        >
          View
        </Link>
      </div>
      <div className="action flex flex-col w-full items-end">
        <button className=" text-center m-5 sm:ml-0 sm:mr-3 bg-orange-400 rounded-lg text-lg p-1 w-20">
          Accept
        </button>
        <button className=" text-center m-5 sm:ml-0 sm:mr-3 bg-orange-400 rounded-lg text-lg p-1 w-20">
          Reject
        </button>
      </div>
    </div>
  );
};

export default TeacherApplication;
