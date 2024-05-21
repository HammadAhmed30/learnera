"use client";

import Wrapper from "@/components/Wrapper";
import ProfileAvatar from "./_components/profile-avatar";
import YourCourses from "./_components/your-courses";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";

import { MdLogout } from "react-icons/md";
import { MediumHeadingx2 } from "@/components/heading/2x-medium-heading";
import { Paragraph } from "@/components/reuseable-paragraph";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Head from "next/head";

const { useAuth } = require("@/firebase/auth");
const { useRouter, usePathname } = require("next/navigation");
const { useEffect } = require("react");

const ProfilePage = () => {
  const router = useRouter();

  const { authUser, signOutHandler } = useAuth();
  const { enrolledCourses } = useSnapshot(state);

  const pathname = usePathname();

  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
  }, [authUser]);

  console.log(authUser);
  useEffect(() => {
    document.title = "Your Profile"
    fetchEnrolledCourses(authUser);
    console.log("hello worlds profile page");
  }, []);

  return (
    <Wrapper>
      <div
        className={
          " flex md:flex-row flex-col justify-between items-center mt-2xElementSpace"
        }
      >
        {authUser && <ProfileAvatar authUser={authUser} />}
        <button
          className={`flex md:mt-0 mt-ElementSpace items-center w-full md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground`}
          onClick={signOutHandler}
        >
          Sign Out{" "}
          <MdLogout size={18} className="ml-NormalSpace text-foreground" />
        </button>
      </div>

      {/* Enrolled Courses */}

      <div className="mt-2xElementSpace">
        <MediumHeadingx2>Your Courses :</MediumHeadingx2>
        <Paragraph className={"mt-NormalSpace w-full max-w-[400px] "}>
        You have enrolled in the following courses. Finish them and start your career ASAP.
        </Paragraph>
        {enrolledCourses.length > 0 ? (
          <YourCourses courses={enrolledCourses} />
        ) : (
          <MediumHeadingx2
            className={
              "mt-SectionSpace text-center italic text-paragraphColor "
            }
          >
            No Course Enrolled
          </MediumHeadingx2>
        )}
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
