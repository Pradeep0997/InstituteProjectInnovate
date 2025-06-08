import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
   AttendanceContainer,
   SidebarContainer,
   Content,
   AttendanceHeader,
   AttendanceList,
   AttendanceItem,
    AttendanceDate,
    AttendanceStatus
} from "../../styles/AttendanceStyles";

const AttendenceSection = () => {
    const attendence = [
        {id: 1, date: '2025-04-01', present: true },
        {id: 2, date: '2025-04-01', present: false },
        {id: 3, date: '2025-04-03', present: true },
        {id: 4, date: '2025-04-04', present: true },
        {id: 5, date: '2025-04-05', present: false },

    ];
    return(
        <AttendanceContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <AttendanceHeader>Attendence</AttendanceHeader>
                <AttendanceList>
                    {attendence.map(({id,date,present}) => (
                        <AttendanceItem key={id} >
                            <AttendanceDate>{date}</AttendanceDate>
                            <AttendanceStatus present={present}>{present ? 'Present' : 'Absent' }</AttendanceStatus>
                        </AttendanceItem>
                    ))};
                </AttendanceList>
            </Content>
        </AttendanceContainer>
    );
}

export default AttendenceSection; 