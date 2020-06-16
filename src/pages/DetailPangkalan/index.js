import React from 'react';
import {StyleSheet, View} from 'react-native';
import {User, Header, Gap, CardGas, Button} from '../../components';
import {DummyPangkalan1} from '../../assets';
import {colors} from '../../utils';

const DetailPangkalan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pangkalan LPG Wahyu" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={DummyPangkalan1}
            nama="Pangkalan LPG Wahyu"
            role="Pangkalan"
          />
        </View>

        <Gap height={16} />
        <View style={styles.border} />
        <Gap height={16} />
        <View style={styles.cardWrapper}>
          <CardGas icon="3kg" nama="Gas 3Kg" stok="100" />
          <Gap height={16} />
          <CardGas icon="12kg" nama="Gas 12Kg" stok="5" />
          <Gap height={16} />
          <CardGas icon="bright" nama="Bright Gas" stok="5" />
        </View>
      </View>
      <Gap height={50} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('DetailPesanan', {type: 'buyer'})}
        />
      </View>
    </View>
  );
};

export default DetailPangkalan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 16,
  },
  border: {
    height: 10,
    backgroundColor: colors.border,
  },
  cardWrapper: {
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
  },
  userWrapper: {
    paddingHorizontal: 30,
  },
});
