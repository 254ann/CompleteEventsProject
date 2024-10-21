import { NavLink } from "react-router-dom";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import AllService from "../services/allServices";
import LogoutComponent from "../pages/Auth/Logout.component";
const Navbar = () => {
    const { isAuthenticated } = AllService();

    const onSearch = () => {};
    return (
        <>
            <HStack justifyContent="space-between" padding={2}>
                <Image
                    src={logo}
                    boxSize="40px"
                    borderRadius="20px"
                    marginTop="2px"
                    marginBottom="2px"
                />

                <NavLink className="register" to="/">
                    Home
                </NavLink>
                {/* <SearchInput onSearch={onSearch} /> */}

                <HStack justifyContent="space-between">
                    {isAuthenticated ? (
                        <LogoutComponent />
                    ) : (
                        <NavLink className="login" to="/login">
                            login
                        </NavLink>
                    )}
                </HStack>
            </HStack>
        </>
    );
};

export default Navbar;
