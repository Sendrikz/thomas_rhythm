# Проект Thomas Rhythm
#### Використані в проекті технології
1. Бібліотека JavaScript - JQuery
2. Google Maps API
#### Плагіни
1. slick - створення каруселі
2. grid - опис колонок 
3. google-maps - створення карти у сірому стилі та задання адреси  
4. scroll-to - при натиснені перехід у відповідну зону сторінки
5. slicknav - стилізація мобільного меню
6. header-scroll - при скролі зберігається header в зоні видимості
#### Шрифти та іконки
1. Font Awesome - стиль іконок
2. ET-line icons - стиль іконок характерний даному проекту
3. Google fonts:
   * Dosis: 300,400
   * Open Sans: 300,400
#### Стандартні компоненти та класи 
До проекту прикріплен guide-файл в якому показано використання основних елементів проекту
##### Компоненти
1. Відступи між стандартними блоками
   ``` css
   .default-section
   .small-section
   ```
2. Стилізація вмісту відносно сторінки (посредині, відступи)
   ``` css
   .container
   .container-fluid
   ```
3. Заголовки
   ``` css
   .title
   .section-title
   .member-title
   ```
4. Стандартні кнопки 
   ``` css
   .btn
   .btn-default
   .btn-xs
   ```
5. Текст за замовчуванням
   ``` css
   .default-text
   ```
6. Форми
   ``` css
   .form-control
   .form-info
   ```
7. Цитати 
   ``` css
   .blockquote
   ```
8. Іконки тa іконки-ромби
   ``` css
   .icon
   .rhomb-icon
   ```
##### Класи
1. Створення колонок
   ``` css
   .col
   ```
2. Вирівнювання тексту та стиль тексту
   ``` css
   .text-center
   .text-right
   .text-justify
   .text-uppercase
   ```
 3. Колір фону
    ``` css
    .bg-black
    .bg-grey
    ```
 4. Флопнуті елементи
    ``` css
    .pull-left
    .pull-right
    ```
 5. Стилізуємо заголовки
    ``` css
    .title-white
    .section-title-light
    .team-item-name
    .team-item-role
    ```
 6. Стилізуємо кнопки
    ``` css
    .btn-black
    .btn[disabled]
    ```
 7. Стилізуємо форми
    ``` css
    .form-control[disabled],
    .form-control.disabled
    .error 
    ```
 8. Стилізуємо іконки-ромби
    ``` css
    .black-icon
    .white-icon
    .transparent-icon
    ```
***
_Основні контрольні точки media-запросів_
``` 
@media(max-width: 1200px) - нетбуки, ноутбуки та планшети в альбомній орієнтації (992px - 1200px);
@media(max-width: 991px) - планшети більше 7 дюймів в портретній орієнтації та 7-еми дюймові планшети (768px - 991 px) 
@media(max-width: 767px) - 7-еми дюймові планшети в портретній орієнтації та планшети меньше 7 дюймів в альбомній (577px - 767px)
@media(max-width: 576px) - всі мобільні телефони (480px - 576px)
@media(max-width: 479px) - за потреби, також мобільні телефони (320px - 479px)
```
***
#### Опис структури проекта
| Назва папок   | Опис папок              |
| ------------- |:------------------:| 
| www  | Папка з готовим проектом |         | 
| www/css     | Готові стилі для створення проекту  |  
| www/img  | Готові картинки для створення проекту        |    
| www/js | Готовий javascript для створення проекту        | 
| www/fonts     | Шрифти | 