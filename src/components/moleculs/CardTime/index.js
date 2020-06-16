import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';

const CardTime = ({jam, hari}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>{jam}</Text>
      <Text style={styles.contentText}>{hari}</Text>
    </View>
  );
};

export default CardTime;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 2,
    paddingTop: 8,
    paddingBottom: 18,
  },
  contentText: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
    textAlign: 'center',
    padding: 4,
  },
});
