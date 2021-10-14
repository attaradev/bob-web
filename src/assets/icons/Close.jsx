const CloseIcon = ({ size, color, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 32 32'
    {...rest}
  >
    <path
      d='M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z'
      fill={color}
    />
  </svg>
);

export default CloseIcon;
