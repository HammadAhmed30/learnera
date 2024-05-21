import { CoursesGrid } from "@/components/courses/courses-grid";
import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";

const PopularCourses = ({ courses }) => {
  return (
    <section className="w-full">
      <MediumHeading>Popular Courses</MediumHeading>
      <Paragraph className={"w-full max-w-[400px] mt-NormalSpace"}>
      Here are some popular and hot courses circulating around the internet, worth hundreds of dollars.
      </Paragraph>
      <CoursesGrid courses={courses} />
    </section>
  );
};

export default PopularCourses;
