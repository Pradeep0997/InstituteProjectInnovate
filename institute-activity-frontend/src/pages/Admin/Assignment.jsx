import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    AssignmentItem,
    AddAssignmentForm,
    AddAssignmentInput,
    AddAssignmentTextArea,
    AddAssignmentButton
} from "../../styles/AssignmentsStyles";

const Assignment = () => {
    const [newAssignment, setNewAssignment] = useState({
        title: '',
        description: '',
        grade: '',
        deadline: ''
    });

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
            console.log("Assignments fetched:", response.data);
            setAssignments(response.data.assignments); // ✅ Adjust based on actual response
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    const handleAddAssignment = async (e) => {
        e.preventDefault();
        const { title, description, grade, deadline } = newAssignment;

        if (title.trim() && description.trim() && grade.trim() && deadline.trim()) {
            try {
                await axios.post('http://localhost:4000/api/v1/assignments', newAssignment);
                setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
                fetchAssignments(); // ✅ Refresh
            } catch (error) {
                console.error('Error adding assignment:', error);
            }
        }
    };

    return (
        <AssignmentsContainer>
            <Sidebar />
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>

                    <AddAssignmentForm onSubmit={handleAddAssignment}>
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter Assignment title'
                            value={newAssignment.title}
                            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                        />
                        <AddAssignmentTextArea
                            placeholder='Enter Assignment description'
                            value={newAssignment.description}
                            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                        />
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter assignment grade'
                            value={newAssignment.grade}
                            onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
                        />
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter assignment deadline'
                            value={newAssignment.deadline}
                            onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
                        />
                        <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
                    </AddAssignmentForm>

                    <AssignmentList>
                        {Array.isArray(assignments) && assignments.map((assignment) => (
                            <AssignmentItem key={assignment._id}>
                                <h3>{assignment.title}</h3>
                                <p>{assignment.description}</p>
                                <p>Grade: {assignment.grade}</p>
                                <p>Deadline: {new Date(assignment.deadline).toLocaleDateString()}</p>
                            </AssignmentItem>
                        ))}
                    </AssignmentList>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    );
};

export default Assignment;
