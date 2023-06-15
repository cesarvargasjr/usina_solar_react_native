import React from "react";
import colors from "../../utils/colors";
import { GraphicProps } from "./interface";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";

export const Graphic = (props: GraphicProps) => {
  function renderGraphic() {
    switch (props?.type) {
      case "line":
        return (
          <VictoryLine
            style={{
              data: { stroke: colors.green, strokeWidth: 6 },
            }}
            animate={{
              duration: 1000,
              easing: "linear",
            }}
            data={props?.dataGraphic}
          />
        );
      case "bar":
        return (
          <VictoryBar
            data={props?.dataGraphic}
            animate={{
              duration: 1000,
              easing: "linear",
            }}
            style={{
              data: { fill: colors.green },
            }}
          />
        );
    }
  }

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
      {renderGraphic()}
    </VictoryChart>
  );
};
