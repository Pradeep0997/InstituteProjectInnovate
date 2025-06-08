import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    StudentDashboardContainer,
    Content,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle

} from "../../styles/DashboardStyles";

const StudentDashboard = () => {
    return(
        <StudentDashboardContainer>
            <Sidebar />
            <Content>
               
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Assignments</CardTitle>
                                <CardContent>5</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Performance</CardTitle>
                                <CardContent>530</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Term</CardTitle>
                                <CardContent>1</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>
                    <Section>
                       <SectionTitle>Recent Activity</SectionTitle>
                    </Section>
                    <Section>
                       <SectionTitle>Upcoming Events</SectionTitle>
                    </Section>

            </Content>
        </StudentDashboardContainer>
    )
};

export default StudentDashboard;

