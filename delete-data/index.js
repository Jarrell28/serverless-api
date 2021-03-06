'use strict';

const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
    console.log(event);
    try {
        const id = event.queryStringParameters && event.queryStringParameters.id || event.pathParameters && event.pathParameters.id;

        const data = await peopleModel.delete(id);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully deleted" })
        }

    } catch (e) {
        return {
            statusCode: 500,
            message: e.message
        }
    }
}
