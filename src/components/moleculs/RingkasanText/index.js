import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';
import {Gap} from '../../atoms';

const RingkasanText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan</Text>
      <Gap height={16} />
      <View style={styles.textWrapper}>
        <Text style={styles.desc}>10 Gas 3Kg</Text>
        <Text style={styles.desc}>Rp 150.000</Text>
      </View>
      <Gap height={10} />
      <View style={styles.textWrapper}>
        <Text style={styles.desc}>2 Gas 12Kg</Text>
        <Text style={styles.desc}>Rp 150.000</Text>
      </View>
      <Gap height={10} />
      <View style={styles.textWrapper}>
        <Text style={styles.desc}>2 Bright Gas</Text>
        <Text style={styles.desc}>Rp 150.000</Text>
      </View>
    </View>
  );
};

export default RingkasanText;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
