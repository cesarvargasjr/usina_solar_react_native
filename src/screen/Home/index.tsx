import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator } from "react-native";
import { CircleGraphic } from "../../components/CircleGraphic";
import { DataProps } from "./interface";
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

  return (
    <S.ContainerScreen>
      <S.Title>Gerenciamento de energia solar</S.Title>
      <S.ContainerGraphic>
        <S.TitleGraphic>
          Total de energia gerada até agora (Hoje):
        </S.TitleGraphic>
        {!data ? (
          <>
            <ActivityIndicator />
            <S.TextLoading>Carregando gráfico</S.TextLoading>
          </>
        ) : (
          <CircleGraphic value={data?.data?.totals?.percentage} />
        )}
      </S.ContainerGraphic>
    </S.ContainerScreen>
  );
};
