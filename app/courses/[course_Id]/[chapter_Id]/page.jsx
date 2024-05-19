"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";
import PopUpForCourseEnrollment from "./_components/pop-up-course-enrollment";
import EnrollInCourse from "@/actions/enrolling-courses";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import { fetchCourse } from "@/actions/fetching-course";
import { SmallHeading } from "@/components/heading/heading-small";

const ChapterPage = ({ params }) => {
  const { authUser } = useAuth();
  const { course_Id, chapter_Id } = params;
  const { course, enrolledCourses } = useSnapshot(state);

  const [popUp, setPopUp] = useState(true);
  const [enrolledCoursess, setEnrolledCourses] = useState([]);

  const router = useRouter();
  const pathname = usePathname();

  const chapter = course[0]?.chapter.filter(
    (item) => item.slug.current === chapter_Id
  );

  const getEnrollInCourse = () => {
    EnrollInCourse(course[0], authUser, enrolledCourses);
    setPopUp(false);
  };

  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
    fetchEnrolledCourses(authUser);

    if (course?.length == 0) {
      fetchCourse(course_Id);
    }

    let storedCoursesString = localStorage.getItem("enrolledCourses");
    let storedCourses = JSON.parse(storedCoursesString);
    setEnrolledCourses(storedCourses);
  }, []);
  const isEnrolled = enrolledCourses?.some(
    (item) => item._id === course[0]?._id
  );

  return (
    <div className="relative">
      {!isEnrolled && (
        <PopUpForCourseEnrollment EnrollInCourse={getEnrollInCourse} />
      )}
      {course?.length > 0 && <ChapterHeadline chapter_headline={chapter[0]} />}

      <main className="relative flex">
        {course?.length > 0 && (
          <ChaptersSideBar course={course[0]} chapter_Id={chapter_Id} />
        )}
        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
          {course?.length > 0 && <ChapterContent chapter={chapter[0]} />}
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
