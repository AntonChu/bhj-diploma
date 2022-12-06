const createRequest = (options = {}) => {
  const request = new XMLHttpRequest();
  request.responseType = 'json'; 
  let url = options.url;
  let formData = new FormData();
  // request.method = options.method;

  if(options.method === 'GET'){
    url += "?";
    for (let item in options.data){
      url += item + '=' + options.data[item] + '&';
    }
    url.slice(0, -1);
  }else{
    for (let item in options.data){
      formData.append(item, options.data[item]);
    }
  }

  request.open(options.method, url);
  request.send(formData);
  request.onload = function(){
    options.callback(null, request.response)
  }

  request.onerror = function(error){
    options.callback(request.error, null);
  }
};