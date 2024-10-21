import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"Nav" "main"`,
                    md: `"Nav Nav" "sidebar main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    md: "200px 1fr",
                }}
            >
                <GridItem
                    area="Nav"
                    bg="blueviolet"
                    borderRadius={10}
                    marginBottom={2}
                >
                    <Navbar />
                </GridItem>
                <Show above="md">
                    <GridItem area="sidebar" bg="gray">
                        <SideBar />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Outlet />
                </GridItem>
            </Grid>
        </>
    );
};

export default Layout;
