import { useEffect, useState } from "react";
import { Drawer, Input } from "antd";

const ViewUserDetail = ({ userDetail, setUserDetail, isShowDetail, setIsShowDetail }) => {
    useEffect(() => {}, [userDetail]);
    const onClose = () => {
        setIsShowDetail(false);
        setUserDetail(null);
    };
    console.log(isShowDetail);
    console.log(">>>>>><<<<<<<");
    console.log(userDetail);
    return (
        <>
            <Drawer title="Chi tiet User" closable={true} onClose={onClose} open={isShowDetail}>
                {userDetail ? (
                    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                        <p>Id: {userDetail._id}</p>
                        <p>FullName: {userDetail.fullName}</p>
                        <p>Email: {userDetail.email}</p>
                        <p>Phone: {userDetail.phone}</p>
                    </div>
                ) : (
                    <></>
                )}
            </Drawer>
        </>
    );
};

export default ViewUserDetail;
