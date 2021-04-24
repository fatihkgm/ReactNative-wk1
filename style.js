import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex:1,
      alignContent: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor:'#f00'
  
    },
    textStyle:{
        fontSize:30,
        color:'#fff',
        textAlign:'center'
    },
    header: {
        flex:2,
        backgroundColor:'black',
        alignContent:'center',
        justifyContent:'center'
    },
    main: {
        backgroundColor:'yellow',
        flex:5,
        alignContent:'center',
        justifyContent:'center'
    },
    footer: {
        backgroundColor:'blue',
        flex:5,
        alignContent:'center',
        justifyContent:'center'
    },

  })


