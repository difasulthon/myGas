import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const userId = useSelector(state => state.authReducer.userId);
  const role = useSelector(state => state.authReducer.role);
  console.log('userId: ', userId);
  console.log('role: ', role);

  useEffect(() => {
    setTimeout(() => {
      let nextRoute;
      if (userId) {
        if (role === 'Pembeli') {
          nextRoute = 'MainApp';
        }
        if (role === 'pangkalan') {
          nextRoute = 'MainAppSeller';
        }
        navigation.replace(nextRoute);
      } else {
        nextRoute = 'Login';
        navigation.replace(nextRoute);
      }
    }, 3000);
  }, [navigation, role, userId]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>myGas</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary[800],
    color: colors.text.logo,
    marginTop: 5,
  },
});
