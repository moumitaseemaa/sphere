const HeartIcon = ({width=95, height=95,color="white"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="0" y="0" width="95" height="95">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(4px)",
            clipPath: "url(#bgblur_0_4029_3_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g filter="url(#filter0_d_4029_3)" data-figma-bg-blur-radius="8">
        <circle cx="47.5" cy="43.5" r="24.5" fill="black" />
        <circle
          cx="47.5"
          cy="43.5"
          r="24"
          stroke="url(#paint0_linear_4029_3)"
        />
      </g>
      <g clipPath="url(#clip1_4029_3)">
        <path
          d="M55.8016 35.6373C53.4309 33.644 49.7682 33.9434 47.5 36.2526C45.2318 33.9434 41.5691 33.6399 39.1984 35.6373C36.1141 38.2336 36.5652 42.4665 38.7637 44.71L45.9578 52.0395C46.368 52.4579 46.9176 52.6916 47.5 52.6916C48.0865 52.6916 48.632 52.462 49.0422 52.0436L56.2363 44.7141C58.4307 42.4706 58.89 38.2377 55.8016 35.6373ZM54.8336 43.3278L47.6395 50.6573C47.541 50.7557 47.459 50.7557 47.3606 50.6573L40.1664 43.3278C38.6693 41.802 38.3658 38.9145 40.4658 37.1467C42.0613 35.8055 44.5223 36.0065 46.0645 37.5774L47.5 39.0416L48.9356 37.5774C50.4859 35.9983 52.9469 35.8055 54.5342 37.1426C56.6301 38.9104 56.3184 41.8143 54.8336 43.3278Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4029_3"
          x="0"
          y="0"
          width="95"
          height="95"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_4029_3"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4029_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4029_3"
            result="shape"
          />
        </filter>
        <clipPath id="bgblur_0_4029_3_clip_path" transform="translate(0 0)">
          <circle cx="47.5" cy="43.5" r="24.5" />
        </clipPath>
        <linearGradient
          id="paint0_linear_4029_3"
          x1="28.075"
          y1="21.0632"
          x2="64.7554"
          y2="72.424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip1_4029_3">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(37 33)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartIcon;
