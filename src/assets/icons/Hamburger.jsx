const HamburgerMenuIcon = ({ size, color, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      width={size}
      height={size}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'
      {...rest}
    >
      <g fill='none'>
        <path d='M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z' fill={color} />
      </g>
    </svg>
  );
};

export default HamburgerMenuIcon;
