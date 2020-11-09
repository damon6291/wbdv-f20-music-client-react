import React from 'react';

const PostGenerator = () => (
  <div style={{ border: 'solid', borderRadius: '10px' }}>
    <h3 style={{ color: 'white', marginLeft: '2px' }}> Home </h3>
    <div className="row" style={{ marginLeft: '20px', padding: '5px' }}>
      <img
        style={{ height: '50px', borderRadius: '10px' }}
        src="https://4.bp.blogspot.com/-L9CtV6gR8GI/WtgKA619aEI/AAAAAAAAF9c/CubtyZE94o076qCShJN_D2bdNiHoeIRxACEwYBhgL/s320/cool%2Bprofile%2Bimages.png"
      />
      <div className="col">
        <input style={{ marginBottom: '10px' }} className="form-control" placeholder="Post here!" />
        <button> Post </button>
      </div>
    </div>
  </div>
);

export default PostGenerator;
