const { client } = require("@/sanity/lib/client");
const { state } = require("@/store");

export const fetchCourse = async (course_Id) => {
  state.loading = true;
  try {
    const course =
      await client.fetch(`* [_type == "course" && slug.current == "${course_Id}" ]
      {
        name,
        image,
        _id,
        slug,
        chapter[]-> {
          name,
          description,
          slug,
          url
        }     
       }
      `);
    state.course = course;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};

