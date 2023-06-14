import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.ScrollView`
  height: 100%;
  padding: 6% 4% 0 4%;
  background-color: ${colors.white};
`;

export const TitleGraphic = styled.Text`
  font-size: 18px;;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
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
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoDetails = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
