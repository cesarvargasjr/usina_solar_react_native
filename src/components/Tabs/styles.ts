import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const ContainerTabs = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ButtonGraphicLine = styled.TouchableOpacity<{ border: boolean }>`
  border-bottom-width: 2px solid;
  border-color: ${({ border }) => border ? colors.white : colors.green};
  padding-bottom: 4px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${colors.green};
  font-size: 21px;
  font-family: ${fonts.semiBold};
  width: 100%;
  text-align: center;
`;

export const ButtonGraphicBar = styled.TouchableOpacity<{ border: boolean }>`
  border-bottom-width: 2px solid;
  border-color: ${({ border }) => border ? colors.green : colors.white};
  padding-bottom: 4px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;