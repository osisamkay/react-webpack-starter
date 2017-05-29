import React from 'react';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

class Home extends React.Component{
  render() {
    return (
     <div>
        <h1>Hello, {formatName(user)}!</h1>
      </div>
   )
  }
};

export default Home;