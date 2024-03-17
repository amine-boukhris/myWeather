import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface WeatherInfoProps {
    humidity: string;
    wind: string;
    pressure: string;
}

const WeatherInfo = ({ humidity, wind, pressure }: WeatherInfoProps) => {
    const responsiveFontSizes = [18, 20, 22];
    const responsivePaddingX = [6, 14, 16];
    const responsivePaddingY = [4, 6, 8];
    return (
        <Card
            px={responsivePaddingX}
            py={responsivePaddingY}
            fontWeight={600}
            fontSize={responsiveFontSizes}
            boxShadow={"lg"}
            variant={"elevated"}
            borderRadius={"2xl"}
        >
            <CardBody as={Flex} flexDir={"column"} gap={5}>
                <Flex justify={"space-between"}>
                    <Text>Humidity</Text>
                    <Text>{humidity}%</Text>
                </Flex>
                <Flex justify={"space-between"}>
                    <Text>Wind speed</Text>
                    <Text>{wind} km/h</Text>
                </Flex>
                <Flex justify={"space-between"}>
                    <Text>Pressure</Text>
                    <Text>{pressure} hPa</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default WeatherInfo;
