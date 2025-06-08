import  {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    TeachersContainer,
    Content,
    TeachersContent,
    TeachersHeader,
    TeacherList,
    TeacherItem,
    AddTeacherButton,
    AddTeacherForm,
    AddTeacherInput


} from '../../styles/TeachersStyles';

const TeacherSection = () => {

    const [newTeacher, setNewTeacher] = useState({name: '', email: '', subject: ''});
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    },[]);

    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/teachers/getall');
            setTeachers(response.data.teachers || []);
        } catch (error) {
            console.error('Error fetching teachers:', error);
        }
    };

    const handleAddTeacher = async (e) => {
        e.preventDefault();
        if(newTeacher.name.trim() !== '' && newTeacher.email.trim() !== '' && newTeacher.subject.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:4000/api/v1/teachers', newTeacher);
                console.log('Teacher added:', response.data.teacher);
                setTeachers([...teachers, response.data.teacher]);
                setNewTeacher({name: '', email: '', subject: ''});
            } catch (error) {
                console.error('Error adding teacher:', error);
            }
        }
    };
    return(
        <TeachersContainer>
            <Sidebar />
        <Content>
                <TeachersContent>
                            <TeachersHeader>
                                <h3>Teachers</h3>
                                <AddTeacherForm onSubmit={handleAddTeacher}>
                                    <AddTeacherInput 
                                        type='text'
                                        placeholder='Enter Teacher Name'
                                        value={newTeacher.name}
                                        onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                                    />
                                    <AddTeacherInput 
                                        type='email' 
                                        placeholder='Enter Teacher Email'
                                        value={newTeacher.email}
                                        onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                                    />
                                    <AddTeacherInput 
                                        type='text' 
                                        placeholder='Enter Teacher Subject'
                                        value={newTeacher.subject}
                                        onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}    
                                    />
                                    <AddTeacherButton type='submit'>Add Teacher</AddTeacherButton>
                                </AddTeacherForm>
        
                                <TeacherList>
                                    {teachers.map((teacher) => (
                                        <TeacherItem key={teacher._id}>
                                            <h3>{teacher.name}</h3>
                                            <p>Email: {teacher.email}</p>
                                            <p>Subject: {teacher.subject}</p>
                                        </TeacherItem>
                                    ))}
                                </TeacherList>
                            </TeachersHeader>
                        </TeachersContent>
        
                    </Content>
        </TeachersContainer>
    )
};
export default TeacherSection;