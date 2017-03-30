import Exponent from 'exponent';
import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Red Note Albums" style={{ fontsize: 14 }} />
              <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
