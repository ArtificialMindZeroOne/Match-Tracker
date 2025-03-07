import alertTriangle from "../assets/alert-triangle.svg";

import { btns } from "../constants/constants";

const ErrorOnLoad = () => {
  return (
    <div className="text-white flex gap-[10px] alignt-center items-center bg-[#0F1318] px-[24px] py-[14px] rounded-[4px] animate-visibility">
      <img
        src={alertTriangle}
        alt={"Логотипа красного треугольника с восклицательным знаком"}
      ></img>
      {btns.errorBtn}
    </div>
  );
};

export default ErrorOnLoad;
