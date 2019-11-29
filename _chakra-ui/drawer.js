import React from "react";
import ReactDOM from "react-dom"

import { theme } from "@chakra-ui/core";
import {ThemeProvider, Input, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerBody, DrawerFooter, DrawerHeader, useDisclosure} from "@chakra-ui/core";


function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
                Open
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button color="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}


// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};

ReactDOM.render(<ThemeProvider theme={customTheme}><App /></ThemeProvider>
    , mountNode)