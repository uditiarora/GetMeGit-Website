import React, { useState, useEffect } from 'react';
import '../css/user.css';
import GhPolyglot from 'gh-polyglot';
import UserInfo from './UserInfo';
import Charts from './Charts';
import Repos from './Repos';
const User = props => {
    const username = props.location.state.username;
    const [userData, setUserData] = useState(null);
    const [langData, setLangData] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [error, setError] = useState({ active: false, type: 200 });
    const [rateLimit, setRateLimit] = useState(null);
  
    const getUserData = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if (response.status === 404) {
            return setError({ active: true, type: 404 });
          }
          if (response.status === 403) {
            return setError({ active: true, type: 403 });
          }
          return response.json();
        })
        .then(json => setUserData(json))
        .catch(error => {
          setError({ active: true, type: 400 });
          console.error('Error:', error);
        });
    };
  
    const getLangData = () => {
      const me = new GhPolyglot(`${username}`);
      me.userStats((err, stats) => {
        if (err) {
          console.error('Error:', err);
          setError({ active: true, type: 400 });
        }
        setLangData(stats);
      });
    };
  
    const getRepoData = () => {
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then(response => {
          if (response.status === 404) {
            return setError({ active: true, type: 404 });
          }
          if (response.status === 403) {
            return setError({ active: true, type: 403 });
          }
          return response.json();
        })
        .then(json => setRepoData(json))
        .catch(error => {
          setError({ active: true, type: 200 });
          console.error('Error:', error);
        });
    };
  
    useEffect(() => {
      fetch(`https://api.github.com/rate_limit`)
        .then(response => response.json())
        .then(json => {
          setRateLimit(json.resources.core);
          if (json.resources.core.remaining < 1) {
            setError({ active: true, type: 403 });
          }
        });
  
      getUserData();
      getLangData();
      getRepoData();
  
    }, []);

    return(
        <div className="row">
            <div className="col-md-4 user_info">
                {userData && <UserInfo userData={userData} />}

            </div>
            <div className="col-md-8 second_div">
                {langData && repoData && <Charts langData={langData} repoData={repoData} />}
                {repoData && <Repos repoData={repoData} />}
            </div>
        </div>
            
    );
    
    
}
export default User;