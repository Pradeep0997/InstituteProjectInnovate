import React, {useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
   LibraryContainer,
   SidebarContainer,
   Content,
   LibraryHeader,
   BookList,
   BookItem,
   BookTitle,
   BorrowButton
} from "../../styles/LibraryStyles";

const LibrarySection = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks();
    }, []);
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/library/getall');
            setBooks(response.data.books);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    const handleBorrowBook = async (bookId) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/library/borrow/${bookId}`);
            if (response.data.success) {
                alert('Book borrowed successfully!');
                fetchBooks(); // Refresh the book list
            } else {     
                alert('Failed to borrow book: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error borrowing book:', error);
            alert('An error occurred while borrowing the book.');
        }
    }


    return(
        <LibraryContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <LibraryHeader>Library</LibraryHeader>
                {/* Here, below we will need to map through the books coming from database */}
                <BookList>
                    {books.map((book) => (
                        <BookItem key={book._id}>
                            <BookTitle>{book.title}</BookTitle>
                            <BorrowButton onClick={() => handleBorrowBook(book._id)}>
                                Borrow
                            </BorrowButton>
                        </BookItem>
                    ))}
                    {books.length === 0 && <p>No books available in the library.</p>}
                </BookList>
            </Content>

        </LibraryContainer>
    );
}

export default LibrarySection; 