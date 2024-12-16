import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Card, CardContent} from '@mui/material'
import {Bar} from 'react-chartjs-2';
import { PolarArea } from "react-chartjs-2";
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','Jun',"Jul","Aug","Sept","Oct","Nov","Dec"],
  datasets: [
    
      {
        label: "Google Ads",
        data: [33, 53, 65, 41, 44, 65,49,72,60,21,39,45,43],
        fill: true,
        backgroundColor: "rgba(65,162,122,1)",
        borderColor: "rgba(65,162,122,1)"
      },
      {
        label: "Facebook Ads",
        data: [33, 25, 35, 51, 54, 76,42,29,53,32,47,68,29,12],
        fill: true,
        backgroundColor: "rgba(75,142,190,7)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Youtube Ads",
        data: [30, 15, 50, 62, 61, 66,56,12,9,35,22,67,58],
        fill: true,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,142,190,7)"
      }
    
  ]
}

export default function Analytics() {
  return (
    <div style={{marginLeft:'30px',marginBottom:'900px'}}>
       <h2 style={{marginTop : 30, marginBottom:30,color:'GrayText'}}>ANALYTICS</h2>
    <div style={{display : 'flex'}}>
       
       <Card sx={{marginLeft:'20px',width:'500px',height:'250px'}}>
        <h4>VISIT TRENDS</h4>
<CardContent>
<div style={{margin: 'auto', height: '400px' ,width: '400px'}}>
    <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
</CardContent>
       </Card>
      

       <Card sx={{marginLeft:'20px',width:'400px',height:'250px'}}>
        <h4>Impressions</h4>
<CardContent>
   <div style={{margin: 'auto', height: '200px' ,width: '300px'}}>
     <Line
  datasetIdKey='id'
  data={{
    labels: ["20", "30", "40", "50", "60", "70","80"],
    datasets: [
      {
        label: "2,51,764",
        data: [33, 53, 65, 41, 44, 65,49,72],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  }}
/>
</div>
</CardContent>
       </Card>
<Card sx={{marginLeft:'20px',width:'400px',height:'250px'}}>
        <h4>Amount Spent</h4>
<CardContent>
   <div style={{margin: 'auto', height: '200px' ,width: '300px'}}>
  <Line 
  data = {{
  labels: [
    '',
    
    '',
    '',"",""
  ],
  datasets: [{
    label: '$1365.43',
    data: [1000, 1280, 1200,1400,1303,1391],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
}}/>
</div>
</CardContent>
       </Card>
      </div>
  <br/><br/>
      <div style={{display:'flex'}}>
        <Card sx={{marginLeft:'20px',width:'600px',height:'450px'}}>
        <h4>Sessions</h4>
          <CardContent>
          <div style={{margin: 'auto', height: '400px' ,width: '400px'}}>
            <PolarArea
            const data = {{
              labels: [
                'Email',
                'Social',
                'Display',
                'Direct',
                'Other'
              ],
              datasets: [{
                label: 'Sessions',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)',
                  'rgb(54, 162, 235)'
                ]
              }]
            }}/> </div>
          </CardContent>
        </Card>
        
       <Card>
        <CardContent>
          <h5>Revenues</h5>
        <div style={{margin: 'auto', height: '400px' ,width: '700px'}}>
          <Bar
           const data = {{
             labels: ['January', 'February', 'March',
             'April', 'May','Jun',"Jul","Aug","Sept","Oct","Nov","Dec"],
             datasets: [{
               axis: 'y',
               label: 'Revenues',
               data: [1065.3, 1259.4, 1080.6, 1381.5, 1456.5, 1255.4, 1240.5,1756.3,1435.2,1228.3,1631.2,1242.3],
               fill: true,
               backgroundColor: [
                
                 'rgba(75, 192, 192, 0.4)',
                 
               ],
               borderColor: [
                 
                 'rgb(75, 192, 192)',
                
               ],
               borderWidth: 1
           }]
           }}
          />
          </div>
       
        </CardContent>
       </Card>
      </div>
    </div>
   
    
  );
}
