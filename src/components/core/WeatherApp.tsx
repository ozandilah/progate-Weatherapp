import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import WeatherInfo from "../weatherInfo";
import WeatherSearch from "../weatherSearch";
import axios from "axios";
import { apiKey, baseUrl } from "const";

const WeatherApp = () => {
  const [searchName, setSearchName] = useState("");
  const [temp, setTemp] = useState("");
  const [visibility, setVisibility] = useState("");
  const [wind_speed, setWindSpeed] = useState("");

  const searchWeather = (location: string) => {
    axios
      .get(`${baseUrl}?q=${location}&appid=${apiKey}&units=metric`)
      .then((response) => {
        const data = response.data;
        setSearchName(data.name);
        setTemp(data.main.temp);
        data.visibility /= 1000;
        setVisibility(data.visibility.toFixed(2));
        setWindSpeed(data.wind.speed);
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo
        searchWeather={searchName}
        temp={temp}
        visibility={visibility}
        wind_speed={wind_speed}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default WeatherApp;
