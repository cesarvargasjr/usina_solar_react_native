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





export const TextButton = styled.Text`
  color: ${colors.green};
  font-size: 21px;
  font-family: ${fonts.semiBold};
  width: 100%;
  text-align: center;
`;

export const ButtonGraphicLine = styled.TouchableOpacity<{ border: boolean }>`
  border-bottom-width: 2px solid;
  border-color: ${({ border }) => border ? colors.white : colors.green};
  padding-bottom: 4px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const ButtonGraphicBar = styled.TouchableOpacity<{ border: boolean }>`
  border-bottom-width: 2px solid;
  border-color: ${({ border }) => border ? colors.green : colors.white};
  padding-bottom: 4px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const ContainerTabs = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;