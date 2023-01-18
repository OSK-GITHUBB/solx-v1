import React from "react";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
    return <div>
        <h1 className="white center">404 page not found</h1>
        <Link className="text center" to="/">Return to the home page</Link>
    </div>
}

export default Page404;