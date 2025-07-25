import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const LoadingIcon = styled.ActivityIndicator`
  color: ${({ theme }) => theme.COLORS.GREEN[500]};
`
