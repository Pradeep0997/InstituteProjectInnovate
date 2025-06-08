import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // Required for auto-registration
import Sidebar from './Sidebar';

import {
  ExamContainer,
  ExamHeader,
  SidebarContainer,
  Content,
  ExamSubject,
  ExamResultsContainer,
  ExamResult,
  ExamChartContainer
} from "../../styles/ExamStyles";

const ExamSection = () => {
  const chartRef = useRef(null); // 👈 to track chart instance
  const canvasRef = useRef(null); // 👈 actual canvas element

  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    scores: [85, 90, 78, 88]
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.scores // 👈 fix typo from `.results` to `.scores`
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // 👈 destroy old chart
    }

    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, {
        type: 'bar',
        data: barChartData,
        options: chartOptions
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // 👈 cleanup on unmount
      }
    };
  }, [barChartData]);

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.scores[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <canvas ref={canvasRef} /> {/* 👈 this is key */}
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
