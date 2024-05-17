import { CoursesGrid } from '@/components/courses/courses-grid'
import { state } from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'

export default function YourCourses() {

    const {courses} = useSnapshot(state)

  return (
    <div className='w-full mt-ElementSpace '>
        <CoursesGrid courses={courses}/>
    </div>
  )
}
