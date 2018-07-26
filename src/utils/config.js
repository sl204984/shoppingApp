let CONFIG;
if (__DEV__) {
  CONFIG = {
    HOST: "http://localhost:3000/",
    IMG_HOST: "http://localhost:3000/",
    HTTP_TIME_OUT: 5,
  }
} else {
  CONFIG = {
    HOST: "http://sl204984.com/",
    IMG_HOST: "http://sl204984.com/",
    HTTP_TIME_OUT: 5,
  }
}

export default CONFIG;