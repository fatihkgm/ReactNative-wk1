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
        color:'red',
        textAlign:'center'
    },
    header: {
        flex:3,
        backgroundColor:'black',
        alignContent:'center',
        justifyContent:'center'
    },
    main: {
        flexDirection:'row',
        backgroundColor:'yellow',
        flex:6,
        alignContent:'center',
        justifyContent:'center'
    },
    side: {
      
        backgroundColor:'green',
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    content: {
       
        backgroundColor:'yellow',
        flex:3,
        alignContent:'center',
        justifyContent:'center'
    },
    footer: {
        backgroundColor:'blue',
        flex:3,
        alignContent:'center',
        justifyContent:'center'
    },

  })


