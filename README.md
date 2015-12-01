# MEAN_demo_student
A demo show how to write a simple CRUD web application base on student model. (angularjs + express + nodejs + mongodb)

# Interface:

![image](https://github.com/qinyang1980/MEAN_demo_student/blob/master/screenshot.png)

# How to run this demo:
1) install<br>
nodejs: https://nodejs.org/en/<br>
express: http://expressjs.com/starter/installing.html<br>
mongodb: https://www.mongodb.org/<br>

2) install dependences:<br>
npm install

3) start the mongodb:<br>
cd C:\Program Files\MongoDB\Server\3.0\bin<br>
mongod --dbpath "D:\MongoDB\data"<br>

4) start the express backend server:<br>
node node-app.js

5) start client side:<br>
http://localhost:3000/index.html


# TODO list:
----------------

angular js:<br>
1) refactoring the js codes<br>
2) add validation for the form<br>
3) add css<br>
4) do not use $window.location.reload() to update page<br>

express:<br>
1) add error code<br>
2) redesign the restful API<br>
