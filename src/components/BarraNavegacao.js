import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');
// importar o componente barra de navegação

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View style={styles.barraTitulo}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.pop();
            }}
          >
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.titulo}>FABIO APP</Text>
        </View>
      );
    }

    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>FABIO APP</Text>
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
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }

});
