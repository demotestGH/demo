import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import{createStackNavigator} from 'react-navigation'

export default class Login extends React.Component{
    render(){       
        return(
            <View style={style.container}>
             <Text style={style.header}>Login yours account</Text>
                <View style = {style.SectionStyle}>
                    <Image source={require('./img/tickets.png')} style={style.ImageStyle} />             
                    <TextInput style={style.textinput} placeholder='Your name' underlineColorAndroid={'transparent'}/>
                    <TextInput style={style.textinput} placeholder='Your password' underlineColorAndroid={'transparent'}/>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.btnsignin}>Sign in</Text>            
                    </TouchableOpacity>
                </View>
            </View>
        );
        
    }
}

const style =StyleSheet.create({
    login:{
        alignSelf: 'stretch',
        marginLeft:20,
        marginRight:20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
     
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    header:{
        fontSize: 24,
        color: '#ff6600',
        paddingBottom: 10,
        marginBottom:40,        
        borderBottomColor:'#199187',
        borderBottomWidth:1,
    },
    textinput:{
        alignSelf: 'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1
    },
    button:{
        //alignSelf:'stretch',
        width:50,
        height:30,
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
        borderRadius:10,
    },
    btnsignin:{
        color:'#fff',
        fontWeight:'bold',
    },
    searchIcon: {
        padding: 10,
    },
});