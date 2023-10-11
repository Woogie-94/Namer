import { SVGAttributes } from "react";

const StarIcon = ({
  width = "16",
  height = "16",
  fill = "#10A37F",
  stroke = "#10A37F",
}: SVGAttributes<SVGAElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0471 14.9558C11.514 15.3356 8.0931 12.9284 7.43792 12.9231C6.78274 12.9178 3.32334 15.2697 2.79641 14.8814C2.26949 14.4931 3.50826 10.505 3.31085 9.88208C3.11343 9.25914 -0.198737 6.70512 0.00873979 6.08541C0.216262 5.46571 4.40276 5.40815 4.9359 5.0284C5.46905 4.6487 6.88145 0.718393 7.53668 0.723638C8.19181 0.728929 9.54041 4.68145 10.0673 5.06972C10.5943 5.45796 14.7793 5.58293 14.9768 6.20587C15.1742 6.82881 11.8212 9.3292 11.6137 9.9489C11.4062 10.5686 12.5803 14.5761 12.0471 14.9558Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};

export default StarIcon;