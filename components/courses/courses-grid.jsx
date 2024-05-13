import { CoursesCard } from "./courses-card";

export const CoursesGrid = ({ courses, className }) => {

    // Add grid white border

  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-ElementSpace gap-[10px] " +
          className || ""
      }
    >
      {courses.map((course, index) => {
        return <CoursesCard key={index} course={course} />;
      })}
    </div>
  );
};
