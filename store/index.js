import { proxy } from "valtio"

export const state = proxy({
    courses: [],
    loading:false,
    course:[],
    popularCourses:[],
})