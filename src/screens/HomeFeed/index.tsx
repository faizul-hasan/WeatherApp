import {navigate} from 'navigation/rootNavigator';
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      navigate('WeatherDetails', {city});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search Weather" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
