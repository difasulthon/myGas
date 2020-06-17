import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, User, RingkasanText, TotalTagihanText} from '../../components';
import {colors, rupiahFormat} from '../../utils';

const DetailHistory = ({navigation, route}) => {
  const dataHistory = route.params.dataHistory;
  const role = route.params.role;

  const hargaGas3Kg = dataHistory.gas3Kg * 16500;
  const hargaGas12Kg = dataHistory.gas12Kg * 139000;
  const hargaBrightGas = dataHistory.brightGas * 65000;
  const totalTagihan = hargaGas3Kg + hargaGas12Kg + hargaBrightGas;

  return (
    <View style={styles.page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={
              role === 'pangkalan'
                ? {uri: dataHistory.photoPembeli}
                : {uri: dataHistory.photoPangkalan}
            }
            nama={
              role === 'pangkalan'
                ? dataHistory.namaPembeli
                : dataHistory.namaPnagkalan
            }
            role={dataHistory.tanggal}
          />
        </View>
        <View style={styles.border} />
        <View style={styles.ringkasanWrapper}>
          <RingkasanText
            gas3Kg={dataHistory.gas3Kg}
            gas12Kg={dataHistory.gas12Kg}
            brightGas={dataHistory.brightGas}
            hargaGas3Kg={rupiahFormat(hargaGas3Kg)}
            hargaGas12Kg={rupiahFormat(hargaGas12Kg)}
            hargaBrightGas={rupiahFormat(hargaBrightGas)}
          />
        </View>
        <View style={styles.border} />
        <View style={styles.tagihanWrapper}>
          <TotalTagihanText total={rupiahFormat(totalTagihan)} />
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
