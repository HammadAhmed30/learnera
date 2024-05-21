"use client";

import { MediumHeading } from "@/components/heading/heading-medium";
import React, { useState } from "react";

export default function PopUpForCourseEnrollment({ EnrollInCourse }) {
  const [displayYes, setDisplay] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-[10001]  ${displayYes ? "flex" : "hidden"}`}
    >
      <div className="w-full h-full fixed top-0 left-0 bg-background opacity-[.9]"></div>
      <div className="h-[200px] relative w-full max-w-[400px] flex justify-center items-center flex-col bg-background border-[1px] border-foreground">
        <MediumHeading className={"text-center"}>
          Are you sure you want to enroll in this course
        </MediumHeading>

        <button
          className={`flex mt-ElementSpace items-center w-[90%] md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground `}
          onClick={() => {
            EnrollInCourse();
            setDisplay(false)
          }}
        >
          Click to Enroll
        </button>
      </div>
    </div>
  );
}
