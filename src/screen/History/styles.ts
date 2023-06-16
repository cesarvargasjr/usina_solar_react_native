import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.ScrollView`
  height: 100%;
  padding: 6% 4% 0 4%;
  background-color: ${colors.white};
`;

export const TextSelect = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
  margin-right: 5px;
`;

export const Background = styled.View`
  height: 100%;
  width: 100%;
  z-index: 9;
  position: absolute;
`;

export const ContainerDropDown = styled.ScrollView`
  position: absolute;
  width: 120px;
  border-radius: 8px;
  padding: 15px 20px 0 10px;
  top: 60px;
  left: 205px;
  z-index: 99999;
  flex-direction: column;
  background-color:  ${colors.green};
`;

export const Option = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.semiBold};
  width: 100%;
  margin-bottom: 15px;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonSelect = styled.TouchableOpacity`
  width: 120px;
  border-radius: 8px;
  padding: 6px 10px;
  background-color: ${colors.green};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextOption = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
`;

export const TextLoading = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.grey};
  margin-top: 8px;
`;

export const ContainerGraphic = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  padding-left: 25px;
`;

export const ContainerInfoDetails = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 25px;
`;

export const TextInfoDetails = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};
  color: ${colors.blackLight};
  margin-top: 25px;
`;