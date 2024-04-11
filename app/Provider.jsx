import React from 'react';
import Header from './_components/Header';

//To allow children rendering from the main layout page
function Provider({ children }) {
  return (
    <div>
      <Header />
      <div className="mt-32">{children}</div>
    </div>
  );
}

export default Provider;
