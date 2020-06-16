import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {fonts, colors} from '../../utils';
import List from '../../components/moleculs/List';
import {JSONHistory, ILHistory} from '../../assets';

const History = ({navigation}) => {
  const [data] = useState(JSONHistory.history);

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>History</Text>
        {data.length === 0 ? (
          <View style={styles.contentEmpty}>
            <Image source={ILHistory} style={styles.imageEmpty} />
            <Text style={styles.textEmpty}>Belum ada transaksi</Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => (
              <List
                onPress={() => navigation.navigate('DetailHistory')}
                photo={{uri: item.item.photo}}
                nama={item.item.pangkalan}
                desc={item.item.tanggal}
                tanggal
              />
            )}
          />
        )}
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingTop: 40,
    paddingLeft: 40,
    paddingBottom: 14,
  },
  contentEmpty: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  imageEmpty: {
    height: 150,
    width: 280,
  },
  textEmpty: {
    paddingTop: 10,
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.primary,
  },
  border: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});
