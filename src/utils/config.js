let CONFIG;
if (__DEV__) {
  CONFIG = {
    HOST: "http://localhost:3000/",
    IMG_HOST: "http://localhost:3000/",
    HTTP_TIME_OUT: 5,
  }
} else {
  CONFIG = {
    HOST: "http://47.99.72.101/",
    IMG_HOST: "http://47.99.72.101/",
    HTTP_TIME_OUT: 5,
  }
}

export default CONFIG;