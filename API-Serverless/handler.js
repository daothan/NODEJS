

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.text !== 'string') {
    console.error('Validation failed');
    callback(new Error('Couldnt create item'));
    return;
  }
  const params = {
    TableName: 'Books',
    Item: {
      id: uuid.v1(),
      text: data.text,
      checked: false,
      createdAt: timestamp,
      updateAt: timestamp,
    },
  };


  dynamoDb.put(params, (error, result) => {
    console.log(params);
    if (error) {
      console.error(error);
      callback(new Error('Could not create books item'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};

module.exports.list = (event, content, callback) => {
  const params = {
    TableName: 'Books',
  };
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Could not fetch the data'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};


module.exports.listById = (event, content, callback) => {
  const params = {
    TableName: 'Books',
    Key: {
      id: event.pathParameters.id,
    },
  };
  dynamoDb.get(params, (error, result) => {
    console.log(params);
    if (error) {
      console.error(error);
      callback(new Error('Could not found'));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};

module.exports.update = (event, content, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  console.log(data);
  if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation error');
    callback(new Error('Couldnt update the item'));
    return;
  }

  const params = {
    TableName: 'Books',
    Item: {
      id: event.pathParameters.id,
      text: data.text,
      checked: data.checked,
      updatedAt: timestamp,
    },
  };

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Could not update'));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};

module.exports.delete = (event, content, callback) => {
  const params = {
    TableName: 'Books',
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.delete(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Could not delete this item'));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};
