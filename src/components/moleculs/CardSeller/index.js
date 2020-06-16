import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {IconNext} from '../../../assets';
import {Gap} from '../../atoms';

const CradSeller = ({onPress, title, desc, total, stok, pesanan}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} />
      <Text style={styles.desc}>{desc}</Text>
      <Gap height={12} />
      <View style={styles.next}>
        {stok && <Text style={styles.desc}>{total} Gas</Text>}
        {pesanan && <Text style={styles.desc}>{total} Pesanan</Text>}
        <IconNext />
      </View>
    </TouchableOpacity>
  );
};

export default CradSeller;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 2,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: colors.white,
  },
  next: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  title: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
  },
});
