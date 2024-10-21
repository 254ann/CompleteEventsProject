import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (event.current) onSearch(event.current.value);
                }}
            >
                <InputGroup>
                    <InputRightElement>
                        <BsSearch />
                    </InputRightElement>
                    <Input
                        borderRadius={20}
                        placeholder="search events..."
                        variant="fille"
                    />
                </InputGroup>
            </form>
        </>
    );
};

export default SearchInput;
