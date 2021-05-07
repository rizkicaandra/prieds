# PRIEDS TEST
  
List of available endpoints:
- `POST /register`
- `POST /login`
- `POST /queue`
- `GET /customers`
- `POST /customers`
- `GET /customers/:id`
- `PUT /customers/:id`
- `DELETE /customers/:id`

### POST /register

Add new user to queue app

Request:

- data:

```json
{
  "username": "string",
  "password": "string",
  "name": "string",
  "email": "string",
  "role": "string"
}
```
Response:

- status 201

```json
{
    "userData": {
        "_id": "string",
        "username": "string",
        "password": "string",
        "name": "string",
        "email": "string",
        "role": "string"
    }
}
```

Error Response:
- 400 bad request
- 500 internal server error

### POST /login

Login to app to get token

Request:

- data:

```json
{
  "username": "string",
  "password": "string",
}
```
Response:

- status 200

```json
{
    "name": "string",
    "accessToken": "string"
}
```

Error Response:
- 400 bad request
- 500 internal server error

### POST /queue

handle queue of customer number

Request:

- data:

```json
no needed
```
Response:

- status 201

```json
{
    "number": "string",
    "date": "date"
}
```

Error Response:
- 400 bad request
- 500 internal server error

### GET /customers

Show all customers data

Request:

-headers:
```json
{
  "accessToken": "string"
}

```
- data:

```json
no needed
```
Response:

- status 200

```json
{
    "customerData": [
        {
            "_id": "string",
            "name": "string",
            "age": "number",
            "job": "string",
            "mothersName": "string",
            "city": "string",
            "relegion": "string",
            "identityNumber": "number",
            "bloodType": "string",
        }
    ]
}
```

Error Response:
- 401 unauthorized
- 500 internal server error

### POST /customers

add new customers

Request:

-headers:
```json
{
  "accessToken": "string"
}

```
- data:

```json
{
  "name": "string",
  "age": "number",
  "job": "string",
  "mothersName": "string",
  "city": "string",
  "relegion": "string",
  "identityNumber": "number",
  "bloodType": "string",

}
```
Response:

- status 201

```json
{
    "customerData": {
      "_id": "string",
      "name": "string",
      "age": "number",
      "job": "string",
      "mothersName": "string",
      "city": "string",
      "relegion": "string",
      "identityNumber": "number",
      "bloodType": "string",
    }
}
```

Error Response:
- 401 unauthorized
- 400 bad request
- 500 internal server error

### GET /customers/:id

show customers data by id

Request:

-params:
```json
{
  "id": "string"
}

```
-headers:
```json
{
  "accessToken": "string"
}

```
- data:

```json
no needed
```
Response:

- status 200

```json
{
    "customerData": [{
      "_id": "string",
      "name": "string",
      "age": "number",
      "job": "string",
      "mothersName": "string",
      "city": "string",
      "relegion": "string",
      "identityNumber": "number",
      "bloodType": "string",
    }]
}
```

Error Response:
- 401 unauthorized
- 404 not found
- 400 bad request
- 500 internal server error

### PUT /customers/:id

update customers data

Request:

-params:
```json
{
  "id": "string"
}

```
-headers:
```json
{
  "accessToken": "string"
}

```
- data:

```json
{
  "name": "string",
  "age": "number",
  "job": "string",
  "mothersName": "string",
  "city": "string",
  "relegion": "string",
  "identityNumber": "number",
  "bloodType": "string",

}
```
Response:

- status 200

```json
{
    "customerData": [{
      "_id": "string",
      "name": "string",
      "age": "number",
      "job": "string",
      "mothersName": "string",
      "city": "string",
      "relegion": "string",
      "identityNumber": "number",
      "bloodType": "string",
    }]
}
```

Error Response:
- 401 unauthorized
- 404 not found
- 400 bad request
- 500 internal server error

### DELETE /customers/:id

delete customers data

Request:

-params:
```json
{
  "id": "string"
}

```
-headers:
```json
{
  "accessToken": "string"
}

```
- data:

```json
no needed
```
Response:

- status 200

```json
{
    "message": "success
}
```

Error Response:
- 401 unauthorized
- 404 not found
- 400 bad request
- 500 internal server error

### ERROR RESPONSE DETAIL

- 401 UNAUTHORIZED 

```json
{
    "message": "unauthorized"
}
```

- 404 Bad Request / Validation Error

```json
{
    "message": "Data not found"
}
```

- 400 Bad Request / Validation Error

```json
{
    "message": "Required field must be filled"
}
```

- 500 Internal Server Error

```json
{ 
    "error": "Internal Server Error"
}
```