import React , {PureComponent}from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css'

const data = [
  {name: "January", Total:1200},
  {name:"february", Total:2100},
  {name: "March", Total:1600},
  {name:"April",Total:900},
  {name:"May", Total:700},
  {name: "June", Total:1700},

  ];

const Chart = ({aspect, title}) => {
    
          
    return (
        <div className='c-chart'>
            <div className='c-title'>{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke='gray' />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        </ResponsiveContainer>
      </div>

            
    
    );
}

export default Chart;
