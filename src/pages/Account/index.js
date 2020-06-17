import React, {useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {List, User, Button, Gap} from '../../components';
import {colors} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {logOutAction} from '../../redux/action/auth';

const Account = ({navigation}) => {
  const fullName = useSelector(state => state.authReducer.fullName);
  const role = useSelector(state => state.authReducer.role);
  const photo = useSelector(state => state.authReducer.photo);
  const userId = useSelector(state => state.authReducer.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId === '') {
      navigation.replace('Login');
    }
  }, [navigation, userId]);

  const logOut = () => {
    Alert.alert('Logout', 'Apakah anda yakin ?', [
      {
        text: 'Batal',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Ya',
        onPress: () => {
          dispatch(logOutAction());
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <View>
        <View style={styles.userWrapper}>
          <User photo={{uri: photo}} nama={fullName} role={role} />
        </View>
        <Gap height={30} />
        <List
          type="account"
          nama="Edit Profile"
          icon="edit-profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <List
          type="account"
          nama="Help"
          icon="help"
          onPress={() => navigation.navigate('Help')}
        />
        <List
          type="account"
          nama="Privacy Policy"
          icon="privacy"
          onPress={() => navigation.navigate('Privacy')}
        />
      </View>
      <View>
        <View style={styles.buttonWrapper}>
          <Button type="secondary" title="Logout" onPress={logOut} />
        </View>
        <View style={styles.border} />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingTop: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  border: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
    marginBottom: 25,
  },
  userWrapper: {
    paddingHorizontal: 30,
  },
});
