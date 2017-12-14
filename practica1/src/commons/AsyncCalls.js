import axios from 'axios'

export function fechHousesList(){
    //consumimos el web service
    axios.get('http://146.185.137.85/got/web/casas')
    .then((response)  => {
      console.log(response.data.records);
      //asignamos los valores de la lista  
      this.setState({ list: response.data && response.data.records ? response.data.records : []})
    })
    .catch((error) => {
      console.log(error);
    });
    
}