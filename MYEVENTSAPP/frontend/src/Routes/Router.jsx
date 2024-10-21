import { createBrowserRouter } from "react-router-dom";
import RegisterComponent from "../pages/Auth/Register.component";
import LoginComponent from "../pages/Auth/Login.component";
import EventCreateComponent from "../components/Events/EventCreate.component";
import EventListComponent from "../components/Events/EventList.component";
import EventEditComponent from "../components/Events/EventEdit.component";
import Layout from "../layouts/Layout";
import HomeComponent from "../pages/Home.component";
import MyTickets from "../components/tickets/MyTickets";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomeComponent /> },
            { path: "/events/new", element: <EventCreateComponent /> },
            { path: "/events", element: <EventListComponent /> },
            { path: "/events/user/tickets", element: <MyTickets /> },
            { path: "/events/:id/edit", element: <EventEditComponent /> },
        ],
    },
    { path: "/register", element: <RegisterComponent /> },
    { path: "/login", element: <LoginComponent /> },
]);

export default router;
