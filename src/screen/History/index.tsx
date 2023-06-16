import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Graphic } from "../../components/Graphics";
import { DataProps } from "./interface";
import { Tabs } from "../../components/Tabs";
import { InfoDetails } from "../../components/InfoDetails";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
import co2 from "../../assets/svgs/co2.svg";
import kwh from "../../assets/svgs/kwh.svg";
import tree from "../../assets/svgs/tree.svg";
import * as S from "./styles";

export const History = () => {
  const [data, setData] = useState<DataProps>();
  const [showDropdown, setShowDropdown] = useState(false);
  const [periodGraphic, setPeriodGraphic] = useState("daily");
  const [showGraphic, setShowGraphic] = useState(false);

  const handleDataGraphic = async () => {
    const response = await getSolarPlant(periodGraphic);
    setData(response);
  };

  function RenderGraphic() {
    switch (periodGraphic) {
      case "daily":
        return (
          <>
            {!showGraphic ? (
              <Graphic
                type="line"
                dataGraphic={graphicMonthly}
                positionX="Dias"
                positionY="Kwh"
              />
            ) : (
              <Graphic
                type="bar"
                dataGraphic={graphicMonthly}
                positionX="Dias"
                positionY="Kwh"
              />
            )}
          </>
        );
      case "monthly":
        return (
          <>
            {!showGraphic ? (
              <Graphic
                type="line"
                dataGraphic={graphicSixMonths}
                positionX="Mês/Ano"
                positionY="Kwh"
              />
            ) : (
              <Graphic
                type="bar"
                dataGraphic={graphicSixMonths}
                positionX="Mês/Ano"
                positionY="Kwh"
              />
            )}
          </>
        );
      case "yearly":
        return (
          <>
            {!showGraphic ? (
              <Graphic
                type="line"
                dataGraphic={graphicLastYears}
                positionX="Ano"
                positionY="Kwh"
              />
            ) : (
              <Graphic
                type="bar"
                dataGraphic={graphicLastYears}
                positionX="Ano"
                positionY="Kwh"
              />
            )}
          </>
        );
    }
  }

  useEffect(() => {
    handleDataGraphic();
  }, [periodGraphic]);

  const graphicSixMonths = [
    {
      x: `${data?.data?.x_labels[7]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[7]?.slice(0, 4)}`,
      y: data?.data?.generation[7],
    },
    {
      x: `${data?.data?.x_labels[8]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[8]?.slice(0, 4)}`,
      y: data?.data?.generation[8],
    },
    {
      x: `${data?.data?.x_labels[9]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[9]?.slice(0, 4)}`,
      y: data?.data?.generation[9],
    },
    {
      x: `${data?.data?.x_labels[10]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[10]?.slice(0, 4)}`,
      y: data?.data?.generation[10],
    },
    {
      x: `${data?.data?.x_labels[11]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[11]?.slice(0, 4)}`,
      y: data?.data?.generation[11],
    },
    {
      x: `${data?.data?.x_labels[12]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[12]?.slice(0, 4)}`,
      y: data?.data?.generation[12],
    },
  ];

  const graphicMonthly = [
    { x: "01", y: data?.data?.generation[0] },
    { x: "05", y: data?.data?.generation[4] },
    { x: "10", y: data?.data?.generation[9] },
    { x: "15", y: data?.data?.generation[14] },
    { x: "20", y: data?.data?.generation[19] },
    { x: "25", y: data?.data?.generation[24] },
    { x: "30", y: data?.data?.generation[28] },
  ];

  const graphicLastYears = [
    {
      x: `${data?.data?.x_labels[0]?.slice(0, 4)}`,
      y: data?.data?.generation[0],
    },
    {
      x: `${data?.data?.x_labels[1]?.slice(0, 4)}`,
      y: data?.data?.generation[1],
    },
    {
      x: `${data?.data?.x_labels[2]?.slice(0, 4)}`,
      y: data?.data?.generation[2],
    },
  ];

  const currentMonth = new Date();
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  const lastMonth = currentMonth.toLocaleString("default", { month: "long" });

  return (
    <>
      {showDropdown && (
        <S.Background onTouchEnd={() => setShowDropdown(false)} />
      )}
      {showDropdown && (
        <S.ContainerDropDown>
          <TouchableOpacity
            onPress={() => (setPeriodGraphic("daily"), setShowDropdown(false))}
          >
            <S.Option>Último Mês</S.Option>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (
              setPeriodGraphic("monthly"), setShowDropdown(false)
            )}
          >
            <S.Option>Últimos 6 meses</S.Option>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setPeriodGraphic("yearly"), setShowDropdown(false))}
          >
            <S.Option>Últimos anos</S.Option>
          </TouchableOpacity>
        </S.ContainerDropDown>
      )}
      <S.ContainerScreen>
        <S.ContainerSelect>
          <S.TextSelect>Selecione o período:</S.TextSelect>
          <S.ButtonSelect onPress={() => setShowDropdown(true)}>
            <S.TextOption>
              {periodGraphic === "daily"
                ? "Último Mês"
                : periodGraphic === "monthly"
                ? "Últimos 6 meses"
                : "Últimos anos"}
            </S.TextOption>
            {!showDropdown ? (
              <Ionicons name="arrow-down" size={20} color={colors.white} />
            ) : (
              <Ionicons name="arrow-up" size={20} color={colors.white} />
            )}
          </S.ButtonSelect>
        </S.ContainerSelect>
        {periodGraphic === "daily" && (
          <S.ContainerMonth>
            <S.TextMonthSelected>Último mês:</S.TextMonthSelected>
            <S.MonthSelected>{lastMonth}</S.MonthSelected>
          </S.ContainerMonth>
        )}
        <Tabs
          onPress={() =>
            !showGraphic ? setShowGraphic(true) : setShowGraphic(false)
          }
          showGraphic={showGraphic}
        />
        <S.ContainerGraphic>
          {!data ? (
            <S.ContainerLoading>
              <ActivityIndicator />
              <S.TextLoading>Carregando gráfico</S.TextLoading>
            </S.ContainerLoading>
          ) : (
            <RenderGraphic />
          )}
        </S.ContainerGraphic>
        <S.TextInfoDetails>Histórico total:</S.TextInfoDetails>
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
            value={data?.data?.totals?.kwh?.toFixed(2)}
            description="Kwh"
          />
        </S.ContainerInfoDetails>
      </S.ContainerScreen>
    </>
  );
};
