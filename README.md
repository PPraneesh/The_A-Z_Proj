# The_A-Z_Proj (Replica of Amazon)
This project is a replica of the popular e-commerce platform [Amazon](https://www.amazon.in/), built using Node.js, Express.js, EJS, MongoDB, CSS, and HTML. It aims to showcase various functionalities commonly found on e-commerce websites.
# Screenshots
## Login page   
- Welcome to the login page of the website. (which is at /login route) 
- You can login using Gmail (that is authentication using google) or using an email and a password (which will be hashed and salted when stored)
![Login page of the website](https://github.com/PPraneesh/The_A-Z_Proj/assets/125351602/7c218b94-db24-4eff-936e-b9fc1119582f)
## Home page  
 - Welcome to the home page, where you have the option to explore various sections such as BestSellers, Mobiles, Laptops, and Accessories.
 - You can utilize the search bar to easily find products throughout the website.
 - You can click on each tile to get details about the product.
 - You can click logout button to logout from the website.
![Home page of the website](https://github.com/PPraneesh/The_A-Z_Proj/assets/125351602/c36d32dd-12f9-437c-9051-960eeb66d4f9)
 ## Product Page <br>
 - You can click on add to cart, this will add the current product into a array (called cart).
 - Also whenever you visit a product page the current product will get added into an array (called userInterests) automatically to track user interests 
![Product page](https://github.com/PPraneesh/The_A-Z_Proj/assets/125351602/cad673e5-9d5d-495c-9b6b-aabe6c92ab98)
 ## Console images
 - you can see that user interests are tracked, those objects are info about the products which user searched for..
 - You can also see the cart items which user added. Currently this project don't render cart items seperately.
![Console output](https://github.com/PPraneesh/The_A-Z_Proj/assets/125351602/f520af4b-eb20-43e4-98ab-d6784be50306)
# Requirements for this project to setup locally
- You need to install Mongodb to run this project
- Simply head over to this [link](https://www.mongodb.com/try/download/community)
- Click on **Select package** and select **preffered platform** and click **download**
- Just simply click next and **don't forget** to **check the box** for installing **mongodb compass** 
# Setting it up locally (on your device)
- First download this project folder and extract it.
- Now you need to create a .env file or just simply create a file named '.env'
- Now you need 'CLIENT_ID' and 'CLIENT_SECRET' to get them simply head over to this [link](https://console.cloud.google.com/apis/credentials/consent)
- Login with your email, and now you need to fill the details
  - Under **User Type** click **external** and then click **create**
  - Now type App information
    - Type **App name**
    - Select **support email**
    - Type **Developer contact information**
    - You can also fill the optional details too.. it's upto you
    - Click **save and continue**
  - Now Click save and continue under **Scopes** and **Test Users**
  - Now head over to this [Link](https://console.cloud.google.com/apis/credentials)
    - Click on **CREATE CREDENTIALS** and then on  **OAuth client ID**
    - select **application type** as **Web Application**
    - Type your preffered name or let it be "A-Z Project"
    - Under **Authorised JavaScript origins** add this link http://localhost:3000
    - Under **Authorized redirect URIs** add this URI http://localhost:3000/auth/google/secrets
    - Click **create**
    - now copy the **Client id** and **client secret** and paste them in **.env** file
  - The text in .env should be in this following format <br>
  ![env file format](https://github.com/PPraneesh/The_A-Z_Proj/assets/125351602/3debe405-8838-45cf-84c6-e71cce3ebaf1)

- Run this following command in your terminal ``` npm i ```
- Now run ```node app.js```
- Head over to this [link](http://localhost:3000/login)
## Contributing
Contributions are welcome! If you find any bugs or have feature requests, please open an issue or submit a pull request.
## Contact
If you have any questions or suggestions, or need support, feel free to contact me at parshipraneesh8@gmail.com.
