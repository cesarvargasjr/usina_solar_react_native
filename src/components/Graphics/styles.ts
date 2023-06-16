import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const TextPosition = styled.Text`
  font-size: 14px;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.blackLight};
  margin-left: 4px;
`;

export const ContainerSubtitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 80%;
  margin-bottom: 5px;
  width: 100%;
`;