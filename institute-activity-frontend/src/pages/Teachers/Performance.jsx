import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
        PerformanceContainer,
        Content,
        PerformanceContent,
        PerformanceHeader,
        SchoolPerformance,
        IndividualPerformance
} from '../../styles/PerformanceStyles';

const CheckPerformanceSection = () => {

   const schoolPerformanceData = {
        averageScore:85,
        totalStudents:100
    };
    const individualPerformanceData =[
        { id:1, name:"Pradeep", score: 90},
        { id:2, name:"AA", score: 86},
        { id:3, name:"abhi", score: 93},
    ];
    return(
        <PerformanceContainer>
            <Sidebar />
            <Content>
                <PerformanceContent>
                    <PerformanceHeader>Institute Performance</PerformanceHeader>
                    <SchoolPerformance>
                         <p>Average Score: {schoolPerformanceData.averageScore}</p>
                         <p>Total Students: {schoolPerformanceData.totalStudents}</p>
                    </SchoolPerformance>
                    <PerformanceHeader>Individual Performance</PerformanceHeader>
                    <IndividualPerformance>
                        {individualPerformanceData.map((student)=>{
                            <p key={student.id}>{student.name} : {student.score }</p>
                        })}
                    </IndividualPerformance>
                </PerformanceContent>
            </Content>
        </PerformanceContainer>
    )
};
export default CheckPerformanceSection;