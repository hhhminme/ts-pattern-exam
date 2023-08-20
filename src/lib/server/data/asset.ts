import { 국가타입 } from "../../types";

const getRandomCountry = () => {
  const countries: 국가타입[] = ["한국", "미국", "중국"];
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

export const getRandomFinanceData = () => {
  const country = getRandomCountry();
  const randomTypeIndex = Math.floor(Math.random() * 3);

  const commonFields = {
    종류: { 국가: country },
  };

  const price = Math.floor(Math.random() * 1000);
  switch (randomTypeIndex) {
    case 0:
      return {
        ...commonFields,
        종류: { ...commonFields.종류, 분류: "주식" },
        심볼: "가상의 주식이름",
        가격: price,
      };
    case 1:
      return {
        ...commonFields,
        종류: { ...commonFields.종류, 분류: "펀드" },
        이름: "가상의 펀드이름",
        자산: price / 1000, // 펀드는 1000좌 단위로 거래되기 때문에 1좌의 가격이 내려가도록 한다.
      };
    case 2:
      return {
        ...commonFields,
        종류: { ...commonFields.종류, 분류: "지수" },
        이름: "가상의 지수 이름",
        값: price,
      };
    default:
      throw new Error("Invalid randomTypeIndex");
  }
};
