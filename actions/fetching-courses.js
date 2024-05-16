const { client } = require("@/sanity/lib/client");
const { state } = require("@/store");

export const fetchCourses = async () => {
    state.loading = true;
    try {
      const courses = await client.fetch(`*[_type == "course"]
        {
            name,
            _id,
            slug,
            image,
            chapter,
        }
        `);
        state.courses = courses
    } catch (error) {
      console.log(error);
    } finally {
      state.loading = false;
    }
  };
