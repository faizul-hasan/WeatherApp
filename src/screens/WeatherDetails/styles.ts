import {StyleSheet} from 'react-native';

export const WeatherDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  city: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'red',
  },
  temp: {
    fontSize: 48,
  },
  condition: {
    fontSize: 22,
  },
  icon: {
    width: 100,
    height: 100,
  },
  conditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    right: 14,
  },
  conditionText: {
    fontSize: 22,
    color: 'red',
    marginBottom: 12,
  },
});
