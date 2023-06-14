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

export const Home = () => {
  const [data, setData] = useState<DataProps>();

  const handleDataGraphic = async () => {
    const response = await getSolarPlant("hourly");
    setData(response);
  };

  useEffect(() => {
    handleDataGraphic();
  }, []);

  console.log("========", data);

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
    </S.ContainerScreen>
  );
};
