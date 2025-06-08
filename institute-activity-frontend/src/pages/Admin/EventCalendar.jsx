import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    EventCalendarContainer,
    Content,
    CalendarContainer,
    Events,
    Event,
    AddEventForm,
    EventInput,
    AddEventButton,
    ErrorText
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
    
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/events/getall');
            const fetchedEvents = response.data?.events;

            if (Array.isArray(fetchedEvents)) {
                setEvents(fetchedEvents);
            } else {
                setEvents([]);
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
            setEvents([]); // Ensure fallback to empty array
        }
    };

    const addEvent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/events', { title: newEvent });
            if (response.data?.event) {
                setEvents([...events, response.data.event]);
                setNewEvent('');
                setError('');
            } else {
                setError('Unexpected response while adding event.');
            }
        } catch (error) {
            console.error('Error adding event:', error);
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred while adding the event.');
            }
        }
    };

    return (
        <EventCalendarContainer>
            <Sidebar />
            <Content>
                <h1>Events and Calendar</h1>
                <div>Current Time: {/* You can insert a dynamic clock here later */}</div>

                <CalendarContainer>
                    Calendar
                </CalendarContainer>

                <AddEventForm onSubmit={addEvent}>
                    <h2>Add New Event </h2>
                    &nbsp; &nbsp;
                    <EventInput
                        type='text'
                        placeholder='Enter event'
                        value={newEvent}
                        onChange={(e) => setNewEvent(e.target.value)}
                    />
                    <AddEventButton type='submit'>Add Event</AddEventButton>

                    {error && <ErrorText>{error}</ErrorText>}
                </AddEventForm>

                <Events>
                    <h2>Events</h2>
                    {Array.isArray(events) && events.length > 0 ? (
                        events.map((event, index) => (
                            <Event key={index}>
                                <h3>{event.event}</h3>
                            </Event>
                        ))
                    ) : (
                        <p>No events available.</p>
                    )}
                </Events>
            </Content>
        </EventCalendarContainer>
    );
};

export default EventCalendar;
