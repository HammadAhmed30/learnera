import { state } from "@/store";
import { IoClose } from "react-icons/io5";
import { useSnapshot } from "valtio";

export default function SideMenu({children}) {
  const { sideMenu } = useSnapshot(state);

  return (
    <div
      className={`fixed top-0 ${sideMenu ? "left-0" : "left-[-105vw]"} bg-background w-[100%] h-[100vh] transition-all z-[100000] `}
    >
      <IoClose
        size={26}
        className="text-foreground absolute top-[25px] right-[25px] cursor-pointer "
        onClick={() => {
          state.sideMenu = false;
        }}
      />
      {children}
    </div>
  );
}
