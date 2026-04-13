- Client side application and server side application can interact with each other over HTTP protocol
  by making HTTP request and recieving HTTP response. To make the HTTP request from client side application,
  one can use either fetch function or axios module.

- The following of the HTTP requests types:
    GET     - to read all resources
    POST    - to create a new resource
    PUT     - to update entire resource
    DELETE  - to delete a resource
    PATCH   - to update a resource partially

- The POST, PUT and PATCH requests types can have body property, which can hold JSON data. Whereas,
  GET and DELETE requests do not have body property and they can send data only through URL.