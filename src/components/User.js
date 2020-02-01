import React from 'react';

function User(props){
    return(
        <div>
            {props.location.state.username}
        </div>
    );
}
export default User;