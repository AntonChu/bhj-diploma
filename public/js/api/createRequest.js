const createRequest = (options = {}) => {
  createRequest({
    url: this.URL + '/login',
    method: 'POST',
    responseType: 'json',
    data,
    callback: (err, response) => {
      if (response && response.user) {
        this.setCurrent(response.user);
        console.log('xzcxzbvnm,bmnbvccvbngmh,j,hmgnhfdsafghj');
      }
      console.log('jbdgbdfbdf');
      callback(err, response);
    }
  });
};