"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { fetchCourse } from "@/actions/fetching-course";
import { MdMenuOpen } from "react-icons/md";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";
import PopUpForCourseEnrollment from "./_components/pop-up-course-enrollment";
import EnrollInCourse from "@/actions/enrolling-courses";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import ChapterSideBarContent from "./_components/side-bar-content-chapter";
import SideChapterMenu from "@/components/chapterSideMenu";


const ChapterPage = ({ params }) => {
  const { authUser } = useAuth();
  const { course_Id, chapter_Id } = params;
  const { course, enrolledCourses } = useSnapshot(state);

  const [popUp, setPopUp] = useState(true);

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
    document.title = "Learera Uni | Courses"
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
    fetchEnrolledCourses(authUser);

    if (course?.length == 0) {
      fetchCourse(course_Id);
    }
  }, []);
  const isEnrolled = enrolledCourses?.some(
    (item) => item._id === course[0]?._id
  );

  const p_enrolledCourse = enrolledCourses?.filter(
    (item) => item._id === course[0]?._id
  );

  const enrolledCoursesChapters = p_enrolledCourse[0]?.chapter?.filter(
    (item) => item.slug.current === chapter_Id
  );

  return (
    <div className="relative">
      {course?.length > 0 && p_enrolledCourse?.length > 0 && (
        <SideChapterMenu>
          <ChapterSideBarContent
            course={course[0]}
            chapter_Id={chapter_Id}
            p_enrolledCourse={p_enrolledCourse[0]}
          />
        </SideChapterMenu>
      )}
      {!isEnrolled && (
        <PopUpForCourseEnrollment EnrollInCourse={getEnrollInCourse} />
      )}
      {course?.length > 0 && <ChapterHeadline chapter_headline={chapter[0]} />}
      <div
        className=" relative border border-t-0 border-l-0 w-[60px] left-0 md:hidden top-[60px] h-[60px] flex justify-center items-center z-[1000]"
        onClick={() => {
          state.sideChapterMenu = true;
        }}
      >
        <MdMenuOpen className="text-foreground cursor-pointer" size={26} />
      </div>

      <main className="relative flex">
        {course?.length > 0 && p_enrolledCourse?.length > 0 && (
          <ChaptersSideBar
            course={course[0]}
            chapter_Id={chapter_Id}
            p_enrolledCourse={p_enrolledCourse[0]}
          />
        )}
        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
          {course?.length > 0 && enrolledCoursesChapters?.length > 0 && (
            <ChapterContent
              chapter={chapter[0]}
              enrolledCoursesChapters={enrolledCoursesChapters[0]}
              p_enrolledCourse={p_enrolledCourse}
              chapter_Id={chapter_Id}
              authUser={authUser}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
