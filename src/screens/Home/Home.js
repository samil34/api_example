import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Home = (props) => {

    return(
 
        <View>
        <FlatList
                    style={{ flex: 1 }}
                    data={props.list}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    // ListEmptyComponent={() => {
                    //     return (
                    //         <View style={{ 
                    //             alignItems: 'center', 
                    //             marginTop: 20, 
                    //             height: 300,
                    //             justifyContent: 'center' 
                    //             }}>
                    //             <Text style={{ fontSize: 10, marginBottom: 30 }}>Herhangi bir data bulunamadı.</Text>

                    //             <Button
                    //                 text={'Add New'}
                    //                 onPress={() => { 
                    //                     props.navigation.navigate('ListDetail')
                    //                 }}
                    //             />
                    //         </View>

                    //     )
                    // }}
                    initialNumToRender={2}
                />
     </View>

    )
    
}


//Home page yi reduxa bağlamak
//burada bir get işlemi yapılacak
const mapStateToProps = ({ authResponse }) => {
    const { loading, list } = authResponse;
    return { loading, list };
};

export default connect(mapStateToProps, { register })(Home);