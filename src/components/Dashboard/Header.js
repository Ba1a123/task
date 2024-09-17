import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1 style={{
  color: '#4CAF50', 
  textAlign: 'center', 
  fontSize: '36px', 
  fontWeight: 'bold', 
  marginTop: '20px'
}}>
  Hardik Traders Client Management Dashboard
</h1>

      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        {/* <button onClick={() => setIsAdding(true)}>Add Employee</button> */}
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
