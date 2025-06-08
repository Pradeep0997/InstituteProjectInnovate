import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
   ProfileContainer,
   SidebarContainer,
   Content,
   ProfileHeader,
   ProfileInfo,
   ProfileDetail,
   Label,
   Value
} from "../../styles/SettingsProfileStyles";

const ProfileSection = () => {

    const studentProfile = {
        name: 'Pradeep Reddy',
        age: 20,
        grade: 'B.Tech',
        school: 'RGUKT RKV',
        email: 'pradeep@gmail.com'
    }

    return(
        <ProfileContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile</ProfileHeader>
                <ProfileInfo>
                    <ProfileDetail>
                        <Label>Name: </Label>
                        <Value>{studentProfile.name}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Age: </Label>
                        <Value>{studentProfile.age}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Grade: </Label>
                        <Value>{studentProfile.grade}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Institute: </Label>
                        <Value>{studentProfile.school}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Email: </Label>
                        <Value>{studentProfile.email}</Value>
                    </ProfileDetail>
                </ProfileInfo>
            </Content>
        </ProfileContainer>
    );
}

export default ProfileSection; 