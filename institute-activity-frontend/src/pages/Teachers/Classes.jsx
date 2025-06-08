import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    ClassContainer,
    SidebarContainer,
    Content,
    ClassHeader,
    ClassList,
    ClassItem,
    ClassesContent,
    AddClassForm,
    AddClassInput,
    AddClassButton

} from '../../styles/ClassesStyles';

const CheckClassSection = () => {

    const [newClassName, setNewClassName] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/class/getall');
            if(response.data && Array.isArray(response.data.classes)) {
            setClasses(response.data.classes || []);
            }else{
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching classes:", error);
        }
    };

    const handleAddClass = async (e) => {
        e.preventDefault();
        if(newClassName.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:4000/api/v1/class', { grade: newClassName });
                console.log("Class added successfully:", response.data);
                setClasses(prevClasses => {
                    if(!Array.isArray(prevClasses)) {
                        return [...prevClasses, response.data];
                    }else{
                        console.log('Error adding class: Invalid class data format', prevClasses);
                        return [];
                    }
                   
                });
                setNewClassName('');
            } catch (error) {
                console.error("Error adding class:", error);
            }
        }
    };

    return(
        <ClassContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ClassesContent>
                                <ClassHeader>Classes</ClassHeader>
                                <AddClassForm onSubmit={handleAddClass}>
                                    <AddClassInput type="text"
                                        placeholder="Enter Class Name"
                                        value={newClassName}
                                        onChange={(e) => setNewClassName(e.target.value)} 
                                    />
                                    <AddClassButton type='submit'>Add Class</AddClassButton>
                                </AddClassForm>
                                <ClassList>
                                    {Array.isArray(classes) && classes.map((classItem, index) => (
                                        <ClassItem key={index}>
                                            {classItem.grade}
                                        </ClassItem>
                                    ))};
                                </ClassList>
                            </ClassesContent>
                        </Content>
        </ClassContainer>
    )
};
export default CheckClassSection;