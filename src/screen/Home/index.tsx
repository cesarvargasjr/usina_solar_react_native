import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator } from "react-native";
import { CircleGraphic } from "../../components/CircleGraphic";
import { DataProps } from "./interface";
import { InfoDetails } from "../../components/InfoDetails";
import co2 from "../../assets/svgs/co2.svg";
import kwh from "../../assets/svgs/kwh.svg";
import tree from "../../assets/svgs/tree.svg";
import * as S from "./styles";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
import colors from "../../utils/colors";

export const Home = () => {
  const [data, setData] = useState<DataProps>();

  const handleDataGraphic = async () => {
    const response = await getSolarPlant("hourly");
    setData(response);
  };

  useEffect(() => {
    handleDataGraphic();
  }, []);

  console.log("========", data?.data?.generation);
  const generation5 = data?.data?.generation[0];
  const generation8 = data?.data?.generation[3];
  const generation11 = data?.data?.generation[6];
  const generation14 = data?.data?.generation[9];
  const generation17 = data?.data?.generation[12];

  return (
    <S.ContainerScreen>
      <S.TitleGraphic>Energia gerada no dia de hoje:</S.TitleGraphic>
      <S.ContainerGraphic>
        {!data ? (
          <>
            <ActivityIndicator />
            <S.TextLoading>Carregando gráfico</S.TextLoading>
          </>
        ) : (
          <CircleGraphic value={data?.data?.totals?.percentage} />
        )}
      </S.ContainerGraphic>
      <S.ContainerInfoDetails>
        <InfoDetails
          image={co2}
          value={data?.data?.totals?.co2}
          description="Carbono evitado"
        />
        <InfoDetails
          image={tree}
          value={data?.data?.totals?.trees}
          description="Árvores salvas"
        />
        <InfoDetails
          image={kwh}
          value={data?.data?.totals?.kwh}
          description="Kwh"
        />
      </S.ContainerInfoDetails>
      {!data ? (
        <>
          <ActivityIndicator />
          <S.TextLoading>Carregando gráfico</S.TextLoading>
        </>
      ) : (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: colors.green },
              // parent: { border: "1px solid #c43a31" },
            }}
            data={[
              { x: "5:00", y: generation5 },
              { x: "8:00", y: generation8 },
              { x: "11:00", y: generation11 },
              { x: "14:00", y: generation14 },
              { x: "17:00", y: generation17 },
            ]}
          />
        </VictoryChart>
      )}
    </S.ContainerScreen>
  );
};
