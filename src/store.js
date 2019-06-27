import Product from './reduser/prodcut'
import User from './reduser/user';
import Movie from './reduser/movie';
export default class Rootstore{
    constructor()
    {
        this.products=new Product(this);
        this.userstore=new User(this);
        this.moviestore=new Movie(this);
    }
}

