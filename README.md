### Содержимое проекта
1. Создаем package.json                 $ npm init -y
2. Устанавливает gulp4 (локально)       $ npm install gulpjs/gulp#4.0 --save-dev
3. Добавляем в .gitignore папку "node_modules" $echo node_modules>.gitignore
4. Добавляем в build папку "node_modules" $echo build>>.gitignore
5. Устанавлливаем gulp-pug(локально)    $npm i gulp-pug --save-dev
6. Устанавливаем guip-sass(локально)    $npm install gulp-sass --save-dev





### Структура проекта
├── src/  
|   └── pug/  
|---└── static/  
|-------└── js/  
|-----------└── main.js  
|-------└── scss/    
|-----------└── main.scss  
|-------└── fonts/  
|       └── img/  
├── build/  
├── .gitignore  
├── gulpfile.js  
 
