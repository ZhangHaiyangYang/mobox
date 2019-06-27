import { observable } from "mobx-react";
export default class Product{
@observable list=[];
    constructor(root)
    {
         this.root=root;
    }
}