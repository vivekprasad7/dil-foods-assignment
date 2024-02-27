import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
  } from "recharts";

const TopPieCard = ({colors, percentFillValue, cardInfo}) => {

    const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
    const remainedValue = 360 - filledValue;

    const { title, value, text}= cardInfo

    const data = [
        {name: "Remaining" , value: remainedValue},
        {name: "Achieved Sales" , value: filledValue}
    ]

    const renderTooltipContent = (value) => {
        return `${(value / 360) * 100} %`;
      };
    
  return (
    <div className='bg-white flex p-2 py-3 m-auto my-2 w-[300px] rounded-lg shadow-lg'>
        <div className=''>
            <h5 className='font-bold'>{title}</h5>
            <div>{value}</div>
            <p>{text}</p>
        </div>
        <div>
            <PieChart width={100} height={100}>
                <Pie
                data={data}
                cx={50}
                cy={45}
                innerRadius={20}
                fill="#e4e8ef"
                paddingAngle={0}
                dataKey="value"
                startAngle={-270}
                endAngle={150}
                stroke="none"
                >
                    {
                        data.map((entry, index) => (
                            <Cell 
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                            />
                        ))
                    }

                </Pie>
                <Tooltip formatter={renderTooltipContent}/>
            </PieChart>
        </div>



        
           
        
    </div>
  )
}

export default TopPieCard