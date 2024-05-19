import { state } from "@/store";

import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const fetchEnrolledCourses = async (authUser) => {
  let data = [];
  state.loading = true;

  try {
    const q = query(
      collection(db, "courses"),
      where("userId", "==", authUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    state.enrolledCourses = data;
    state.loading = false;
  } catch (error) {
    console.log(error);
  } finally {
    state.enrolledCourses = data;
    state.loading = false;
  }
};

export default fetchEnrolledCourses;
