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
                dataGraphic={graphicYearly}
                positionX="Meses"
                positionY="Kwh"
              />
            ) : (
              <Graphic
                type="bar"
                dataGraphic={graphicYearly}
                positionX="Meses"
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

  const graphicYearly = [
    { x: "Jan", y: data?.data?.generation[0] },
    { x: "Mar", y: data?.data?.generation[2] },
    { x: "Mai", y: data?.data?.generation[4] },
    { x: "Jul", y: data?.data?.generation[6] },
    { x: "Set", y: data?.data?.generation[8] },
    { x: "Nov", y: data?.data?.generation[10] },
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
            <S.Option>Mensal</S.Option>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (
              setPeriodGraphic("monthly"), setShowDropdown(false)
            )}
          >
            <S.Option>Anual</S.Option>
          </TouchableOpacity>
        </S.ContainerDropDown>
      )}
      <S.ContainerScreen>
        <S.ContainerSelect>
          <S.TextSelect>Selecione o período:</S.TextSelect>
          <S.ButtonSelect onPress={() => setShowDropdown(true)}>
            <S.TextOption>
              {periodGraphic === "daily" ? "Mensal" : "Anual"}
            </S.TextOption>
            {!showDropdown ? (
              <Ionicons name="arrow-down" size={20} color={colors.white} />
            ) : (
              <Ionicons name="arrow-up" size={20} color={colors.white} />
            )}
          </S.ButtonSelect>
        </S.ContainerSelect>
        <Tabs
          onPress={() =>
            !showGraphic ? setShowGraphic(true) : setShowGraphic(false)
          }
          showGraphic={showGraphic}
        />
        <S.ContainerGraphic>
          {!data ? (
            <>
              <View style={{ marginTop: 100 }}></View>
              <ActivityIndicator />
              <S.TextLoading>Carregando gráfico</S.TextLoading>
            </>
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
