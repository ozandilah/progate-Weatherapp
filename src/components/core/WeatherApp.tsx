import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import WeatherInfo from "../weatherInfo";
import WeatherSearch from "../weatherSearch";
import axios from "axios";
import { apiKey, baseUrl } from "const";

const WeatherApp = () => {
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [temp, setTemp] = useState("");
  const [visibility, setVisibility] = useState("");
  const [wind_speed, setWindSpeed] = useState("");

  const searchWeather = (location: string) => {
    setLoading(true);
    setStatus("loading");
    axios
      .get(`${baseUrl}?q=${location}&appid=${apiKey}&units=metric`)
      .then((response) => {
        const data = response.data;
        setSearchName(data.name);
        setTemp(data.main.temp);
        data.visibility /= 1000;
        setVisibility(data.visibility.toFixed(2));
        setWindSpeed(data.wind.speed);
        console.log(data);
        setLoading(false);
        setStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setStatus("error");
      });
  };
  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {/* kondisi ternary */}
      {status === "loading" && (
        <ActivityIndicator animating={true} size="large" />
      )}
      {status === "error" && (
        <Text style={styles.text}>
          Error: Silakan masukkan nama kota yang benar.
        </Text>
      )}
      {status === "success" && (
        <WeatherInfo
          searchWeather={searchName}
          temp={temp}
          visibility={visibility}
          wind_speed={wind_speed}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: "red",
    fontWeight: "700",
    fontSize: 16,
  },
});
export default WeatherApp;
