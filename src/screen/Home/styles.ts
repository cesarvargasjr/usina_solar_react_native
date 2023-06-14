import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.bold};
`;
