const AppMenuIcon = ({ size, color, ...rest }) => {
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
      <path
        d='M16 16h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4V4zm-6 0h4v4h-4V4zM4 4h4v4H4V4z'
        fill={color}
        fill-rule='evenodd'
      />
    </svg>
  );
};

export default AppMenuIcon;
