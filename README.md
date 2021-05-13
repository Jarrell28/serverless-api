# LAB - Class 18

## Serverless Api

A simple serverless api using AWS API Gateway, DynamoDB, and Lambda functions. 

### Jarrell Houston

### Links and Resources

- [Deployed Link](https://7mcxjj0x22.execute-api.us-east-2.amazonaws.com/people)
- [Pull Request](https://github.com/Jarrell28/serverless-api/pull/1)

### How it works

**API Root URL** - https://7mcxjj0x22.execute-api.us-east-2.amazonaws.com/

**GET /people** - Will return a list of people records stored in our database

**GET /people/{id}** - Will return a single person's record

**POST /people** - Will create a new person's record. Must provide a body with name and phone key value pairs

**PUT /people/{id}** - Will update a single person's record and return the updated record. Must provide a body with name and phone key value pairs

**DELETE /people/{id}** - Will delete a single person's record

#### UML / Application Wiring Diagram

![image](https://user-images.githubusercontent.com/33704616/118051541-d0608080-b346-11eb-8fae-72043a2d2043.png)
