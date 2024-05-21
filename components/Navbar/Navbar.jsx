import NavbarForMobile from "./NavbarMobile";
import NavbarForDesktop from "./NavbarPC";

const Navbar = () => {
  return (
    <>
      <div className="md:flex hidden">
        <NavbarForDesktop />
      </div>
      <div className="md:hidden flex">
        <NavbarForMobile />
      </div>
    </>
  );
};

export default Navbar;
