import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h2> There is nothing here. </h2>
            <Link to="/"
                style={{ color: "white" }}>
                Back To Home
            </Link>
        </>

    );

};

export default NotFound;