import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title, type, photo, desc}) => {
  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon={'back-light'} onPress={onPress} />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textTransform: 'capitalize',
  }),
});
