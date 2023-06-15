import React from "react";
import { VictoryPie } from "victory-native";
import { CircleGraphicProps } from "./interface";
import colors from "../../utils/colors";
import * as S from "./styles";

export const CircleGraphic = ({ value }: CircleGraphicProps) => {
  const dataGraphic = [
    { x: `${value}%`, y: value },
    { x: `${100 - value}%`, y: 100 - value },
  ];

  return (
    <>
      <VictoryPie
        innerRadius={40}
        data={dataGraphic}
        colorScale={[colors.green, colors.greenLight]}
        width={280}
        height={280}
        animate={{
          duration: 1500,
          easing: "circle",
        }}
        style={{
          labels: {
            fill: colors.green,
            fontSize: 16,
            padding: 8,
            fontWeight: 500,
          },
        }}
      />
      <S.Container>
        <S.ContainerSubtitle>
          <S.Subtitle color={"green"} />
          <S.Text>Percentual atingido</S.Text>
        </S.ContainerSubtitle>
        <S.ContainerSubtitle>
          <S.Subtitle color={"greenLight"} />
          <S.Text>Percentual não atingido</S.Text>
        </S.ContainerSubtitle>
      </S.Container>
    </>
  );
};
