import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 12px;
  border: 3px solid ${colors.green};
`;

export const Value = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const ContainerValue = styled.View`
  background-color: ${colors.green};
  padding: 5px 0;
  width: 70px;
  border-radius: 50px;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
  color: ${colors.blackLight};
  text-align: center;
`;

export const ContainerDescription = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 90px;
  height: 50px; 
`;