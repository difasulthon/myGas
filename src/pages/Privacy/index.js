import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Privacy = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Privacy Policy" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.paragraphText}>Halo sobat,</Text>
        <Gap height={10} />
        <Text style={styles.paragraphText}>
          Selamat datang di aplikasi myGas. Aplikasi ini memiliki database yang
          menyimpan data anda berupa nama, role, email, dan password. Jangan
          khawatir password anda akan diuabah dalam bentuk hash encode sebelum
          disimpan ke database, sehingga password anda tidak akan bocor ke siapa
          pun lewat aplikasi ini.
        </Text>
        <Gap height={10} />
        <Text style={styles.paragraphText}>
          Terima kasih atas keperacayaan anda.
        </Text>
      </View>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  paragraphText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
    textAlign: 'justify',
  },
});
