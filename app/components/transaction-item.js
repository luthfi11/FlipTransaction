/* eslint-disable prettier/prettier */

import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AppUtil from '../util/app-util';

const TransactionItem = ({ item, onPress, nav }) => {

    return (
        <TouchableOpacity
            onPress={() => {
                onPress;
                nav.navigate('Detail', {
                    transaction: item,
                });
            }}
            style={[styles.item, AppUtil.setBorderColor(item.status)]}>

            <View style={styles.mainInfo}>
                <Text style={styles.bold}>
                    {`${AppUtil.transformText(item.sender_bank)} ➔ ${AppUtil.transformText(item.beneficiary_bank)}`}
                </Text>

                <Text>{item.beneficiary_name.toUpperCase()}</Text>

                <Text>
                    {`${AppUtil.formatCurrency(item.amount)} ● ${AppUtil.formatDate(item.created_at)}`}
                </Text>
            </View>

            <Text style={[styles.status, AppUtil.setStatusColor(item.status)]}>{AppUtil.localizedStatus(item.status)}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        borderRadius: 8,
        borderLeftWidth: 6,
        borderLeftColor: '#0F9D58',
        padding: 16,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    mainInfo: {
        flex: 3,
    },
    bold: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    status: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 6,
        paddingTop: 6,
        fontSize: 12,
        fontWeight: '900',
        height: 30,
        borderRadius: 6,
        marginTop: 14,
    },
});

export default TransactionItem;
