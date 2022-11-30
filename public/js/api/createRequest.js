const createRequest = (options = {}) => {
  const request = new XMLHttpRequest;
  request.responseType = 'json'; 
  request.url = options.url;
  let formData = new FormData();
  request.method = options.method;

  if(request.method === 'GET'){
    request.url += "?";
    for (let item in options.data){
      request.url += item + '=' + options.data[item] + '&';
    }
    request.url.slice(0, -1);
  }else{
    for (let item in options.data){
      formData.append(`${item}`, options.data[item]);
    }
  }

  request.open(request.method, request.url);
  request.send(formData);
  request.onload = function(){
    let err = null;
    let response = xhr.response;
    options.callback(err, response)
  }
};