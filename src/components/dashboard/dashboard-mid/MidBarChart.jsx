import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import { midBarChartData } from "../../../data/MidBarChart";
  

  const MidBarChart = () => {
  
    const formatTooltipValue = (value) => {
      return `${value}k`;
    };
  
    const formatYAxisLabel = (value) => {
      return `${value}k`;
    };
  
    const formatLegendValue = (value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
  
    return (
      <div className="h-[24rem] w-[100%] p-2 rounded-lg bg-white shadow-lg">
      <h1 className="font-medium text-gray-700 text-center">Profit and Loss</h1>
        <div className="h-full w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={200}
              data={midBarChartData}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis
                padding={{ left: 10 }}
                dataKey="month"
                tickSize={0}
                axisLine={false}
                tick={{
                  fill:"#676767",
                  fontSize: 14,
                }}
              />
              <YAxis
                padding={{ bottom: 10, top: 10 }}
                tickFormatter={formatYAxisLabel}
                tickCount={6}
                axisLine={false}
                tickSize={0}
                tick={{
                  fill: "#676767",
                }}
              />
              <Tooltip
                formatter={formatTooltipValue}
                cursor={{ fill: "transparent" }}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                verticalAlign="top"
                align="right"
                formatter={formatLegendValue}
              />
              <Bar
                dataKey="profit"
                fill="#475be8"
                activeBar={false}
                isAnimationActive={false}
                barSize={24}
                radius={[4, 4, 4, 4]}
              />
              <Bar
                dataKey="loss"
                fill="#e3e7fc"
                activeBar={false}
                isAnimationActive={false}
                barSize={24}
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default MidBarChart;
  