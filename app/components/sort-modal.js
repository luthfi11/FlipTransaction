/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Modal,
    StyleSheet,
    View,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';

const SortModal = ({ modalVisible, onRequestClose, onSelect, init }) => {

    const sortOption = [
        { id: 0, label: 'URUTKAN' },
        { id: 1, label: 'Nama A-Z' },
        { id: 2, label: 'Nama Z-A' },
        { id: 3, label: 'Tanggal Terlama' },
        { id: 4, label: 'Tanggal Terbaru' },
    ];

    const handleSelect = (e) => {
        onSelect(e);
    };

    return (
        <View style={styles.main}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={onRequestClose}
                style={styles.main}
            >
                <View style={styles.main}>
                    <RadioButtonRN
                        data={sortOption}
                        initial={init}
                        selectedBtn={handleSelect}
                        boxStyle={styles.noBorder}
                        style={styles.modalView}
                        activeColor="#EF6C00"
                        deactiveColor="#EF6C00"
                        circleSize={14}
                        duration={0}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
    },
    noBorder: {
        borderWidth: 0,
    },
});

export default SortModal;
