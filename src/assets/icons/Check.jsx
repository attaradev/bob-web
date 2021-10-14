const CheckCircle = ({ size, color, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 16 16'
    {...rest}
  >
    <g fill={color}>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417L5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
    </g>
  </svg>
);

export default CheckCircle;
