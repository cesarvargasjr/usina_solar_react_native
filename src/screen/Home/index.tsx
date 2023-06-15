import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator } from "react-native";
import { CircleGraphic } from "../../components/CircleGraphic";
import { DataProps } from "./interface";
import { InfoDetails } from "../../components/InfoDetails";
import { Graphic } from "../../components/Graphics";
import co2 from "../../assets/svgs/co2.svg";
import kwh from "../../assets/svgs/kwh.svg";
import tree from "../../assets/svgs/tree.svg";
import * as S from "./styles";

export const Home = () => {
  const [data, setData] = useState<DataProps>();
  const [showGraphic, setShowGraphic] = useState(false);

  const handleDataGraphic = async () => {
    const response = await getSolarPlant("hourly");
    setData(response);
  };

  const RenderGraphic = () => {
    if (!showGraphic) {
      return <Graphic type="line" dataGraphic={dataGraphic} />;
    } else {
      return <Graphic type="bar" dataGraphic={dataGraphic} />;
    }
  };

  useEffect(() => {
    handleDataGraphic();
  }, []);

  const dataGraphic = [
    { x: "5:00", y: data?.data?.generation[0] },
    { x: "8:00", y: data?.data?.generation[3] },
    { x: "11:00", y: data?.data?.generation[6] },
    { x: "14:00", y: data?.data?.generation[9] },
    { x: "17:00", y: data?.data?.generation[12] },
  ];

  return (
    <>
      <S.ContainerScreen>
        <S.TitleGraphic>Energia gerada no dia de hoje:</S.TitleGraphic>
        <S.Container>
          <S.ContainerText>
            <S.Text>Expectativa:</S.Text>
            <S.Text>{data?.data?.expected} Kwh</S.Text>
          </S.ContainerText>
          <S.ContainerText>
            <S.Text>Realidade:</S.Text>
            <S.Text>{data?.data?.totals?.kwh.toFixed(3)} Kwh</S.Text>
          </S.ContainerText>
        </S.Container>
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
        <S.TitleGraphic>Desempenho em horas:</S.TitleGraphic>
        <S.ContainerTabs>
          <S.ButtonGraphicLine
            onPress={() => setShowGraphic(false)}
            border={showGraphic}
          >
            <S.TextButton>Linhas</S.TextButton>
          </S.ButtonGraphicLine>
          <S.ButtonGraphicBar
            onPress={() => setShowGraphic(true)}
            border={showGraphic}
          >
            <S.TextButton>Barras</S.TextButton>
          </S.ButtonGraphicBar>
        </S.ContainerTabs>
        <S.ContainerGraphicLine>
          {!data ? (
            <>
              <ActivityIndicator />
              <S.TextLoading>Carregando gráfico</S.TextLoading>
            </>
          ) : (
            <RenderGraphic />
          )}
        </S.ContainerGraphicLine>
      </S.ContainerScreen>
    </>
  );
};
