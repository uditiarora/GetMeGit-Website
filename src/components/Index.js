import React, {useState} from 'react';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import history from '../history';
import '../css/index.css';
function Index() {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);
  const handleSubmit = () => {
    history.push({
      pathname: '/user',
      search: '?query='+ {username},
      state: { username: username}
    });
  }
    return (      
        <div className="index_div">
          <form onSubmit={handleSubmit}>
              <Octicon icon={MarkGithub} size="large" />
              <label htmlFor="username">Find Your Git Profile</label>
              <input name="username" type="text"  onChange={handleChange}/>
          </form>
        </div>
      );
}

export default Index;