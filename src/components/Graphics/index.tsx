import React, { useState } from "react";
import colors from "../../utils/colors";
import { GraphicProps } from "./interface";
import { useAnimate } from "../../context/Animate";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";
import * as S from "./styles";

export const Graphic = (props: GraphicProps) => {
  const { animate } = useAnimate();

  function renderGraphic() {
    switch (props?.type) {
      case "line":
        return (
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 0, y: 12 }}
          >
            <VictoryLine
              style={{
                data: { stroke: colors.green, strokeWidth: 6 },
              }}
              animate={animate}
              data={props?.dataGraphic}
            />
          </VictoryChart>
        );
      case "bar":
        return (
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 18, y: 12 }}
          >
            <VictoryBar
              data={props?.dataGraphic}
              animate={animate}
              style={{
                data: { fill: colors.green, strokeWidth: 1 },
              }}
            />
          </VictoryChart>
        );
    }
  }

  return (
    <>
      {renderGraphic()}
      <S.ContainerSubtitle>
        <S.TextPosition>Eixo Y:</S.TextPosition>
        <S.Subtitle>{props?.positionY}</S.Subtitle>
      </S.ContainerSubtitle>
      <S.ContainerSubtitle>
        <S.TextPosition>Eixo X:</S.TextPosition>
        <S.Subtitle>{props?.positionX}</S.Subtitle>
      </S.ContainerSubtitle>
    </>
  );
};
