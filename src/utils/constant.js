//For Deployment
//export const url = "https://wbdv-f20-music-server-spotify.herokuapp.com/api/";

//For test server
export const url = 'http://localhost:8080/api/';
export const clienturl = 'http://localhost:3000/';

//Damon test server
//export const url = 'http://localhost:8888/api/';

export var curUserName = {
  name: 'user',

  set curUser(n) {
    this.name = n;
  },
};

// export const setCurUserName = (name) => {
//   curUserName.curUser = name;
//   console.log(curUserName.name);
// };

var cu;

export const getCurUserName = () => {
  return cu;
};

export const setCurUserName = (name) => {
  cu = name;
};
