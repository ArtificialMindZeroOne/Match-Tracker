import { useState } from "react";

import getMatchsList from "../api/api";

import refreshIcon from "../assets/refreshIcon.svg";

import { TReloadBtnProps } from "../types/types";

import { btns } from "../constants/constants";

const ReloadBtn = ({ handleUpdate, handleError }: TReloadBtnProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateDataList = async () => {
    try {
      handleError(false);
      setIsLoading(true);
      const res = await getMatchsList();
      setTimeout(() => {
        handleUpdate(res?.data?.matches || []);
        handleError(false);
      }, 1000);
    } catch (err) {
      handleUpdate([]);
      console.error("Ошибка:", err);
      setTimeout(() => {
        handleError(true);
      }, 1000);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <button
      className={`w-[204px] h-[56px] bg-[#EB0237] rounded-[4px] flex items-center justify-center gap-[10px]
       transition-easy-in-out duration-300 
      ${
        isLoading
          ? "opacity-[.6] hover:opacity-[.6] active:opacity-[.6]"
          : "hover:bg-[#A01131] active:opacity-[.8]"
      }`}
      onClick={updateDataList}
      disabled={isLoading}
    >
      <span className="h-fit text-white">{btns.reloadBtn}</span>
      <img
        src={refreshIcon}
        alt="Иконка закругленных стрелок"
        className={`${isLoading && "animate-spin-slow"}`}
      />
    </button>
  );
};

export default ReloadBtn;
