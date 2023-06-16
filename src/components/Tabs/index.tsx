import React from "react";
import { TabsProps } from "./interface";
import * as S from "./styles";

export const Tabs = (props: TabsProps) => {
  return (
    <S.ContainerTabs>
      <S.ButtonGraphicLine onPress={props?.onPress} border={props?.showGraphic}>
        <S.TextButton>Linha</S.TextButton>
      </S.ButtonGraphicLine>
      <S.ButtonGraphicBar onPress={props?.onPress} border={props?.showGraphic}>
        <S.TextButton>Barras</S.TextButton>
      </S.ButtonGraphicBar>
    </S.ContainerTabs>
  );
};
