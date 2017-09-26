'use strict';

module.exports.getusers = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
        "x-custom-header" : "My header"
    },
    body: JSON.stringify({
      message: 'This is my first example serverless !'
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


