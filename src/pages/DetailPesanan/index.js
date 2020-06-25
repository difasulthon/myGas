import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import numeral from 'numeral';
import {
  Header,
  User,
  RingkasanText,
  TotalTagihanText,
  Button,
} from '../../components';
import {colors, showSuccess} from '../../utils';
import {useSelector} from 'react-redux';
import {updatePesan} from '../../redux/action';

const DetailPesanan = ({navigation, route}) => {
  const type = route.params.type;
  const dataPesanan = route.params.dataPesanan;

  const userId = useSelector(state => state.authReducer.userId);

  const hargaGas3Kg = dataPesanan.gas3Kg * 16500;
  const hargaGas12Kg = dataPesanan.gas12Kg * 139000;
  const hargaBrightGas = dataPesanan.brightGas * 65000;
  const totalTagihan = hargaGas3Kg + hargaGas12Kg + hargaBrightGas;

  const rupiahFormat = price => {
    return numeral(price)
      .format('0,0')
      .replace(/,/g, '.');
  };

  const tolak = () => {
    Alert.alert('Konfirmasi', 'Apakah anda yakin akan menolak pesanan?', [
      {
        text: 'Batal',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Ya',
        onPress: () => {
          updatePesan(userId, dataPesanan.idPembeli, 'TOLAK');
          showSuccess('Tolak pesan sukses');
          navigation.goBack();
        },
      },
    ]);
  };

  const terima = () => {
    Alert.alert('Konfirmasi', 'Apakah anda yakin akan menerima pesanan?', [
      {
        text: 'Batal',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Ya',
        onPress: () => {
          updatePesan(userId, dataPesanan.idPembeli, 'TERIMA');
          showSuccess('Terima pesan sukses');
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <Header title="Pesanan" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={{uri: dataPesanan.photoPembeli}}
            nama={dataPesanan.namaPembeli}
            role={dataPesanan.tanggal}
          />
        </View>
        <View style={styles.border} />
        <View style={styles.ringkasanWrapper}>
          <RingkasanText
            gas3Kg={dataPesanan.gas3Kg}
            gas12Kg={dataPesanan.gas12Kg}
            brightGas={dataPesanan.brightGas}
            hargaGas3Kg={rupiahFormat(hargaGas3Kg)}
            hargaGas12Kg={rupiahFormat(hargaGas12Kg)}
            hargaBrightGas={rupiahFormat(hargaBrightGas)}
          />
        </View>
        <View style={styles.border} />
        {type === 'buyer' ? (
          <View style={styles.tagihanWrapper}>
            <TotalTagihanText />
            <Button title="Pesan" type="pesan" />
          </View>
        ) : (
          <View style={styles.tagihanWrapperSeller}>
            <TotalTagihanText total={rupiahFormat(totalTagihan)} />
            <View style={styles.buttonWrapper}>
              <Button title="Tolak" type="tolak" onPress={tolak} />
              <Button title="Terima" type="pesan" onPress={terima} />
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
