"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { fetchCourse } from "@/actions/fetching-course";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";
import EnrollInCourse from "@/actions/enrolling-courses";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import PopUpForCourseEnrollment from "./_components/popup-course-enrollment";

const ChapterPage = ({ params }) => {

  const { course_Id, chapter_Id } = params;
  const { course, enrolledCourses } = useSnapshot(state);

  const [popUp, setPopUp] = useState(false);

  const isThisCourseEnrolled = enrolledCourses.filter(
    (item) => item._id == course[0]._id
  );

  const router = useRouter();
  const pathname = usePathname();

  const { authUser } = useAuth();
  const chapter = course[0]?.chapter.filter(
    (item) => item.slug.current === chapter_Id
  );

  const getEnrollInCourse = () => {
    EnrollInCourse(course[0], authUser, enrolledCourses);
    fetchEnrolledCourses(authUser);
    setPopUp(false);
  };

  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
    fetchEnrolledCourses(authUser);
    console.log(enrolledCourses);
    if (course[0]?.slug.current !== course_Id) {
      fetchCourse(course_Id);
    }
    if (isThisCourseEnrolled.length == 0) {
      setPopUp(true);
      fetchEnrolledCourses(authUser);
    }
    fetchEnrolledCourses(authUser);
    
  }, []);

  return (
    <div className="relative">
      {popUp && <PopUpForCourseEnrollment EnrollInCourse={getEnrollInCourse} />}

      {course.length > 0 && <ChapterHeadline chapter_headline={chapter[0]} />}

      <main className="relative flex">
        {course.length > 0 && (
          <ChaptersSideBar course={course[0]} chapter_Id={chapter_Id} />
        )}

        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
          {course.length > 0 && <ChapterContent chapter={chapter[0]} />}
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
