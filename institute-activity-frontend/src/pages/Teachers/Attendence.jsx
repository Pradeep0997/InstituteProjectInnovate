import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    AttendanceContainer,
    Content,
    AttendanceContent,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    StudentName,
    CheckboxLabel,
    Divider,
    SubmitButton
} from '../../styles/AttendanceStyles';

const CheckAttendenceSection = () => {

    const [attendanceData, setAttendanceData] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/students/getall');
            setStudents(response.data.students);
            initializeAttendanceData(response.data.students);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
        }
    };

    const initializeAttendanceData = (students) => {
        const initialAttendanceData = students.map(student => ({
            id: student._id,
            name: student.name,
            status: 'Present',
        }));
        setAttendanceData(initialAttendanceData);
    };

    const handleStatusChange = (id, status) => {
        const updatedData = attendanceData.map(student => {
            if (student.id === id) {
                return { ...student, status };
            }
            return student;
        });
        setAttendanceData(updatedData);
        console.log('Updated attendance data:', updatedData);
    };

    const handleSubmit = async () => {
        try {
            const formattedData = attendanceData.map(({ id, name, status }) => ({
                studentId: id,
                name,
                status
            }));
            const response = await axios.post('http://localhost:4000/api/v1/attendance', { attendance: formattedData });
            console.log('Attendance submitted:', response.data);
        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };

    return (
        <AttendanceContainer>
            <Sidebar />
            <Content>
                <AttendanceContent>
                    <AttendanceHeader>Attendance</AttendanceHeader>
                    <AttendanceList>
                        {students.map((student, index) => (
                            <React.Fragment key={student._id}>
                                <AttendanceItem>
                                    <StudentName>{student.name}</StudentName>

                                    <CheckboxLabel>
                                        <input
                                            type="checkbox"
                                            checked={attendanceData[index]?.status === 'Present'}
                                            onChange={() => handleStatusChange(student._id, 'Present')}
                                        />
                                        Present
                                    </CheckboxLabel>

                                    <CheckboxLabel>
                                        <input
                                            type="checkbox"
                                            checked={attendanceData[index]?.status === 'Absent'}
                                            onChange={() => handleStatusChange(student._id, 'Absent')}
                                        />
                                        Absent
                                    </CheckboxLabel>

                                    <CheckboxLabel>
                                        <input
                                            type="checkbox"
                                            checked={attendanceData[index]?.status === 'Absent with apology'}
                                            onChange={() => handleStatusChange(student._id, 'Absent with apology')}
                                        />
                                        Absent with apology
                                    </CheckboxLabel>
                                </AttendanceItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </AttendanceList>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                </AttendanceContent>
            </Content>
        </AttendanceContainer>
    );
};

export default CheckAttendenceSection;
