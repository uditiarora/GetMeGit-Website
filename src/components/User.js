import React, {Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    hello
                </div>
                <div className="col-md-8">
                    {this.props.location.state.username}
                </div>
            </div>
            
        );
    }
    
}
export default User;