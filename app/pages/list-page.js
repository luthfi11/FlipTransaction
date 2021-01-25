/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    ActivityIndicator,
    Text,
    TouchableHighlight,
} from 'react-native';

import ApiRepository from '../data/api-repository';
import TransactionItem from '../components/transaction-item';
import SortModal from '../components/sort-modal';

const ListPage = ({ navigation }) => {

    const [transactionList, setTransactionList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [sortIndex, setSortIndex] = useState(1);
    const [sortTitle, setSortTitle] = useState('URUTKAN');

    const [fullTransactions, setFullTransactions] = useState([]);

    useEffect(() => {
        ApiRepository.getAllTransaction().then((json) => {
            const transactions = Object.keys(json).map((k) => { return json[k]; });
            setTransactionList(transactions);
            setFullTransactions(transactions);
            setIsLoading(false);
        });
    }, []);

    const renderItem = ({ item }) => {
        return <TransactionItem item={item} nav={navigation} />;
    };

    const filterTransaction = (query) => {
        const filtered = fullTransactions.filter((data) => {
            return data.beneficiary_name.toLowerCase().includes(query.toLowerCase()) ||
                data.beneficiary_bank.toLowerCase().includes(query.toLowerCase()) ||
                data.sender_bank.toLowerCase().includes(query.toLowerCase()) ||
                data.amount.toString().includes(query);
        });

        setTransactionList(filtered);

        if (query === '') {
            setTransactionList(fullTransactions);
        }
    };

    const sortTransaction = (option) => {
        let sorted;
        switch (option.id) {
            case 0:
                sorted = fullTransactions;
                sortCallback(1);
                break;
            case 1:
                sorted = transactionList.sort((data1, data2) => (data1.beneficiary_name > data2.beneficiary_name) ? 1 : -1);
                sortCallback(2);
                break;
            case 2:
                sorted = transactionList.sort((data1, data2) => (data1.beneficiary_name < data2.beneficiary_name) ? 1 : -1);
                sortCallback(3);
                break;
            case 3:
                sorted = transactionList.sort((data1, data2) => (data1.created_at > data2.created_at) ? 1 : -1);
                sortCallback(4);
                break;
            case 4:
                sorted = transactionList.sort((data1, data2) => (data1.created_at < data2.created_at) ? 1 : -1);
                sortCallback(5);
                break;
        }
        setTransactionList(sorted);
        setSortTitle(option.label);
    };

    const sortCallback = (index) => {
        setSortIndex(index);
        if (sortIndex !== index) {setIsVisible(false);}
    };

    return (
        <SafeAreaView>
            <View style={styles.filter}>
                <TextInput placeholder="Cari nama, bank, atau nominal" style={styles.searchBox} onChangeText={filterTransaction} />
                <TouchableHighlight
                    style={styles.sortButton}
                    onPress={() => {
                        setIsVisible(true);
                    }}
                    underlayColor="#EEEEEE"
                >
                    <Text style={styles.textButton}>{sortTitle}  \/</Text>
                </TouchableHighlight>
            </View>

            {isLoading && (<ActivityIndicator animating={true} size="large" color="#EF6C00" style={styles.activityIndicator} />)}

            <FlatList
                data={transactionList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.bottomPad}
            />

            <SortModal
                modalVisible={isVisible}
                onRequestClose={() => setIsVisible(false)}
                onSelect={sortTransaction}
                init={sortIndex}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    searchBox: {
        padding: 16,
        flex: 2,
    },
    activityIndicator: {
        marginTop: 20,
    },
    sortButton: {
        padding: 16,
    },
    textButton: {
        color: '#EF6C00',
        fontWeight: 'bold',
    },
    bottomPad: {
        paddingBottom: 80,
    },
});

export default ListPage;
