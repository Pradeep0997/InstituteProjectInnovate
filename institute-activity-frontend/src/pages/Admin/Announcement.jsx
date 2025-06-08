import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import{
    AnnouncementContainer,
    Content,
    Title,
    AnnouncementForm,
    FormGroup,
    Label,
    TextArea,
    Button,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementContent
} from '../../styles/AnnouncementStyles';
const Announcement = () => {

    const [announcements, setAnnouncements] = useState([]);
    const [announcement, setAnnouncement] = useState('');

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
            setAnnouncements(response.data.announcements);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:4000/api/v1/announcements', { announcement: announcement });
            console.log('Announcement added:', response.data.announcement);
            // Update the state with the new announcement
           setAnnouncements([...announcements, response.data.announcement]);
            setAnnouncement('');
        }catch (error) {
            console.error('Error adding announcement:', error);
        }   
    };

    return(
        <AnnouncementContainer>
            <Sidebar />
            <Content>
                <Title>Announcements</Title>
                <AnnouncementForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='announcement'>Announcement</Label>
                        <TextArea
                            id='announcement'
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            placeholder='Enter your announcement here...'
                            required
                            rows={4}
                            cols={50}
                        />
                    </FormGroup>
                    <Button type='submit'>Send Announcement</Button>
                </AnnouncementForm>

                {/* To display Announcements */}
                <h2>Announcement</h2>
                <AnnouncementList>
                    {announcements.map((item) => (
                        <AnnouncementItem key={item._id}>
                            <AnnouncementContent>
                                <h3>{item.announcement}</h3>
                            </AnnouncementContent>
                        </AnnouncementItem>
                    ))}
                </AnnouncementList>
            </Content>
        </AnnouncementContainer>
    )
};

export default Announcement;