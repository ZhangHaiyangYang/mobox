import { observable,action } from "mobx-react";
import axios from 'axios'

export default class User{

@observable list=[];
    constructor(root)
    {
         this.root=root;
    }
    @action.bound
    async loaddata()
    {
        const datas=axios.get('http://api.cat-shop.penkuoer.com/api/v1/products')
        this.list=datas.data.prodcuts;
    }
}