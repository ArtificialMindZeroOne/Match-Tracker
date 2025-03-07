import { useEffect, useState } from "react";

import getMatchList from "../api/api";

import logo from "../assets/mainLogo.svg";

import ReloadBtn from "../components/ReloadBtn";
import MatchsList from "../components/MatchsList";
import ErrorOnLoad from "../components/ErrorOnLoad";

import { btns } from "../constants/constants";

import { IMatch } from "../types/types";

const Main = () => {
  const [dataList, setDataList] = useState<IMatch[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  // Запрашиваем список матчей один раз при монтировании компонента
  useEffect(() => {
    const getMatchsList = async () => {
      try {
        const res = await getMatchList();
        setDataList(res?.data?.matches || []);
      } catch (err) {
        console.error("Ошибка:", err);
        setIsError(true);
      }
    };

    getMatchsList();
  }, []);

  return (
    <section className="bg-[#090909] h-[100%] min-h-[100vh]">
      <header className="pt-[42px] px-[42px] pb-[20px] flex align-center justify-between">
        <img src={logo} alt="Логотип компании"></img>
        <div className="flex gap-[12px] alignt-center items-center">
          {isError && <ErrorOnLoad />}
          <ReloadBtn handleUpdate={setDataList} handleError={setIsError} />
        </div>
      </header>
      <div className="px-[42px]">
        {dataList.length > 0 ? (
          <ul className="flex flex-col gap-[12px]">
            <MatchsList dataList={dataList} />
          </ul>
        ) : isError ? (
          <h2 className="text-white text-center text-[30px] mt-10 animate-visibility">
            {btns.emptyList}
          </h2>
        ) : null}
      </div>
    </section>
  );
};

export default Main;
