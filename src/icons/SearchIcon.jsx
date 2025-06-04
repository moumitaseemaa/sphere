const SearchIcon = ({ width = 30, height = 30, color = "#01081A" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2857 24.2858C19.8086 24.2858 24.2857 19.8086 24.2857 14.2858C24.2857 8.76292 19.8086 4.28577 14.2857 4.28577C8.76286 4.28577 4.28571 8.76292 4.28571 14.2858C4.28571 19.8086 8.76286 24.2858 14.2857 24.2858Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.7858 26.7855L21.3483 21.348"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
