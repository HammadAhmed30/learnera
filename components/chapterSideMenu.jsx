import { state } from "@/store";
import { IoClose } from "react-icons/io5";
import { useSnapshot } from "valtio";

export default function SideChapterMenu({children}) {
  const { sideChapterMenu } = useSnapshot(state);

  return (
    <div
      className={`fixed top-0 ${sideChapterMenu ? "left-0" : "left-[-105vw]"} bg-background w-[100%] min-h-[100vh] transition-all z-[100000] `}
    >
      <div className="w-full absolute py-[31px] bg-black z-[1000] ">

      <IoClose
        size={26}
        className="text-foreground absolute top-[18px] right-[18px] cursor-pointer "
        onClick={() => {
          state.sideChapterMenu = false;
        }}
      />
      </div>
      <div className="max-h-[100vh] overflow-scroll relative">
      {children}

      </div>
    </div>
  );
}
