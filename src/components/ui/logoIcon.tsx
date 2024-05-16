type logoIconProps = {
  color?: string;
};

const LogoIcon: React.FC<logoIconProps> = ({ color }) => {
  return (
    <>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56ZM19.2756 14.8182V41H24.8111V30.1847H35.4602V25.6207H24.8111V19.3821H36.6108V14.8182H19.2756Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default LogoIcon;
