import { Button, Form, Input, Modal } from "antd";

const BookForm = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Book table</h2>
                <Button type="primary">Create a book</Button>
            </div>
            <Modal
                title="Basic Modal"
                closable={true}
                open={false}
                // onOk={handleOk}
                // onCancel={handleCancel}
            >
                <div>
                    <label htmlFor="">Title</label>
                    <Input />
                </div>
                <div>
                    <label htmlFor="">Author</label>
                    <Input />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <Input />
                </div>
                <div>
                    <label htmlFor="">Quantity</label>
                    <Input />
                </div>
                <div>
                    <label htmlFor="">Type</label>
                    <Input />
                </div>
                <div>
                    <p>Thumbnail Image</p>
                    <br />
                    <label
                        htmlFor="upload-thumbnail"
                        style={{
                            backgroundColor: "orange",
                            color: "black",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                        }}>
                        Upload
                    </label>

                    <Input type="file" id="upload-thumbnail" style={{ display: "none" }} />
                </div>
            </Modal>
        </div>
    );
};

export { BookForm };
