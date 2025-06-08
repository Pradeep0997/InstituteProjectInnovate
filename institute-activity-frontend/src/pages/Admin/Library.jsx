import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    LibraryContainer,
    Content,
    Title,
    AddBookForm,
    FormGroup,
    Label,
    Input,
    BookList,
    BookItem,
    BookTitle,
    BookAuthor,
    Button,
    ActionButton
} from '../../styles/LibraryStyles'

const Library = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try{
            const response = await axios.get('http://localhost:4000/api/v1/library/getall');
            setBooks(response.data.books);
        }catch(error) {
            console.error('Error fetching books:', error);
        }
    };

    const addBook = async (e) => {
        try{
            const response = await axios.post('http://localhost:4000/api/v1/library', {
                bookname: books.title,
                author: books.author
            });
            setBooks([...books, response.data.book]);

        }catch(error) {
            console.error('Error adding book:', error);
        }
    
    };

    const handleBookPick = async (bookId, studentId) => { 
        //Here we will handle the logic for picking a book
    };

    const handleBookReturn = async (bookId, studentId) => {
        //Here we will handle the logic for returning a book
    };

    return(
        <LibraryContainer>
            <Sidebar />
            <Content>
                <Title>Library Management</Title>
                <AddBookForm onSubmit = {(e) => {
                    e.preventDefault();
                    const book = {
                        id: Math.random().toString(36).substr(2, 9), // Generate a random ID
                        title: e.target.title.value,
                        author: e.target.author.value
                    };
                    addBook(book);
                    e.target.reset(); // Reset the form after submission
                }}
                
                >
                    <h2>Add New Book</h2>
                    <FormGroup>
                        <Label htmlFor='title'>Title</Label>
                        <Input type='text' id='title' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='author'>Author</Label>
                        <Input type='text' id='author' />
                    </FormGroup>
                    <Button type='submit'>Add Book</Button>
                </AddBookForm>

                <h2>Books</h2>
                <BookList>
                    {books.map((book) => (
                        <BookItem key={book._id}>
                            <BookTitle>{book.bookname}</BookTitle>
                            <BookAuthor>{book.author}</BookAuthor>
                            <ActionButton onClick={() => handleBookPick(book._id, 'student123')}>Pick</ActionButton>
                            <ActionButton onClick={() => handleBookReturn(book._id, 'student123')}>Return</ActionButton>
                        </BookItem>
                    ))}
                </BookList>
            </Content>
        </LibraryContainer>
    )
};

export default Library;