import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


import {
   PerformanceContainer,
   SidebarContainer,
   Content,
   PerformanceHeader,
   PerformanceInfo,
   PerformanceGraphContainer,
   TotalMarks
} from "../../styles/PerformanceStyles";

const PerformanceSection = () => {
    const performanceData = {
        months: ['Jan','Feb','Mar','Apr','May','Jun'],
        marks: [90,85,87,92,85,89],
        totalMarks: 528
    };
    const lineChartData = {
        labels: performanceData.months,
        datasets: [
            {
                label: 'Performance Trends',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                data: performanceData.marks
            }
        ]
    };
    return(
        <PerformanceContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <PerformanceHeader>Performance</PerformanceHeader>
                <PerformanceInfo>
                    <PerformanceGraphContainer>
                        <Line 
                            data={lineChartData}
                            options ={{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                        {/* <Line 
                            data={lineChartData}
                            options={{
                                responsive: true,
                                scales: {
                                y: {
                                    beginAtZero: true
                                }
                                }
                            }}
                        /> */}
                    </PerformanceGraphContainer>
                    <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
                </PerformanceInfo>
            </Content>
        </PerformanceContainer>
    );
}

export default PerformanceSection; 