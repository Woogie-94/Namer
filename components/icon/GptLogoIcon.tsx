import { SVGAttributes } from "react";

const GptLogoIcon = ({ width = "24", height = "24", color = "#fff" }: SVGAttributes<SVGAElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_7_63)">
        <path
          d="M22.0265 9.87692C22.2889 9.08881 22.3799 8.25374 22.2935 7.42761C22.207 6.60147 21.9451 5.80333 21.5252 5.08661C20.9028 4.00254 19.9521 3.14424 18.8102 2.63557C17.6683 2.12689 16.3944 1.99413 15.1722 2.25646C14.6209 1.63518 13.9432 1.13882 13.1846 0.800616C12.4259 0.46241 11.6038 0.290155 10.7732 0.295381C9.52361 0.292365 8.30532 0.686262 7.294 1.42028C6.28268 2.1543 5.53059 3.19052 5.14615 4.37953C4.33209 4.54617 3.56302 4.88479 2.89043 5.37272C2.21783 5.86065 1.65723 6.48663 1.24615 7.20877C0.618763 8.28984 0.350956 9.54224 0.481356 10.7854C0.611755 12.0285 1.13362 13.198 1.97169 14.1254C1.70928 14.9135 1.61825 15.7486 1.70469 16.5747C1.79113 17.4008 2.05305 18.199 2.47292 18.9157C3.0954 19.9997 4.04615 20.858 5.188 21.3666C6.32986 21.8753 7.60379 22.0081 8.826 21.7458C9.37729 22.3671 10.0549 22.8635 10.8136 23.2017C11.5722 23.5399 12.3943 23.7121 13.2249 23.7069C14.4751 23.7102 15.6941 23.3161 16.7058 22.5816C17.7175 21.8471 18.4697 20.8102 18.8538 19.6205C19.6679 19.4538 20.437 19.1152 21.1096 18.6273C21.7822 18.1393 22.3428 17.5134 22.7538 16.7912C23.3805 15.7102 23.6476 14.4582 23.5169 13.2155C23.3862 11.9729 22.8643 10.8039 22.0265 9.87692ZM13.2268 22.1765C12.2005 22.1779 11.2064 21.8185 10.4183 21.1611C10.4538 21.1417 10.5162 21.1075 10.5568 21.0826L15.2183 18.39C15.3353 18.3234 15.4325 18.2269 15.4998 18.1103C15.5671 17.9938 15.6022 17.8614 15.6014 17.7268V11.1549L17.5717 12.2926C17.582 12.2978 17.5909 12.3054 17.5976 12.3148C17.6043 12.3242 17.6086 12.3352 17.61 12.3466V17.7891C17.6085 18.9515 17.1464 20.066 16.3248 20.8883C15.5032 21.7107 14.3892 22.1739 13.2268 22.1765ZM3.80031 18.1505C3.28624 17.2622 3.10097 16.2215 3.27692 15.2105C3.31154 15.2312 3.372 15.2682 3.41538 15.2931L8.07692 17.9857C8.19309 18.0536 8.32522 18.0894 8.45977 18.0894C8.59432 18.0894 8.72645 18.0536 8.84261 17.9857L14.5338 14.6995V16.9749C14.5345 16.9865 14.5323 16.9981 14.5274 17.0087C14.5224 17.0192 14.515 17.0284 14.5057 17.0354L9.79338 19.7562C8.78543 20.3367 7.58835 20.4936 6.46481 20.1926C5.34126 19.8916 4.38301 19.1571 3.80031 18.1505ZM2.574 7.974C3.08583 7.08459 3.89426 6.4036 4.85769 6.0503C4.85769 6.09046 4.85538 6.16154 4.85538 6.21092V11.5962C4.85457 11.7306 4.88958 11.8629 4.95683 11.9794C5.02407 12.0959 5.12112 12.1924 5.238 12.2589L10.9292 15.5446L8.95892 16.6823C8.9492 16.6887 8.93804 16.6926 8.92644 16.6937C8.91485 16.6947 8.90318 16.6929 8.89246 16.6883L4.17969 13.9652C3.1735 13.3825 2.43943 12.4246 2.13844 11.3015C1.83744 10.1784 1.99407 8.98179 2.574 7.974ZM18.762 11.7411L13.0708 8.45492L15.0411 7.31769C15.0508 7.31129 15.062 7.30739 15.0736 7.30634C15.0851 7.3053 15.0968 7.30713 15.1075 7.31169L19.8203 10.0325C20.5423 10.4495 21.1306 11.0636 21.5162 11.8029C21.9018 12.5422 22.0688 13.376 21.9977 14.2068C21.9265 15.0375 21.6202 15.8308 21.1145 16.4938C20.6088 17.1568 19.9247 17.6619 19.1423 17.9501C19.1423 17.9095 19.1423 17.8385 19.1423 17.7891V12.4038C19.1434 12.2696 19.1088 12.1374 19.0419 12.0209C18.9751 11.9045 18.8785 11.8079 18.762 11.7411ZM20.7231 8.78954C20.6885 8.7683 20.628 8.73184 20.5846 8.70692L15.9231 6.0143C15.8069 5.94651 15.6748 5.91078 15.5402 5.91078C15.4057 5.91078 15.2736 5.94651 15.1574 6.0143L9.46615 9.30046V7.02507C9.4655 7.01346 9.46773 7.00186 9.47264 6.99131C9.47755 6.98076 9.485 6.97159 9.49431 6.96461L14.2066 4.24615C14.9285 3.82988 15.7541 3.62779 16.5866 3.66353C17.4192 3.69927 18.2244 3.97136 18.908 4.44797C19.5916 4.92458 20.1253 5.58601 20.4468 6.35486C20.7682 7.12371 20.864 7.9682 20.7231 8.78954ZM8.39492 12.8451L6.42415 11.7074C6.41382 11.7022 6.40491 11.6946 6.39823 11.6852C6.39155 11.6758 6.38729 11.6648 6.38584 11.6534V6.21092C6.38639 5.37734 6.62436 4.56117 7.07191 3.85793C7.51945 3.15469 8.15806 2.59348 8.91297 2.23999C9.66789 1.8865 10.5079 1.75536 11.3346 1.86192C12.1613 1.96848 12.9406 2.30833 13.5812 2.84169C13.5457 2.86107 13.4838 2.89523 13.4428 2.92015L8.78123 5.61277C8.66426 5.67926 8.56712 5.7757 8.49979 5.89219C8.43247 6.00868 8.39738 6.14099 8.39815 6.27554L8.39492 12.8451ZM9.46523 10.5374L12 9.07338L14.5348 10.5365V13.4635L12 14.9266L9.46523 13.4635V10.5374Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_7_63">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GptLogoIcon;
