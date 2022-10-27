import { defineStore} from 'pinia'
import { getApiList,  } from '../api'
import type { RootObject } from './type'

export const useStore = defineStore('test',{
    state: ()=>{
        return {
            list: <RootObject>{}
        }
    },
    actions:{
        async getList(){
            const res = await getApiList()
            this.list = res
        }
    }
})