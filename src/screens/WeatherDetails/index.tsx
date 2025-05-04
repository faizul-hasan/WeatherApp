import {goBack} from 'navigation/rootNavigator';
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button, Image} from 'react-native';
import {WeatherDetailsStyles} from './styles';

const API_KEY = 'a08f696ff77a41d38f194308250405';

const WeatherDetailsScreen = ({route}: any) => {
  const {city} = route?.params;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
        const res = await fetch(URL);
        const final = await res.json();
        setWeather(final);
      } catch (error: any) {
        console.error(error);
        setError(error?.message ?? '');
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={WeatherDetailsStyles.center}
        size="large"
        color="#0000ff"
      />
    );
  }

  if (error) {
    return (
      <View style={WeatherDetailsStyles.center}>
        <Text>{error}</Text>
        <Button title="Go Back" onPress={() => goBack()} />
      </View>
    );
  }

  return (
    <View style={WeatherDetailsStyles.container}>
      <Text style={WeatherDetailsStyles.city}>{weather?.location?.name}</Text>
      <Text style={WeatherDetailsStyles.temp}>
        {weather?.current?.temp_c}°C
      </Text>
      <Image
        source={{
          uri: weather?.current?.condition?.icon,
        }}
        style={{width: 50, height: 50}}
      />
      <View style={WeatherDetailsStyles.conditionContainer}>
        <Image
          style={WeatherDetailsStyles.icon}
          source={{
            uri: `https:${weather?.current?.condition?.icon}`,
          }}
        />
      </View>
      <Text style={WeatherDetailsStyles.conditionText}>
        {weather?.current?.condition?.text}
      </Text>
      <Text style={{fontSize: 22, color: 'blue', marginBottom: 15}}>
        Wind Speed: {weather?.current?.wind_mph} m/s
      </Text>
      <Button title="Back" onPress={() => goBack()} />
    </View>
  );
};

export default WeatherDetailsScreen;
