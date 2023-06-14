import React from "react";
import { SvgCss } from "react-native-svg";
import { InfoDetailsProps } from "./interface";
import * as S from "./styles";

export const InfoDetails = ({
  image,
  value,
  description,
}: InfoDetailsProps) => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <SvgCss xml={image} />
      </S.ContainerIcon>
      <S.ContainerDescription>
        <S.Description>{description}</S.Description>
      </S.ContainerDescription>
      <S.ContainerValue>
        <S.Value>{value}</S.Value>
      </S.ContainerValue>
    </S.Container>
  );
};
