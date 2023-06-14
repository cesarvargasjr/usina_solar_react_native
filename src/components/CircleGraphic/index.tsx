import React from "react";
import { VictoryPie } from "victory-native";
import { CircleGraphicProps } from "./interface";
import colors from "../../utils/colors";
import * as S from "./styles";

export const CircleGraphic = ({ value }: CircleGraphicProps) => {
  const dataGraphic = [{ y: value }, { y: 100 - value }];

  return (
    <>
      <VictoryPie
        innerRadius={90}
        data={dataGraphic}
        colorScale={[colors.green, colors.greenLight]}
        width={200}
        height={200}
        animate={{
          duration: 2500,
          easing: "circle",
        }}
        style={{
          labels: {
            display: "none",
          },
        }}
      />
      <S.TextPercentage>{value}%</S.TextPercentage>
    </>
  );
};
