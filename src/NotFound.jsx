import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooops...!</h2>
            <p>That page cannot be found</p>

            <Link to="/">Take me home</Link>
        </div>
    );
}

export default NotFound;