import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Header,
  User,
  RingkasanText,
  TotalTagihanText,
  Button,
} from '../../components';
import {colors} from '../../utils';
import {DummyPangkalan1} from '../../assets';

const DetailPesanan = ({navigation, route}) => {
  const type = route.params.type;

  return (
    <View style={styles.page}>
      <Header title="Pesanan" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={DummyPangkalan1}
            nama="Pangkalan LPG Wahyu"
            role="Pangkalan"
          />
        </View>
        <View style={styles.border} />
        <View style={styles.ringkasanWrapper}>
          <RingkasanText />
        </View>
        <View style={styles.border} />
        {type === 'buyer' ? (
          <View style={styles.tagihanWrapper}>
            <TotalTagihanText />
            <Button title="Pesan" type="pesan" />
          </View>
        ) : (
          <View style={styles.tagihanWrapperSeller}>
            <TotalTagihanText />
            <View style={styles.buttonWrapper}>
              <Button title="Tolak" type="tolak" />
              <Button title="Terima" type="pesan" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailPesanan;

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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagihanWrapperSeller: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    justifyContent: 'space-between',
    height: '55%',
  },
});
