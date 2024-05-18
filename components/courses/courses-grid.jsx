import { CoursesCard } from "./courses-card";

export const CoursesGrid = ({ className, courses, searchCourse }) => {


  console.log(courses)
  const searchString = searchCourse || ""

  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-ElementSpace " +
          className || ""
      }
    >
      {courses.map((course, index) => {
        return  course?.name?.toLowerCase().includes(searchString.toLowerCase()) && <CoursesCard key={index} course={course} />;
      })}
    </div>
  );
};
