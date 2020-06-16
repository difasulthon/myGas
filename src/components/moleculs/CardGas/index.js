import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Icon3kg,
  Icon12kg,
  IconBright,
  IconMinusGas,
  IconAddGas,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {TextInput} from 'react-native-gesture-handler';

const CardGas = ({icon, nama, stok}) => {
  const Icon = () => {
    if (icon === '3kg') {
      return <Icon3kg />;
    }
    if (icon === '12kg') {
      return <Icon12kg />;
    }
    if (icon === 'bright') {
      return <IconBright />;
    }
    return <Icon3kg />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.borderIcon}>
        <Icon />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.stok}>Stok: {stok}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <IconMinusGas />
        <TextInput style={styles.input} />
        <IconAddGas />
      </View>
    </View>
  );
};

export default CardGas;

const styles = StyleSheet.create({
  borderIcon: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  textWrapper: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  nama: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    fontSize: 14,
  },
  stok: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
  },
  input: {
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 2,
    paddingBottom: 5,
    width: 40,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
  },
});
