export type TTeam = {
  name: string;
};

export interface IMatch {
  awayTeam: TTeam;
  homeTeam: TTeam;
  awayScore: number;
  homeScore: number;
  status: string;
}

export type TReloadBtnProps = {
  handleUpdate: (matches: any[]) => void;
  handleError: (hasError: boolean) => void;
};

export type MatchsListProps = {
  dataList: IMatch[];
};
