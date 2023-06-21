import React, { useEffect, useState } from "react";
import { getSolarPlant } from "../../services/solarPlant";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Graphic } from "../../components/Graphics";
import { DataProps } from "./interface";
import { Tabs } from "../../components/Tabs";
import { InfoDetails } from "../../components/InfoDetails";
import { calculateAverage } from "../../utils/calculateAverage";
import { lazyLoad } from "../../utils/lazyLoad";
import { arrayPeiods } from "../../utils/arrayPeriods";
import { useAnimate } from "../../context/Animate";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
import co2 from "../../assets/svgs/co2.svg";
import kwh from "../../assets/svgs/kwh.svg";
import tree from "../../assets/svgs/tree.svg";
import * as S from "./styles";

export const History = () => {
  const { setAnimate } = useAnimate();
  const [data, setData] = useState<DataProps>();
  const [showDropdown, setShowDropdown] = useState(false);
  const [periodGraphic, setPeriodGraphic] = useState("daily");
  const [showGraphic, setShowGraphic] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentMonth = new Date();
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  const lastMonth = currentMonth.toLocaleString("default", { month: "long" });

  const handleDataGraphic = async () => {
    setLoading(true);
    await lazyLoad(500);
    const response = await getSolarPlant(periodGraphic);
    setData(response);
    setLoading(false);
  };

  const handleFilter = (period: string) => {
    setPeriodGraphic(period),
      setShowDropdown(false),
      setShowGraphic(false),
      setAnimate(true);
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
        break;
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
        break;
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
        break;
    }
  }

  const graphicSixMonths = [
    {
      x: `${data?.data?.x_labels[7]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[7]?.slice(0, 4)}`,
      y: data?.data?.generation[7] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[8]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[8]?.slice(0, 4)}`,
      y: data?.data?.generation[8] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[9]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[9]?.slice(0, 4)}`,
      y: data?.data?.generation[9] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[10]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[10]?.slice(0, 4)}`,
      y: data?.data?.generation[10] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[11]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[11]?.slice(0, 4)}`,
      y: data?.data?.generation[11] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[12]?.slice(
        5,
        7
      )}/${data?.data?.x_labels[12]?.slice(0, 4)}`,
      y: data?.data?.generation[12] ?? 0,
    },
  ];

  const graphicMonthly = [
    { x: "01", y: data?.data?.generation[0] ?? 0 },
    { x: "05", y: data?.data?.generation[4] ?? 0 },
    { x: "10", y: data?.data?.generation[9] ?? 0 },
    { x: "15", y: data?.data?.generation[14] ?? 0 },
    { x: "20", y: data?.data?.generation[19] ?? 0 },
    { x: "25", y: data?.data?.generation[24] ?? 0 },
    { x: "30", y: data?.data?.generation[28] ?? 0 },
  ];

  const graphicLastYears = [
    {
      x: `${data?.data?.x_labels[0]?.slice(0, 4)}`,
      y: data?.data?.generation[0] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[1]?.slice(0, 4)}`,
      y: data?.data?.generation[1] ?? 0,
    },
    {
      x: `${data?.data?.x_labels[2]?.slice(0, 4)}`,
      y: data?.data?.generation[2] ?? 0,
    },
  ];

  useEffect(() => {
    handleDataGraphic();
  }, [periodGraphic]);

  return (
    <>
      {showDropdown && (
        <S.Background onTouchEnd={() => setShowDropdown(false)} />
      )}
      {showDropdown && (
        <S.ContainerDropDown>
          {arrayPeiods?.map((item) => (
            <TouchableOpacity
              key={item?.period}
              onPress={() => handleFilter(item?.period)}
            >
              <S.Option>{item?.name}</S.Option>
            </TouchableOpacity>
          ))}
        </S.ContainerDropDown>
      )}
      <S.ContainerScreen>
        <S.ContainerSelect>
          <S.TextSelect>Selecione o período:</S.TextSelect>
          <S.ButtonSelect
            onPress={() => (setShowDropdown(true), setAnimate(false))}
          >
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
        {loading ? (
          <S.ContainerLoading>
            <ActivityIndicator size={"large"} color={colors.green} />
          </S.ContainerLoading>
        ) : (
          <>
            {!data ? (
              <S.ContainerLoading>
                <S.TextRequest>
                  Não foi possível realizar a sua pesquisa. Tente novamente!
                </S.TextRequest>
              </S.ContainerLoading>
            ) : (
              <>
                {periodGraphic === "daily" && (
                  <S.ContainerMonth>
                    <S.TextMonthSelected>Último mês:</S.TextMonthSelected>
                    <S.MonthSelected>{lastMonth}</S.MonthSelected>
                  </S.ContainerMonth>
                )}
                <S.ContainerText>
                  <S.TextMonthSelected>
                    Expectativa{" "}
                    {periodGraphic === "daily"
                      ? "diária"
                      : periodGraphic === "monthly"
                      ? "mensal"
                      : "anual"}
                    :
                  </S.TextMonthSelected>
                  <S.MonthSelected>
                    {calculateAverage(data?.data?.expected).toFixed(2)} Kwh
                  </S.MonthSelected>
                </S.ContainerText>
                <Tabs
                  tabOne={() => showGraphic && setShowGraphic(false)}
                  tabTwo={() => !showGraphic && setShowGraphic(true)}
                  showGraphic={showGraphic}
                />
                <S.ContainerGraphic>
                  <RenderGraphic />
                </S.ContainerGraphic>
                <S.TextInfoDetails>
                  Histórico total{" "}
                  {periodGraphic === "daily"
                    ? "do último Mês"
                    : periodGraphic === "monthly"
                    ? "dos últimos 6 meses"
                    : "dos últimos anos"}
                  :
                </S.TextInfoDetails>
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
              </>
            )}
          </>
        )}
      </S.ContainerScreen>
    </>
  );
};
