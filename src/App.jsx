import "./components/todo/todo.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";

const App = () => {
    const { setUser } = useContext(AuthContext);
    const fetchUserInfor = async () => {
        const res = await getAccountAPI();
        if (res.data) {
            //success
            console.log(">>>Check user data", res.data);
            setUser(res.data.user);
        }
    };
    useEffect(() => {
        fetchUserInfor();
    }, []);
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default App;
