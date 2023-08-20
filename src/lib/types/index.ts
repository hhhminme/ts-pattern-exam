export type 국가타입 = "한국" | "미국" | "중국";

export interface 주식타입 {
  종류: { 분류: "주식"; 국가: 국가타입 };
  심볼: string;
  가격: number;
}
export interface 펀드타입 {
  종류: { 분류: "펀드"; 국가: 국가타입 };
  이름: string;
  자산: number;
}
export interface 지수타입 {
  종류: { 분류: "지수"; 국가: 국가타입 };
  이름: string;
  값: number;
}
export interface 부동산타입 {
  종류: { 분류: "부동산"; 국가: "한국" };
  이름: string;
  가격: number;
}

export type 금융타입 = 주식타입 | 펀드타입 | 지수타입;
