/* eslint-disable radix */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {User, Header, Gap, CardGas, Button} from '../../components';
import {DummyPangkalan1} from '../../assets';
import {colors} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {addPesanAction} from '../../redux/action';

const DetailPangkalan = ({navigation, route}) => {
  const dataPangkalan = route.params.dataPangkalan;

  const userId = useSelector(state => state.authReducer.userId);
  const fullName = useSelector(state => state.authReducer.fullName);
  const photo = useSelector(state => state.authReducer.photo);

  const [gas3Kg, setGas3Kg] = useState(0);
  const [gas12Kg, setGas12Kg] = useState(0);
  const [brightGas, setBrightGas] = useState(0);

  const dispatch = useDispatch();

  const submitPesan = () => {
    let total = parseInt(gas3Kg) + parseInt(gas12Kg) + parseInt(brightGas);
    dispatch(
      addPesanAction(
        dataPangkalan.idPangkalan,
        userId,
        dataPangkalan.namaPangkalan,
        fullName,
        photo,
        dataPangkalan.photo,
        gas3Kg,
        gas12Kg,
        brightGas,
        total,
      ),
    );
  };

  return (
    <View style={styles.page}>
      <Header
        title={dataPangkalan.namaPangkalan}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.userWrapper}>
          <User
            photo={{uri: dataPangkalan.photo}}
            nama={dataPangkalan.namaPangkalan}
            role={dataPangkalan.totalStok}
          />
        </View>

        <Gap height={16} />
        <View style={styles.border} />
        <Gap height={16} />
        <View style={styles.cardWrapper}>
          <CardGas
            icon="3kg"
            nama="Gas 3Kg"
            stok={dataPangkalan.gas3Kg}
            value={gas3Kg}
            onChangeText={value => setGas3Kg(value)}
          />
          <Gap height={16} />
          <CardGas
            icon="12kg"
            nama="Gas 12Kg"
            stok={dataPangkalan.gas12Kg}
            value={gas12Kg}
            onChangeText={value => setGas12Kg(value)}
          />
          <Gap height={16} />
          <CardGas
            icon="bright"
            nama="Bright Gas"
            stok={dataPangkalan.brightGas}
            value={brightGas}
            onChangeText={value => setBrightGas(value)}
          />
        </View>
      </View>
      <Gap height={50} />
      <View style={styles.buttonWrapper}>
        <Button title="Pesan" onPress={submitPesan} />
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
