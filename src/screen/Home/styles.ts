import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.View`
  align-items: center;
  height: 100%;
  padding: 22% 4% 0 4%;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.bold};
`;

export const TitleGraphic = styled.Text`
  font-size: 16px;;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
  margin-top: 30px;
  margin-bottom: 16px;
  width: 100%;
  text-align: left;
`;

export const TextLoading = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.grey};
  margin-top: 8px;
`;

export const ContainerGraphic = styled.View`
  width: 100%;
  min-height: 270px;
  align-items: center;
  justify-content: center;
`;
