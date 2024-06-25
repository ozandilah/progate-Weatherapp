import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type PropsWeatherInfo = {
  searchWeather: string;
  temp: string;
  visibility: string;
  wind_speed: string;
};

const WeatherInfo = ({
  searchWeather,
  temp,
  visibility,
  wind_speed,
}: PropsWeatherInfo) => {
  const image = "https://openweathermap.org/img/w/04d.png";
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>The weather of {searchWeather}</Text>
        <Text style={styles.temp}>{temp} C</Text>
      </View>
      <View style={styles.maincontent}>
        <Image source={{ uri: image }} style={styles.ic} />
        <Text style={styles.title}>Clouds</Text>
      </View>
      <View style={styles.maincontent}>
        <Text style={styles.sub}>overcast clouds</Text>
        <View style={styles.rowContent}>
          <Text style={styles.title}>Visibility :</Text>
          <Text style={styles.sub}>{visibility} km</Text>
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.title}>Wind Speed :</Text>
          <Text style={styles.sub}>{wind_speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  main: {
    gap: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  temp: {
    fontWeight: "700",
    fontSize: 80,
    color: "#404040",
  },
  maincontent: { alignItems: "center" },
  rowContent: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  ic: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  sub: {
    fontSize: 16,
  },
});

export default WeatherInfo;
