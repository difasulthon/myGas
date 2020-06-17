import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';
import {Gap} from '../../atoms';

const TotalTagihanText = ({total}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.totalText}>Total Tagihan</Text>
        <Gap height={5} />
        <Text style={styles.price}>Rp {total}</Text>
      </View>
    </View>
  );
};

export default TotalTagihanText;

const styles = StyleSheet.create({
  totalText: {
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.text.primary,
  },
  price: {
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.primary,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
