import React from 'react';

function User(props){
    return(
        <div>
            {props.location.state.usern}
        </div>
    );
}
export default User;