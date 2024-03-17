import { Center, Heading, Icon } from "@chakra-ui/react";
import { FaCloud, FaSun } from "react-icons/fa";

interface TempratureProps {
    temprature: string
    weatherState: string
}

const Temprature = ({temprature, weatherState}: TempratureProps) => {
    const responsiveSize = ["4.5rem", "6rem", "7rem"]
    return (
        <Center gap={5}>
            <Icon as={weatherState == "Clear" ? FaSun : FaCloud} boxSize={responsiveSize} />
            <Heading fontWeight={600} fontSize={responsiveSize} userSelect={"none"}>
                {temprature}&deg;C
            </Heading>
        </Center>
    );
};

export default Temprature;
