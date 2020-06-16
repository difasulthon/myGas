import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';

const Card = ({nama, stok, photo, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.stok}>{stok} Gas</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 140,
    borderRadius: 10,
    elevation: 2,
    margin: 10,
    backgroundColor: colors.white,
  },
  photo: {
    width: 130,
    height: 82,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  nama: {
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
    fontSize: 12,
    marginHorizontal: 6,
    marginTop: 6,
  },
  stok: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 12,
    marginLeft: 6,
  },
});
