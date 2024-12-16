import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {DatasetComponent, TooltipComponent, LegendComponent ,GridComponent } from 'echarts/components';
import { PieChart ,BarChart ,LineChart } from 'echarts/charts';
import { UniversalTransition, LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


// import Navbar from '../Global/Navbar'
// import BreadCrumb from '../Global/BreadCrumb'



echarts.use([
    DatasetComponent,
    UniversalTransition,
    TooltipComponent,
    LineChart,
    LegendComponent,
    PieChart,
    SVGRenderer,
    LabelLayout,
    GridComponent,
    BarChart,
  ]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Dashboard = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);
        const chartBar = document.getElementById('columnBar');
        const myChartCol = echarts.init(chartBar);
        var chartLineBar = document.getElementById('ColumnLine');
        var myChartBarCol = echarts.init(chartLineBar, null, {
                            renderer: 'svg'
                            });
          
         

                            
        
    
        const option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ]
            }
          ]
        }
    
        option && myChart.setOption(option);



        const options = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
              }
            ]
          };
          
          options && myChartCol.setOption(options);


          let optionBL;

          setTimeout(function () {
            optionBL = {
              legend: {},
              tooltip: {
                trigger: 'axis',
                showContent: false
              },
              dataset: {
                source: [
                  ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                  ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                  ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                  ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                  ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
                ]
              },
              xAxis: { type: 'category' },
              yAxis: { gridIndex: 0 },
              grid: { top: '55%' },
              series: [
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' }
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' }
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' }
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' }
                },
                {
                  type: 'pie',
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
                  emphasis: {
                    focus: 'self'
                  },
                  label: {
                    formatter: '{b}: {@2012} ({d}%)'
                  },
                  encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                  }
                }
              ]
            };
            myChartBarCol.on('updateAxisPointer', function (event) {
              const xAxisInfo = event.axesInfo[0];
              if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                myChartBarCol.setOption({
                  series: {
                    id: 'pie',
                    label: {
                      formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                      value: dimension,
                      tooltip: dimension
                    }
                  }
                });
              }
            });
            myChartBarCol.setOption(optionBL);
          });
          
          optionBL && myChartBarCol.setOption(optionBL);

        
          let asideElement = document.getElementsByClassName('menu1')[0];
         

            // asideElement.addEventListener("click" , function(){
              
            //     myChartBarCol.resize();
            //     myChart.resize();
            //     myChartCol.resize();
            
            // })
         
          
          // Clean up
          return () => {
            // myChart.dispose();
            // myChartCol.dispose();
            // myChartBarCol.dispose();
            // unsubscribe();
        };
      }, []);

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Item ref={chartRef} id='main' style={{ width: '100%', height : "20rem" }}></Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item ref={chartRef} id='columnBar' style={{ width: '100%', height : "20rem" }}></Item>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Item ref={chartRef} id='ColumnLine' style={{ width: '100%', height : "25rem" }}></Item>
                </Grid>
                
            </Grid>
        </Box>

        
    </>
  )
}

export default Dashboard