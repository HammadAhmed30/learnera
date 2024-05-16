const { client } = require("@/sanity/lib/client");
const { state } = require("@/store");

export const fetchPopularCourses = async () => {
    state.loading = true;
    try {
      const popularCourses = await client.fetch(`*[_type == "course" && isPopular == true ]
        {
            name,
            _id,
            slug,
            image,
            chapter,
        }
        `);
        state.popularCourses = popularCourses
    } catch (error) {
      console.log(error);
    } finally {
      state.loading = false;
    }
  };
