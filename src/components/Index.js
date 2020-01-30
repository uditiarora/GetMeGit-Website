import React, {useState} from 'react';
import Router from 'next/router';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import '../css/index.css';
function Index() {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);

    return (
        <div>
          <form onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
              <Octicon icon={MarkGithub} size="large" />
              <label htmlFor="username">Find Your Git Profile</label>
              <input name="username" type="text"  onChange={handleChange}/>
          </form>
        </div>
      );
}

export default Index;