import { db } from "@/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const onChapterComplete = async (updatedChp, docId) => {
  try {
    await updateDoc(doc(db, "courses", docId), {
      chapter: updatedChp,
    });
  } catch (error) {
    console.log(error);
  }
};

export default onChapterComplete;
