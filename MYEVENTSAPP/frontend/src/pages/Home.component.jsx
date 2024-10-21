import { Link } from "react-router-dom";

function HomeComponent() {
    return (
        <div className="home">
            <h1 color="blue">Welcome to My Events App</h1>
            <p>Dscover and attend events in your area</p>
            <p>
                Get started by creating an{" "}
                <Link to="/register" className="account">
                    account
                </Link>{" "}
                or <Link to="login">login</Link>.
            </p>
        </div>
    );
}

export default HomeComponent;
