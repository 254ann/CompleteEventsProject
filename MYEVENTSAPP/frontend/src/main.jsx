import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/userContext";
import "./index.css";
import React from "react";
import router from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>
        </ChakraProvider>
    </React.StrictMode>
);
