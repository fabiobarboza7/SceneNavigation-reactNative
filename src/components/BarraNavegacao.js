import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// importar o componente barra de navegação

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View styles={styles.barraTitulo}>
          <Text>Atm Consult</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60
  },

  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }

});
