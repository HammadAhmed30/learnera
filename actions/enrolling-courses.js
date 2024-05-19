import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";

import fetchEnrolledCourses from "./fetching-enrolled-courses";

const EnrollInCourse = async (course, authUser, enrolledCourses) => {
  console.log(enrolledCourses);
  try {
    const isCourseEnrolled = enrolledCourses?.filter(
      (item) => item._id == course._id && authUser.uid == item.userId
    );

    const chapterCompleted = { isCompleted: false };
    const newChapters = course.chapter.map((item) => {
      return { ...item, ...chapterCompleted };
    });


    if (isCourseEnrolled?.length == 0) {
      await addDoc(collection(db, "courses"), {
        userId: authUser.uid,
        _id: course._id,
        name: course.name,
        slug: course.slug,
        image: course.image,
        chapter: newChapters,
      });
      fetchEnrolledCourses(authUser);
    }
  } catch (error) {
    console.log(error);
  }
};

export default EnrollInCourse;
