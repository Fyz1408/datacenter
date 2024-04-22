import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

interface ExampleChart {}

const ExampleChart: React.FC<ExampleChart> = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [{
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }],
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ExampleChart;