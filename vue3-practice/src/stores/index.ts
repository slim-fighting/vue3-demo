import { defineStore} from 'pinia'
import { getApiList,  } from '../api'


export const useStore = defineStore('test',{
    state: ()=>{
        return {
            list: {}
        }
    },
    actions:{
        async getList(){
            this.list = await getApiList() 
        }
    }
})