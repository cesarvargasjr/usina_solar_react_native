import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.ScrollView`
  height: 100%;
  padding: 6% 4% 0 4%;
  background-color: ${colors.white};
`;

export const TitleGraphic = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
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
  margin-bottom: 100px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoDetails = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Background = styled.View`
  height: 100%;
  width: 100%;
  z-index: 9;
  position: absolute;
`;

export const ContainerDropDown = styled.ScrollView`
  /* position: absolute; */
  min-width: 150px;
  max-height: 140px;
  border-radius: 12px;
  padding: 20px 20px 0 20px;
  /* top: 705px; */
  /* left: 188px; */
  /* z-index: 999999999; */
  flex-direction: column;
  background-color:  ${colors.greenLight};
`;

export const Option = styled.Text`
  color: ${colors.blackLight};
  font-size: 18px;
  font-family: ${fonts.semiBold};
  width: 100%;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.extraBold};
  width: 100%;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  /* border: 3px solid ${colors.green}; */
  background-color: ${colors.green};
  padding: 4px;
  border-radius: 50px;
  width: 100px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ContainerOption = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;