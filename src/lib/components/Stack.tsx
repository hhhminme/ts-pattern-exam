import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface Props {
  className?: string;
}

const StyledStack = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Stack = ({ className, children }: PropsWithChildren<Props>) => {
  return <StyledStack className={className}>{children}</StyledStack>;
};

export default Stack;
