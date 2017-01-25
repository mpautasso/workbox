# WORKBOX

## Getting started

```sh
git clone https://github.com/mpautasso/workbox
cd workbox
npm install
npm start
```

You must create the postgreSQL database

```
createdb workbox
```

Then open [http://localhost:5000/graphql](http://localhost:5000/graphql)

When you paste this on the left side of the page:

```
{
  users {
    firstName
    lastName
    email
  }
}
```

and hit the play button (cmd-return), then you should get something like this on the right side:

```json
{
  "data": {
    "users": [
      {
        "firstName": "Maurine",
        "lastName": "Rau",
        "email": "Danika.Powlowski@Reichert.org"
      },
      {
        "firstName": "Jennyfer",
        "lastName": "Johns",
        "email": "Jakubowski_Marlen@yahoo.com"
      },
      {
        "firstName": "Jayde",
        "lastName": "Conn",
        "email": "Everett.Mosciski@Hammes.biz"
      },
      {
        "firstName": "Dejon",
        "lastName": "Beier",
        "email": "Lauren.Robel@yahoo.com"
      },
      {
        "firstName": "Chris",
        "lastName": "Kemmer",
        "email": "Ledner.Mertie@Johnston.io"
      },
      {
        "firstName": "Eliane",
        "lastName": "Stark",
        "email": "Nakia_Mitchell@Misael.biz"
      },
      {
        "firstName": "Enola",
        "lastName": "Oberbrunner",
        "email": "Danyka.Feeney@Xzavier.io"
      },
      {
        "firstName": "Nya",
        "lastName": "Bosco",
        "email": "Alene.Kassulke@gmail.com"
      },
      {
        "firstName": "Matt",
        "lastName": "Welch",
        "email": "Jamal_Morissette@yahoo.com"
      },
      {
        "firstName": "Jeremy",
        "lastName": "Cremin",
        "email": "Hagenes.Sienna@Neoma.tv"
      }
    ]
  }
}
```
