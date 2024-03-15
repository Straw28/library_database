import React, {useState, useEffect} from "react";
import TopBar from './top_bar' ;
import '../styles/page_styles.css';

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        // Simulating fetching books
        fetchBooks();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchBooks = async () => {
        // Simulated delay to mimic fetching from an API
        setTimeout(() => {
            const newBooks = generateMockBooks(); // Generate mock books
            setBooks(prevBooks => [...prevBooks, ...newBooks]);
            setPage(prevPage => prevPage + 1);
      

            // Simulating reaching the end of data
            if (page >= 3) {
                setHasMore(false);
            }
        }, 1000);
    };

    const generateMockBooks = () => {
        // Generate mock books with random data
        const newBooks = [];
        for (let i = 0; i < 10; i++) {
            const book = {
                id: i,
                title: `Book ${i + 1}`,
                author: `Author ${i + 1}`,
                // Add more mock data as needed
            };
            newBooks.push(book);
        }
        return newBooks;
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }

        if (hasMore) {
            fetchBooks();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
      <TopBar/>
        <div className="book-container">
            <h1>Boston Public Library Catalog</h1>
            <div className="books-list">
                {books.map(book => (
                    <div key={book.id} className="book">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        {/* Add more book details as needed */}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Catalog;