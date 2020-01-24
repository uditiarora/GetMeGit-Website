import React from 'react';
import Octicon, { MarkGithub } from '@primer/octicons-react';

function Index() {

    return (
        <main>
          <form>
              <Octicon icon={MarkGithub} size="large" />
              <label htmlFor="username">Find Your Git Profile</label>
              <input name="username" type="text"  />
          </form>
        </main>
      );
}

export default Index;