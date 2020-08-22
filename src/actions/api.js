
import axios from 'axios'
import * as RootNavigation from '../RootNavigation';

export const post = (url, params, dispatch,start, success, faild) => {

    dispatch({  type: start })

    axios({
        method: 'post',
        url,//veritabanımızın adresi
        data: params
    }).then((response) =>{
        console.log('Gelen Data Başarılı: =>', response.data); //api isteğinin başarılı olması demek
        dispatch({  type: success, payload: response.data }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success
    
        RootNavigation.navigate('Home')//useEffet yerine bunu yapıyoruz

    }).catch((err) => {                                            //geriye data döner
       console.log('Gelen Data Hatalı: =>', err);
       Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu')
       dispatch({  type: faild }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success

    })
}

export const get = (url, params, dispatch,start, success, faild) => {

    dispatch({  type: start })

    axios({
        method: 'get',
        url,//veritabanımızın adresi
        data: params
    }).then((response) =>{
        console.log('Gelen Data Başarılı: =>', response.data); //api isteğinin başarılı olması demek
        dispatch({  type: success, payload: response.data }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success
    
       
    }).catch((err) => {                                            //geriye data döner
       console.log('Gelen Data Hatalı: =>', err);
       Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu')
       dispatch({  type: faild }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success

    })
}