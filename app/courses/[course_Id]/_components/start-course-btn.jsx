import Link from 'next/link'
import React from 'react'

export default function StartCourseButton({course_slug, chapter_slug}) {
  return (
    <Link href={`/courses/${course_slug}/${chapter_slug}`}  className={`flex items-center w-full h-[60px] justify-center bg-secondaryColor mt-ElementSpace text-sm font-[500] px-[10px] text-foreground md:min-w-[300px]`} >Start the Course</Link>
  )
}
