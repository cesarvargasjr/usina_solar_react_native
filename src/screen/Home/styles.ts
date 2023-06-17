import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.ScrollView`
  height: 100%;
  padding: 4% 4% 0 4%;
  background-color: ${colors.white};
`;

export const TitleGraphic = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};
  color: ${colors.blackLight};
  margin-right: 5px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Container = styled.View`
  margin-top: 14px;
`;

export const TextLoading = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.grey};
  margin-top: 8px;
`;

export const ContainerGraphic = styled.View`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const ContainerGraphicLine = styled.View`
  width: 100%;
  height: 250px;
  margin-bottom: 150px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoDetails = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const Background = styled.View`
  height: 100%;
  width: 100%;
  z-index: 9;
  position: absolute;
`;

export const ContainerLoading = styled.View`
  min-height: 100%;
  align-items: center;
  margin-top: 300px;
`;

export const TextRequest = styled.Text`
font-size: 21px;
font-family: ${fonts.bold};
color: ${colors.grey};
width: 100%;
text-align: center;
`;