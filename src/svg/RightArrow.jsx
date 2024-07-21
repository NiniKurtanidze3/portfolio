const RightArrow = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      onClick={onClick}
      className="cursor-pointer"
    >
      <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
    </svg>
  );
};

export default RightArrow;
