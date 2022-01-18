
Templates to create empty restFull API
--------------------------------------

Thanks in avance a AcadeMind for share your knowlage on:

https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=2

To run whatever project:

0. install nodeJs server (https://nodejs.org/es/download/)
1. install required packages (npm install package.json)
2. run server (node .\server.js)

Projects
--------
00 SimpleRestApi:

    Libraries:
    - express //to init app server
    
    Resume:
    Shows the most simple rest behavor

01 RestApiRoutes:

    Libraries:
    - express.router //to define each api
    - body-parser   //to extract body data in json format

    Resume:
    - Show routes management. For this example we use two apis: products and orders
    - manage methods: GET, POST, PATCH, DELETE 
    - error handling

02 Security:

    - manage cors to allow access to our api from other client different from server