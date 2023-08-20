import { 금융타입 } from "../lib/types";
import { 화폐_단위_포함_가격 } from "../lib/utils/화폐_단위_포함_가격";
import { useGetAsset } from "./hooks/useGetAsset";
import { P, match } from "ts-pattern";
import AssetInfo from "../AssetInfo";
import { 주식타입확인, 지수타입확인, 펀드타입확인 } from "./utils/typeGuard";

export function ExamplePage() {
  const { data, isLoading, error } = useGetAsset();

  if (isLoading) return <div>로딩중..</div>;

  if (error) return <div>에러..</div>;

  const 타입_에러_발생 = (data: 금융타입) => {
    switch (data.종류.분류) {
      case "주식":
        return <AssetInfo name={data.심볼} price={data.가격} />;
      case "펀드":
        return <AssetInfo name={data.이름} price={data.값} />;
      case "지수":
        return <AssetInfo name={data.이름} price={data.자산} />;
    }
  };

  const 타입_가드_사용 = (data: 금융타입) => {
    if (주식타입확인(data))
      return <AssetInfo name={data.심볼} price={data.가격} />;
    if (펀드타입확인(data))
      return <AssetInfo name={data.이름} price={data.자산} />;
    if (지수타입확인(data))
      return <AssetInfo name={data.이름} price={data.값} />;
  };

  const 패턴매칭 = (data: 금융타입) =>
    match(data)
      .with({ 종류: { 분류: "주식" } }, ({ 심볼, 가격 }) => (
        <AssetInfo name={심볼} price={가격} />
      ))
      .with({ 종류: { 분류: "지수" } }, ({ 이름, 값 }) => (
        <AssetInfo name={이름} price={값} />
      ))
      .with({ 종류: { 분류: "펀드" } }, ({ 이름, 자산 }) => (
        <AssetInfo name={이름} price={자산} />
      ))
      .exhaustive();

  const 패턴매칭_요구명세_추가 = (data: 금융타입) =>
    match(data)
      .with({ 종류: { 분류: "주식" } }, ({ 종류: { 국가 }, 심볼, 가격 }) => (
        <AssetInfo name={심볼} price={화폐_단위_포함_가격(가격, 국가)} />
      ))
      .with({ 종류: { 분류: "지수" } }, ({ 종류: { 국가 }, 이름, 값 }) => (
        <AssetInfo name={이름} price={화폐_단위_포함_가격(값, 국가)} />
      ))
      .with({ 종류: { 분류: "펀드" } }, ({ 종류: { 국가 }, 이름, 자산 }) => (
        <AssetInfo name={이름} price={화폐_단위_포함_가격(자산 * 1000, 국가)} />
      ))
      .exhaustive();

  return (
    <>
      <div>{타입_에러_발생(data)}</div>
      <div>{타입_가드_사용(data)}</div>
      <div>{패턴매칭(data)}</div>
      <div>{패턴매칭_요구명세_추가(data)}</div>
    </>
  );
}
