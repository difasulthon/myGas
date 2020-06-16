import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser1} from '../../assets';
import {List, User, Button, Gap} from '../../components';
import {colors} from '../../utils';

const Account = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.userWrapper}>
          <User photo={DummyUser1} nama="Alex Morgan" role="Pembeli" />
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
          <Button type="secondary" title="Logout" />
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
