import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const privacyFooter = () => {
  return (
    <div className="container border-top mt-3 text-secondary" style={{ bottom: '0px' }}>
      Our Privacy Protocol aligns with MIT's privacy protocol. If at any time one does not want
      their information stored, you are free to delete your account and any information given to us
      will be deleted.
      <a href="/Privacy"> Our Privacy Protocol</a>
    </div>
  );
};

export default privacyFooter;
