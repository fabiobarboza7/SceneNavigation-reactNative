import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

// importar o componente barra de navegação
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if (route.id === 'a') {
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'b') {
            return (<CenaClientes navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('sceneNavigation', () => App);
