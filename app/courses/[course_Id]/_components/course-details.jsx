import { MediumHeading } from "@/components/heading/heading-medium";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function CourseDetails({ course }) {
  console.log(course);
  return (
    <div>
      <MediumHeading>{course?.name}</MediumHeading>
      <div className="w-full h-[400px]">

      {
        course && <img className="w-full h-full object-cover" src={urlForImage(course.image)} />
      }
      </div>
    </div>
  );
}
