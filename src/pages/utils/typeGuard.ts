import { 금융타입, 주식타입, 지수타입, 펀드타입 } from "../../lib/types";

export function 주식타입확인(data: 금융타입): data is 주식타입 {
  return data.종류.분류 === "주식";
}

export function 펀드타입확인(data: 금융타입): data is 펀드타입 {
  return data.종류.분류 === "펀드";
}

export function 지수타입확인(data: 금융타입): data is 지수타입 {
  return data.종류.분류 === "지수";
}
