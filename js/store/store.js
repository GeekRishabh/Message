import {observable, computed} from 'mobx';

class   Store{

 mobileList = [ ]; 

    getMobile(mobile) {
        console.log(mobile);
        this.mobileList.push({
            mobile:mobile
            
          });
       console.log(this.mobileList.length); 
    }



}

const store = new Store()

export default store;