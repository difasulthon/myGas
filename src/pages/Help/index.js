import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Help = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Help" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.paragraphText}>Halo sobat,</Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            Selamat datang di aplikasi myGas. MyGas adalah aplikasi yang bisa
            digunakan untuk bisa memsan gas LPG yang akan dibeli dan diambil di
            pangkalan gas yang anda pilih. Bagi pangkalan juga dapat menggunakan
            aplikasi ini untuk menerima pesanan para pembeli. Untuk bisa
            menggunakan fitur - fitur pada aplikasi ini silahkan ikuti panduan
            berikut ini.
          </Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            1. Pengguna harus mendaftarkan akun email.
          </Text>
          <Text style={styles.paragraphText}>
            2. Pengguna perlu memilih role sebagai pembeli atau pangkalan.
          </Text>
          <Text style={styles.paragraphText}>
            3. Setiap satu akun email hanya bisa digunakan untuk satu role.
          </Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            Jika anda memilih role pembeli, ikuti panduan berikut ini untuk bisa
            memsan gas.
          </Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            1. Pilih pangkalan pada menu home.
          </Text>
          <Text style={styles.paragraphText}>
            2. Klik tambah untuk menambah jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            3. Klik kurang untuk mengurangi jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            4. Atau ketikan pada kolom isi jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            5. Jika sudah yakin, klik submit.
          </Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            Jika anda memilih role pangkalan, ikuti panduan berikut ini untuk
            bisa memasukan stok dan menerima pesanan.
          </Text>
          <Gap height={10} />
          <Text style={styles.paragraphText}>
            1. Pilih pangkalan pada menu home.
          </Text>
          <Text style={styles.paragraphText}>
            2. Klik tambah untuk menambah jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            3. Klik kurang untuk mengurangi jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            4. Atau ketikan pada kolom isi jumlah pesanan.
          </Text>
          <Text style={styles.paragraphText}>
            5. Jika sudah yakin, klik submit.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Help;

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
