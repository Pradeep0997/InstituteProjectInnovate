import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    EditButton,
    ProfileContainer,
    Content,
    ProfileHeader,
    SidebarContainer,
    ProfileDetails,
    ProfileLabel,
    ProfileInfo

} from '../../styles/SettingsProfileStyles';

const TeacherProfileSection = () => {

     const teacherInfo = {
            name: 'Bhavani mam',
            email: 'vani@gmail.com',
            phone: '543432',
            address: 'Andhra Pradesh',
            qualification: 'MSC '
        }
    

    return(
        <ProfileContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile Details</ProfileHeader>
                <ProfileDetails>
                    <ProfileLabel>Name: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.name}</ProfileInfo>

                    <ProfileLabel>Email: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.email}</ProfileInfo>

                    <ProfileLabel>Phone: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

                    <ProfileLabel>Address: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.address}</ProfileInfo>

                    <ProfileLabel>Qualification: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>

                </ProfileDetails>

                <EditButton>Edit Profile</EditButton>
            </Content>
        </ProfileContainer>
    )
};
export default TeacherProfileSection;