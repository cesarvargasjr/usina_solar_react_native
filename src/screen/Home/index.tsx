import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator, TouchableOpacity } from "react-native";
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
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDataGraphic = async () => {
    const response = await getSolarPlant("hourly");
    setData(response);
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

  // console.log("========", data?.data);

  return (
    <>
      {showDropdown && (
        <S.Background onTouchEnd={() => setShowDropdown(false)} />
      )}

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
        <S.ContainerOption>
          <S.TitleGraphic>Gráfico em horas:</S.TitleGraphic>
          <S.Button onPress={() => setShowDropdown(true)}>
            <S.TextButton>Opções</S.TextButton>
          </S.Button>
          {showDropdown && (
            <S.ContainerDropDown>
              {/* {optionsCity?.map((item: string, i: number) => ( */}
              <TouchableOpacity>
                <S.Option>Linha</S.Option>
                <S.Option>Barras</S.Option>
              </TouchableOpacity>
              {/* ))} */}
            </S.ContainerDropDown>
          )}
        </S.ContainerOption>
        <S.ContainerGraphicLine>
          {!data ? (
            <>
              <ActivityIndicator />
              <S.TextLoading>Carregando gráfico</S.TextLoading>
            </>
          ) : (
            // <Graphic type="bar" dataGraphic={dataGraphic} />
            <Graphic type="line" dataGraphic={dataGraphic} />
          )}
        </S.ContainerGraphicLine>
        {/* <S.ContainerGraphicLine>
        <Graphic type="bar" dataGraphic={dataGraphic} />
      </S.ContainerGraphicLine> */}
      </S.ContainerScreen>
    </>
  );
};
