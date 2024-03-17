import React, { useState } from "react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setCity, setError, setLoading }) => {
    const [cityInput, setCityInput] = useState("");

    const handleChange = (e: { target: { value: string } }) => {
        setCityInput(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (cityInput) {
            setCity(cityInput);
            localStorage.setItem("city", cityInput);
            setCityInput("");
            setError(false)
            setLoading(true)
        }
    };

    const handleKeyPress = (e: any) => {
        if (e.key == "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <InputGroup size={"lg"}>
            <Input
                borderRadius={"3xl"}
                _focus={{
                    borderColor: "blue.500",
                    borderWidth: "1px",
                    boxShadow: "none",
                }}
                placeholder="Search for city"
                value={cityInput}
                onChange={handleChange}
                name="city"
                pl={5}
                onKeyDown={handleKeyPress}
            />
            <InputRightAddon
                borderRightRadius={"3xl"}
                cursor={"pointer"}
                onClick={handleSubmit}
                px={5}
            >
                <SearchIcon />
            </InputRightAddon>
        </InputGroup>
    );
};

export default SearchBar;
