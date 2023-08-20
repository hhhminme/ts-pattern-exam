import { rest } from "msw";
import { getRandomFinanceData } from "./data/asset";

export function handlers() {
  return [rest.get("/api/asset", getAsset)];
}

// 금융 데이터 목 API 핸들러 함수
const getAsset: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  const financeData = getRandomFinanceData(); // 랜덤 금융 데이터 생성
  return res(ctx.status(200), ctx.json(financeData));
};

export default getAsset;
