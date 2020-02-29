import React, {createContext, Component} from 'react';

export const CardContext = createContext();

export default class CardProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            card: [
                {id: 1, src: 'https://images.ctfassets.net/2y9b3o528xhq/5YhXXuS0hIw6JV3nJr3GgP/682bf2a70a98c3e466f26c2c2a812d65/front-end-web-developer-nanodegree--nd001.jpg', title: 'Basic'},
                {id: 2, src: 'https://www.nylas.com/wp-content/uploads/React_Plugins@2x.png', title: 'Advance'}
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