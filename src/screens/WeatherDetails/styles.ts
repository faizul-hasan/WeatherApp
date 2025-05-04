import {StyleSheet} from 'react-native';

export const WeatherDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
  },
  condition: {
    fontSize: 22,
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  // container: {flex: 1, alignItems: 'center', padding: 20},
  // city: {fontSize: 28, fontWeight: 'bold'},
  // temp: {fontSize: 24, marginVertical: 10},
  desc: {fontSize: 18, marginVertical: 10, textTransform: 'capitalize'},
  conditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  conditionText: {
    fontSize: 22,
    marginLeft: 10,
  },
});
