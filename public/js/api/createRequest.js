createRequest({
    url, // адрес
    data: { // произвольные данные, могут отсутствовать
      email,
      password,
    },
    responseType: 'json',
    method, // метод запроса
    /*
      Функция, которая сработает после запроса.
      Если в процессе запроса произойдёт ошибка, её объект
      должен быть в параметре err.
      Если в запросе есть данные, они должны быть переданы в response.
    */
    onreadystatechange: function(){
      console.log(response);
    }
  });
