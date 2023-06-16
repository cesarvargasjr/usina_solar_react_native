import React from "react";
import { SvgCss } from "react-native-svg";
import { InfoDetailsProps } from "./interface";
import * as S from "./styles";

export const InfoDetails = (props: InfoDetailsProps) => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <SvgCss xml={props?.image} />
      </S.ContainerIcon>
      <S.ContainerDescription>
        <S.Description>{props?.description}</S.Description>
      </S.ContainerDescription>
      <S.ContainerValue>
        <S.Value>{props?.value}</S.Value>
      </S.ContainerValue>
    </S.Container>
  );
};
