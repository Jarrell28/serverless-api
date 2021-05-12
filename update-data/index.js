'use strict';

const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
    console.log(event);
    try {
        const id = event.queryStringParameters && event.queryStringParameters.id || event.pathParameters && event.pathParameters.id;
        const { name, phone } = JSON.parse(event.body);


        const data = await peopleModel.update({ "id": id }, { "name": name, "phone": phone });
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (e) {
        return {
            statusCode: 500,
            message: e.message
        }
    }
}
