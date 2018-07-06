import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// importar o componente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao';


export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          // hidden // true if false need to set ={false}
          backgroundColor="#ccc"
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('sceneNavigation', () => App);
