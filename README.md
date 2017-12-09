### Содержимое проекта
1. Создаем package.json                 
```sh
$ npm init -y
```
2. Устанавливает gulp4 (локально)
```sh 
$ npm install gulpjs/gulp#4.0 --save-dev
```
3. Добавляем папку "node_modules" в .gitignore 
```sh
$ echo node_modules>>.gitignore
```
4. Добавляем папку "build" в .gitignore 
```sh
$ echo build>>.gitignore
```
5. Устанавлливаем плагины для gulp(локально)    
```sh
$ npm i --save-dev gulp-pug gulp-sass gulp-notify gulp-autoprefixer
```





### Структура проекта
| src/    
| └── pug/
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── layout   
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── pages 
| └── static/    
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── js/    
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── main.js    
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── scss/      
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── main.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── fonts/    
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── img/
| .gitignore    
| gulpfile.js