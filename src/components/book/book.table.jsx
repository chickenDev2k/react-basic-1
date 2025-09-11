import { Space, Table, Tag } from "antd";
import { BookForm } from "./book.form.jsx";
import { useEffect, useState } from "react";
import { getAllBookAPI } from "../../services/book.api.service.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const BookTable = (props) => {
    const bookData = props.bookData;
    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <a>
                        <EditOutlined style={{ color: "orange" }} />
                    </a>
                    <a>
                        <DeleteOutlined style={{ color: "red" }} />
                    </a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <BookForm />
            <Table columns={columns} dataSource={bookData} />
        </div>
    );
};
export default BookTable;
