Este projeto foi desenvolvido durante o curso de Desenvolvimento Web Full Stack da Trybe com o objetivo de reforçar meus aprendizados de Javascript, Dcoker, NodeJs, Express, MySQL, Sequelize e Arquitetura MSC.

A aplicação se trata de uma API para um blog, capaz de criar e autenticar usuários, criar e editar postagens e categorias fazendo conexão com um banco de dados SQL.

Para rodar o projeto:

  ```
  git clone git@github.com:RasecMH/trybe-blogs-api.git
  ```

  ```
  cd trybe-blogs-api
  ```
  
  * Localmente (Necessário <a href="https://nodejs.org/en/" target="_blank">Node</a> e <a href="https://www.mysql.com" target="_blank">MySQL</a> instalados na máquina):
    ```
    npm install
    ```

    ```
    npm start
    ```

  * Docker (APP_PORT: 3000 | MYSQL_PORT: 3306):
    ```
    docker-compose up -d --build
    ```

    ```
    docker exec -it blogs_api bash
    ```

    ```
    npm install
    ```

    ```
    npm start
    ```

## Rotas

### /login

<details>
  <summary>POST</summary>
  
* Corpo da requisição  
  ```json
    {
      "email": "lewishamilton@gmail.com",
      "password": "123456"
    }
  ```

* Em caso de sucesso retorna com status `200`:
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
  ```

* Em caso de campos vazios retorna com status ``400``:
  ```json
    {
      "message": "Some required fields are missing"
    }
  ```

* Em caso de campos inválidos retorna com status ``400``:
  ```json
    {
      "message": "Invalid fields"
    }
  ```



</details>

### /user

<details>
<summary>GET</summary>

* Em caso de sucesso retorna com status ``200``:
  ```json
      [
        {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        /* ... */
      ]
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

<details>
<summary>POST</summary>


* Corpo da requisição
  ```json
    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ```

* Em caso de sucesso retorna com status ``201``:
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
  ```  

* Caso campo displayName tenha menos de 8 caracteres retorna com status ``400``:
  ```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
  ```

* Caso o campo email não esteja no formato correto retorna com status ``400``:
  ```json
    {
      "message": "\"email\" must be a valid email"
    }
  ```

* Caso o campo password tenha menos de 6 caracteres retorna com status ``400``:
  ```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
  ```

* Caso o email já esteja cadastrado no banco de dados retorna com status ``409``:
  ```json
    {
      "message": "User already registered"
    }
  ```
  
</details>

### /user/:id

<details>
<summary>GET</summary>

* Em caso de sucesso retorna com status ``200``:
  ```json
      {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      }
  ```

* Caso o usuário não exista no banco de dados retorna com status ``404``:
  ```json
      {
        "message": "User does not exist"
      }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

### /user/me

<details>
<summary>DELETE</summary>

* Em caso de sucesso retorna status ``204``

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

### /categories

<details>
<summary>GET</summary>

* Em caso de sucesso retorna com status ``200``:
  ```json
    [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },
      /* ... */
    ]
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

<details>
<summary>POST</summary>

* Corpo da requisição
  ```json
    {
      "name": "Typescript"
    }
  ```

* Em caso de sucesso retorna com status ``201``:
  ```json
    {
      "id": 3,
      "name": "Typescript"
    }
  ```

* Caso o campo name esteja vazio ou invalido retorna com status ``400``:
  ```json
    {
      "message": "\"name\" is required"
    }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

### /post

<details>
<summary>GET</summary>

* Em caso de sucesso retorna com status ``200``:
  ```json
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

<details>
<summary>POST</summary>

* Corpo da requisição
  ```json
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
  ```

* Em caso de sucesso retorna com status ``201``:
  ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "updated": "2022-05-18T18:00:01.196Z",
      "published": "2022-05-18T18:00:01.196Z"
    }
  ```  

* Caso algum campo esteja vazio retorna com status ``400``:
  ```json
    {
      "message": "Some required fields are missing"
    }
  ```

* Caso nenhuma das categorias passadas no campo categoryIds exista no banco de dados retorna com status ``400``:
  ```json
    {
      "message": "\"categoryIds\" not found"
    }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

### /post/search

<details>
<summary>GET</summary>
Pesquisa filtra pelos campos title e content, caso nada seja passado, retorna todas as postagens.

* Em caso de sucesso retorna com status ``200``:
  ```json
    // GET /post/search?q=
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
  ```

* Caso não exista nenhuma postagem com o termo pesquisado retorna com status ``200``:
  ```json
    // GET /post/search?q=BATATA
    []
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

### /post/:id

<details>
<summary>GET</summary>

* Em caso de sucesso retorna com status ``200``:
  ```json
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
          {
              "id": 1,
              "name": "Inovação"
          }
      ]
    }
  ```

* Caso a postagem não exista no banco de dados retorna com status ``404``:
  ```json
    {
      "message": "Post does not exist"
    }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

<details>
<summary>PUT</summary>

* Corpo da requisição
  ```json
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
  ```

* Em caso de sucesso retorna com status ``200``:
  ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2022-05-18T18:00:01.000Z",
      "updated": "2022-05-18T18:07:32.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }
      ]
    }
  ```  

* Caso algum dos campos da requisição esteja vazio retorna com status ``400``:
  ```json
    {
      "message": "Some required fields are missing"
    }
  ```  

* Caso a postagem não pertença ao usuário autenticado retorna com status ``401``:
  ```json
    {
      "message": "Unauthorized user"
    }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>

<details>
<summary>DELETE</summary>

* Em caso de sucesso retorna status ``204``

* Caso a postagem não pertença ao usuário autenticado retorna com status ``401``:
  ```json
    {
      "message": "Unauthorized user"
    }
  ```

* Caso a postagem não exista no banco de dados retorna com status ``404``:
  ```json
    {
      "message": "Post does not exist"
    }
  ```

* **[Messagens de validação de token JWT]**
  
  - caso o token não seja encontrado no parametro Authorization da requisição retorna com status ``401``:
  ```json
    {
      "message": "Token not found"
    }
  ```
  - caso o token esteja expirado ou seja inválido retorna com status ``401``:
  ```json
    {
      "message": "Expired or invalid token"
    }
  ```

</details>
