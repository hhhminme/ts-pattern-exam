import { 국가타입 } from "../types";

export const 화폐_단위_포함_가격 = (value: number, 국가: 국가타입) => {
  switch (국가) {
    case "한국":
      return `${value} 원`;
    case "미국":
      return `${value} $`;
    case "중국":
      return `${value} ¥`;
    default:
      return `${value}`;
  }
};
