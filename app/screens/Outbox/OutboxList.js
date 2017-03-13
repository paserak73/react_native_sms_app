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
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class OutboxList extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('OutboxDetail')}>
                    <View>
                        <View style={styles.itemWrap}>
                            <View>
                                <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarCover.jpg')}/>
                                <View style={styles.numberCircle}>
                                    <Text style={{color: 'white', fontSize: 12}}>4</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={styles.itemText}>[Campaign] Kytara</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text>16.1.</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('OutboxDetail')}>
                    <View>
                        <View style={styles.itemWrap}>
                            <View>
                                <View style={styles.itemIconBulkgate}><Icon name="content-cut" size={20} style={{color: 'white'}}/></View>
                                <View style={styles.numberCircle}>
                                    <Text style={{color: 'white', fontSize: 12}}>4</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={styles.itemText}>[Campaign] Kytara</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text>16.1.</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('OutboxDetail')}>
                    <View>
                        <View style={styles.itemWrap}>
                            <View>
                                <View style={styles.itemIconSunsms}><Icon name="content-cut" size={20} style={{color: '#FFE100'}}/></View>
                                <View style={styles.numberCircle}>
                                    <Text style={{color: 'white', fontSize: 12}}>4</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={styles.itemText}>[Campaign] Kytara</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text>16.1.</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('Chat')}>
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
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('Chat')}>
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
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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

});