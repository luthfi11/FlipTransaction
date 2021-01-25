/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import AppUtil from '../util/app-util';

const DetailPage = ({ route, navigation }) => {

  const { id, sender_bank, beneficiary_bank, beneficiary_name,
    account_number, amount, remark, unique_code, created_at } = route.params.transaction;

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.bold}>ID TRANSAKSI: #{id}</Text>

      <View style={styles.info}>
        <Text style={[styles.bold, styles.biggerFont]}>DETAIL TRANSAKSI</Text>
        <Text style={styles.outline} onPress={navigation.goBack} >Tutup</Text>
      </View>

      <Text style={[styles.bold, styles.biggestFont]}>
          {`${AppUtil.transformText(sender_bank)} ➔ ${AppUtil.transformText(beneficiary_bank)}`}
      </Text>

      <View style={styles.split}>
        <View style={styles.leftSide}>
          <Text style={[styles.bold, styles.biggerFont]}>{beneficiary_name.toUpperCase()}</Text>
          <Text style={[styles.biggerFont, styles.leftMargin]}>{account_number}</Text>
        </View>

        <View style={styles.rightSide}>
          <Text style={[styles.bold, styles.biggerFont]}>NOMINAL</Text>
          <Text style={[styles.biggerFont, styles.leftMargin]}>{AppUtil.formatCurrency(amount)}</Text>
        </View>
      </View>

      <View style={styles.split}>
        <View style={styles.leftSide}>
          <Text style={[styles.bold, styles.biggerFont]}>BERITA TRANSFER</Text>
          <Text style={[styles.biggerFont, styles.leftMargin]}>{remark}</Text>
        </View>

        <View style={styles.rightSide}>
          <Text style={[styles.bold, styles.biggerFont]}>KODE UNIK</Text>
          <Text style={[styles.biggerFont, styles.leftMargin]}>{unique_code}</Text>
        </View>
      </View>

      <View style={styles.lastRow}>
          <Text style={[styles.bold, styles.biggerFont]}>WAKTU DIBUAT</Text>
          <Text style={[styles.biggerFont, styles.leftMargin]}>{AppUtil.formatDate(created_at)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  info: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginTop: 40,
    marginBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  bold: {
    fontWeight: '700',
    fontSize: 15,
    marginStart: 16,
    marginEnd: 16,
  },
  outline: {
    borderWidth: 0,
    color: '#EF6C00',
    marginLeft: 'auto',
    paddingRight: 16,
  },
  biggerFont: {
    fontSize: 16,
  },
  biggestFont: {
    fontSize: 18,
  },
  split: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 8,
  },
  leftMargin: {
    marginLeft: 16,
  },
  lastRow: {
    marginTop: 16,
    paddingBottom: 50,
  },
  leftSide: {
    flex: 1.5,
  },
  rightSide: {
    flex: 1,
  },
});

export default DetailPage;
