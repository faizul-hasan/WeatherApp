import {navigate} from 'navigation/rootNavigator';
import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import {HomeStyles} from './styles';
import screens from 'constant';

const HomeScreen = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      navigate(screens.WeatherDetails, {city});
    }
  };

  return (
    <View style={HomeStyles.container}>
      <View
        style={{
          marginBottom: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={HomeStyles.icon}
          source={{
            uri: `https://cdn.jim-nielsen.com/ios/1024/weather-2019-02-07.png?rf=1024`,
          }}
        />
      </View>
      <TextInput
        style={HomeStyles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search Weather" onPress={handleSearch} />
    </View>
  );
};

export default HomeScreen;
