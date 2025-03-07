import { statusList } from "../constants/constants";

import illustrationsRoleLogo from "../assets/illustrations_role.svg";

import { MatchsListProps } from "../types/types";

const MatchsList = ({ dataList }: MatchsListProps) => {
  return (
    <ul>
      {dataList.map((el, idx) => {
        const statusTableColor: string | undefined = statusList[el.status];

        return (
          <li
            key={idx}
            className="bg-[#0B0E12] px-[36px] py-[13px] text-white rounded-[4px] flex justify-between w-full animate-visibility"
          >
            <div className="flex items-center gap-[14px]">
              <img src={illustrationsRoleLogo} alt="Логотип команды" />
              <span>{el.awayTeam.name}</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-[4px]">
              <span className="text-[20px]">
                {el.awayScore} : {el.homeScore}
              </span>
              <div
                className={`w-[92px] h-[27px] text-[12px] flex flex-col justify-center items-center rounded-[4px]
                  ${statusTableColor ? statusTableColor : "bg-[gray]"}`}
              >
                {el.status}
              </div>
            </div>

            <div className="flex items-center gap-[14px]">
              <span>{el.homeTeam.name}</span>
              <img src={illustrationsRoleLogo} alt="Логотип команды" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MatchsList;
