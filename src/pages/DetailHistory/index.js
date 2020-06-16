import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, User, RingkasanText, TotalTagihanText} from '../../components';
import {DummyPangkalan1} from '../../assets';
import {colors} from '../../utils';

const DetailHistory = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={DummyPangkalan1}
            nama="Pangkalan LPG Wahyu"
            role="Sabtu, 30 Mei 2020"
          />
        </View>
        <View style={styles.border} />
        <View style={styles.ringkasanWrapper}>
          <RingkasanText />
        </View>
        <View style={styles.border} />
        <View style={styles.tagihanWrapper}>
          <TotalTagihanText />
        </View>
      </View>
    </View>
  );
};

export default DetailHistory;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  border: {
    height: 10,
    backgroundColor: colors.border,
  },
  userWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  ringkasanWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  tagihanWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
