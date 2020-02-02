import React, {Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.location.state.username}
            </div>
        );
    }
    
}
export default User;