import Stack from "./lib/components/Stack";

interface Props {
  name: string;
  price: number | string;
}

const AssetInfo = ({ name, price }: Props) => {
  return (
    <Stack>
      <div>자산명 : {name}</div>
      <div>가격 : {price}</div>
    </Stack>
  );
};

export default AssetInfo;
