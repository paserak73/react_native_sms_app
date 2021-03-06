/**
 * Created by Petr on 21.2.2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
    Button,
    Text,
    Picker,
    View,
    Image,
    Switch,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
    DrawerLayoutAndroid
} from 'react-native';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}


export default class OutboxDetail extends Component {

    render() {
        let menu  = <Menu/>;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <View style={styles.container}>
                    <View style={styles.toolbarContainer} elevation={2}>
                        <TouchableNativeFeedback onPress={()=>Actions.pop()}>
                            <Icon style={{color: 'white'}} name="arrow-back" size={25}/>
                        </TouchableNativeFeedback>
                        <View style={{flex: 1}}>
                            <Text style={styles.toolbarNumber}>Campaign real deal boy</Text>
                        </View>
                        <Icon style={styles.creditIcon} name='account-balance-wallet' size={22}/>
                        <Text style={styles.creditNumber}> 853.7</Text>
                    </View>
                    <TouchableNativeFeedback onPress={()=> Actions.Chat()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <View style={styles.itemIconPerson}><Icon name="person" size={25} style={{color: 'white'}}/></View>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.itemText}>+420 589 654 213</Text>
                                    <Text style={styles.itemTextRead}>I am exemple text..</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name="done" size={20} style={{color: 'green', marginTop: 5}}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Chat()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <View style={styles.itemIconPerson}><Icon name="person" size={25} style={{color: 'white'}}/></View>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.itemText}>+420 589 654 213</Text>
                                    <Text style={styles.itemTextRead}>I am exemple text..</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name="error" size={20} style={{color: '#F44336', marginTop: 5}}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Chat()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <View style={styles.itemIconPerson}><Icon name="person" size={25} style={{color: 'white'}}/></View>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.itemText}>+420 589 654 213</Text>
                                    <Text style={styles.itemTextRead}>I am exemple text..</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name="done" size={20} style={{color: 'green', marginTop: 5}}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </DrawerLayoutAndroid>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.toolbar,
        height: 60,
        padding: 15,
    },
    creditIcon: {
        marginRight: 5,
        color: 'white',
    },
    creditNumber: {
        color: 'white',
        fontSize: 16
    },
    toolbarNumber: {
        color: 'white',
        marginLeft: 15,
        fontSize: 18
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    itemWrap: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        padding: 15
    },
    itemImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 15
    },
    itemText: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: 16,
        color: '#BE2166',
        fontWeight: '500',
        marginLeft: 5
    },
    iconOrange: {
        color: 'orange',
        marginTop: 5
    },
    itemTextRead: {
        fontSize: 14,
    },
    itemPriceRead: {
        fontSize: 16,
        color: '#BE2166',
        marginLeft: 5
    },
    iconGreen: {
        color: 'green',
        marginTop: 5
    },
    numberCircle: {
        position: 'relative',
        bottom: 20,
        left: 30,
        backgroundColor: '#DE4232',
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: 23,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    itemIconBulkgate: {
        width: 45,
        height: 45,
        backgroundColor: '#3FAEA0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    itemIconSunsms: {
        width: 45,
        height: 45,
        backgroundColor: '#2B2B2A',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    itemIconPerson:{
        width: 45,
        height: 45,
        backgroundColor: '#EA1E63',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    }
})

module.exports = connect(mapStateToProps)(OutboxDetail);