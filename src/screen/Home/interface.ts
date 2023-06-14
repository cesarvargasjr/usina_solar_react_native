export interface DataProps {
  data: {
    data_type: string;
    expected: [];
    generation: [];
    totals: {
      co2: number;
      kwh: number;
      percentage: number;
      trees: number;
    };
    x_labels: [];
  };
}