const { urlencoded, response } = require("express");

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    if(options === 'GET'){
        options.url = 'https://example.com';
        options.data = {
            mail: 'ivan@biz.pro',
            password: 'odinodin',
        };
        options.responseType = 'json';
        method = options;
        console.log(response);
    }
};

