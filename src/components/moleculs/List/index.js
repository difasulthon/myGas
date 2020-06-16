import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {
  IconNext,
  IconEditProfile,
  IconHelp,
  IconPrivacy,
} from '../../../assets';

const List = ({photo, nama, desc, icon, type, onPress, gas, tanggal}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    if (icon === 'privacy') {
      return <IconPrivacy />;
    }
    return <IconEditProfile />;
  };

  if (type === 'account') {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon />
        <View style={styles.content}>
          <Text style={styles.name}>{nama}</Text>
        </View>
        <IconNext />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.name}>{nama}</Text>
        {gas && <Text style={styles.desc}>{desc} Gas</Text>}
        {tanggal && <Text style={styles.desc}>{desc}</Text>}
      </View>
      <IconNext />
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingLeft: 40,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 40,
  },
  photo: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[700],
    textTransform: 'capitalize',
  },
  desc: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
});
