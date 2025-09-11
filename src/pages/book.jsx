import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { getAllBookAPI } from "../services/book.api.service";

const BookPage = () => {
    const [current, setCurrent] = useState(0);
    const [pageSize, setPageSize] = useState(0);
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        fetchBooks(current, pageSize);
    }, []);

    const fetchBooks = async (current, pageSize) => {
        const res = await getAllBookAPI(current, pageSize);
        const data = res.map((e) => {
            return {
                id: e._id,
                title: e.mainText,
                quantity: e.quantity,
                price: e.price,
                author: e.author,
            };
        });
        setBookData(data);
    };
    return (
        <div>
            <BookTable bookData={bookData} />
        </div>
    );
};
export default BookPage;
