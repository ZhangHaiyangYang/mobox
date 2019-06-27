import {observable} from "mobx-react";
export default class Movie{


@observable list=[];
    constructor(root)
    {
         this.root=root;
    }
}