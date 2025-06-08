import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamForm,
    FormLabel,
    FormInput,
    AddButton
} from '../../styles/ExamStyles';

const CheckExamSection = () => {

     const [examData, setExamData] = useState([]);
    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [className, setClassName] = useState('');
    const [marks, setMarks] = useState('');

    useEffect(() => {
        fetchExamData();
    }, []);

    const fetchExamData = async () => {
        try{
            const response = await axios.get('http://localhost:4000/api/v1/exams/getall');
            if(Array.isArray(response.data.exams)){
                setExamData(response.data.exams || []);
            }else{
                console.error('Data is not an array:', response.data);
            }
        }catch(error) {
            console.error('Error fetching exam data:', error);
        }

    };

    const handleAddExam = async (e) => {
        e.preventDefault();
         const marksInt = parseInt(marks);
        if (isNaN(marksInt)) {
            alert('Please enter valid numeric marks');
            return;
        }
        const newExam = {name, registrationNumber, className, marks: marksInt};
        try {
            const response = await axios.post('http://localhost:4000/api/v1/exams', newExam);
            
            if(typeof response.data.exam === 'object') {
                setExamData([...examData, response.data.exam]);
                setName('');
                setRegistrationNumber('');
                setClassName('');
                setMarks('');
            }else{
                console.error('Response data is not an object:', response.data);
            }
            
        } catch (error) {
            console.error('Error adding exam:', error);
        }
    };

    //Check
    const calculateTotalMarks=()=>{
        let total=0;
        for(let i=0;i<examData.length;i++){
            total +=examData[i].marks;
        }
        return total;
    }
    return(
       <ExamContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                    <ExamHeader>Exam Details</ExamHeader>
                            <ExamForm onSubmit={handleAddExam}>
                                <FormLabel>Name: </FormLabel>
                                <FormInput type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <FormLabel>Registration Number: </FormLabel>
                                <FormInput type='text' 
                                    required
                                    value={registrationNumber}
                                    onChange={(e) => setRegistrationNumber(e.target.value)}
            
                                />
                                <FormLabel>Class: </FormLabel>
                                <FormInput type='text' 
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                    required
                                />
                                <FormLabel>Marks: </FormLabel>
                                <FormInput type='text'
                                    value={marks}
                                    onChange={(e) => setMarks(e.target.value)}
                                    required/>
                                <AddButton type='submit'>Add Exam</AddButton>
                            
                            </ExamForm>
                            <h2>Total Marks: {calculateTotalMarks()} </h2>
                            <h3>Exam Details: </h3>
                            <ul>
            
                            </ul>
            
                </Content>
       </ExamContainer>

    )
};
export default CheckExamSection;