"use client";

import Wrapper from "@/components/Wrapper";
import ProfileAvatar from "./_components/profile-avatar";

const { useAuth } = require("@/firebase/auth");
const { useRouter, usePathname } = require("next/navigation");
const { useEffect } = require("react");
import { MdLogout } from "react-icons/md";
import { MediumHeading } from "@/components/heading/heading-medium";
import { MediumHeadingx2 } from "@/components/heading/2x-medium-heading";
import YourCourses from "./_components/your-courses";
import { Paragraph } from "@/components/reuseable-paragraph";

const ProfilePage = () => {
  const router = useRouter();

  const { authUser, signOutHandler } = useAuth();
  const pathname = usePathname();

  console.log(authUser);

  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
  }, [authUser]);

  return (
    <Wrapper>
      <div className={" flex justify-between items-center mt-2xElementSpace"}>
        <ProfileAvatar />
        <button
          className={`flex items-center w-full md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground`}
          onClick={signOutHandler}
        >
          Sign Out{" "}
          <MdLogout size={18} className="ml-NormalSpace text-foreground" />
        </button>
      </div>

      {/* Enrolled Courses */}

      <div className="mt-2xElementSpace">
        <MediumHeadingx2>Your Courses :</MediumHeadingx2>
        <Paragraph className={"mt-NormalSpace"}>You have enrolled in following courses</Paragraph>
        <YourCourses/>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;