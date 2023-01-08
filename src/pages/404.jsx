import { Link } from "react-router-dom";

const Page404 = () => {
    return <div>
        <h1 className="white center">404 page not found</h1>
        <Link className="text center" to="/">Return to the home page</Link>
    </div>
}

export default Page404;