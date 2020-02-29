import React, {createContext, Component} from 'react';

export const CardContext = createContext();

export default class CardProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            card: [
                {id: 1, src: 'https://images.ctfassets.net/2y9b3o528xhq/5YhXXuS0hIw6JV3nJr3GgP/682bf2a70a98c3e466f26c2c2a812d65/front-end-web-developer-nanodegree--nd001.jpg', title: 'Basic'},
                {id: 2, src: 'https://www.nylas.com/wp-content/uploads/React_Plugins@2x.png', title: 'Advance'},
                {id: 3, src: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/941461/910/607/m1/fpnw/wm1/108-.jpg?1454576210&s=5f8edcb420e18b0db1a74597837d4ff1', title: 'e-commerce website', address: 'http://world-shop.herokuapp.com/'}
            ]
        }
    }

    render(){
        return (
            <CardContext.Provider value={{...this.state}}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
}