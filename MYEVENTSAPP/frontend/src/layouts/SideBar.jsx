import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SideBar = () => {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
        <Stack marginLeft={2}>
            <Link to="/events">Events</Link>
            <Link to="/events/user/tickets">My Tickets</Link>
            {isAdmin === "true" && <Link to="/events/new">Create Event</Link>}
        </Stack>
    );
};

export default SideBar;
