const Wrapper = ({ children, className }) => {
  return (
    <div
      className={
        "w-full px-[10px] md:px-[30px] mx-auto max-w-[1200px] " + className ||
        ""
      }
    >
      {children}
    </div>
  );
};

export default Wrapper;
