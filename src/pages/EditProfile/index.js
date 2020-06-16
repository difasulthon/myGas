import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';
import {DummyUser1} from '../../assets';

const EditProfile = ({navigation}) => {
  const [photo] = useState(DummyUser1);
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Gap height={16} />
        <Profile isRemove photo={photo} />
        <Gap height={16} />
        <Input label="Full Name" />
        <Gap height={16} />
        <Input label="Email" value="alexmorgan@email.com" disable />
        <Gap height={16} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Update" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
