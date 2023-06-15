import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.blackLight};
  margin-left: 5px;
`;

export const Subtitle = styled.View<{ color: string }>`
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: ${({ color }) => color === "green" ? colors.green : colors.greenLight};
`;

export const ContainerSubtitle = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const Container = styled.View`
  width: 100%;
  margin-top: -35px;
`;

export const CardGraphic = styled.View`
  align-items: center;
  justify-content: center;
`;