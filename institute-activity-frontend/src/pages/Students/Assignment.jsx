import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
   AssignmentsContainer,
   SidebarContainer,
   Content,
   AssignmentButton,
   AssignmentCard,
   AssignmentTitle,
   AssignmentDescription,
   AssignmentDoneMessage
} from "../../styles/AssignmentsStyles";

const StudnetAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
            setAssignments(response.data.assignments);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    return(
        <AssignmentsContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <h1>Assignments</h1>
                {assignments.length > 0 ? (
                    assignments.map((assignment) => (
                        <AssignmentCard key={assignment._id}>
                            <AssignmentTitle>{assignment.title}</AssignmentTitle>
                            <AssignmentDescription>{assignment.description}</AssignmentDescription>
                            <AssignmentButton>Mark as Done</AssignmentButton>
                        </AssignmentCard>
                    ))
                ) : (
                    <AssignmentDoneMessage>No assignments available.</AssignmentDoneMessage>
                )}
            </Content>
        </AssignmentsContainer>
    );
}

export default StudnetAssignments; 