import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import {
    Box,
    Card,
    CardBody,
    Container,
    Flex,
    Spacer,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Skeleton,
} from "@chakra-ui/react";
import Temprature from "./components/Temprature";
import WeatherInfo from "./components/WeatherInfo";
import { fetchCityData } from "./utils";
import { CloseIcon } from "@chakra-ui/icons";

function App() {
    const [city, setCity] = useState<string>(
        localStorage.getItem("city") || ""
    );
    const [prevCity, setPrevCity] = useState<string>(city);
    const [temprature, setTemprature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pressure, setPressure] = useState("");
    const [wind, setWind] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weatherState, setWeatherState] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchCityData(city);
            if (data.statusCode == "200") {
                setTemprature(data.temprature!);
                setWind(data.wind!);
                setHumidity(data.humidity!);
                setPressure(data.pressure!);
                setWeatherState(data.weatherState!)
                setPrevCity(city);
                setLoading(false);
            } else {
                setError(true);
                setCity(prevCity);
                localStorage.setItem("city", prevCity);
                setLoading(false);
            }
        };
        if (city) {
            fetchData();
        }
    }, [city]);

    return (
        <Container
            as={Flex}
            flexDirection={"column"}
            py={4}
            height={"100vh"}
            gap={5}
            variant={"outline"}
        >
            <SearchBar
                setCity={setCity}
                setError={setError}
                setLoading={setLoading}
            />
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <Box>
                    <AlertTitle>Error while getting weather data.</AlertTitle>
                    <AlertDescription>Couldn't find city data</AlertDescription>
                    </Box>
                    <Spacer />
                    <CloseIcon onClick={() => setError(false)} cursor={"pointer"} />
                </Alert>
            )}
            {city && (
                <Box px={5}>
                    <Text fontSize={18} color="gray.500">
                        Current City:{" "}
                    </Text>
                    <Text fontSize={22} color="gray.800">
                        {city}
                    </Text>
                </Box>
            )}
            {city ? (
                <>
                    <Spacer />
                    <Skeleton isLoaded={!loading} borderRadius={"20px"}>
                        <Temprature temprature={temprature} weatherState={weatherState} />
                    </Skeleton>
                    <Skeleton isLoaded={!loading} borderRadius={"20px"}>
                        <WeatherInfo
                            humidity={humidity}
                            wind={wind}
                            pressure={pressure}
                        />
                    </Skeleton>
                </>
            ) : (
                <Card>
                    <CardBody>
                        <Text textAlign={"center"}>
                            Search for a city to show weather info
                        </Text>
                    </CardBody>
                </Card>
            )}
        </Container>
    );
}

export default App;
