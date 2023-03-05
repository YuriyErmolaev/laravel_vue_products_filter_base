## Тестовое задание

Задание:

Постановка задачи: 

Реализовать API позволяющий получить список продуктов с фильтрами (поиском).

Создать базовую форму поиска, которая будет генерировать 
и отправлять запросы на API через AJAX, 
а также отображать результат, полученный в ответе. 


Реализация:

- Стек: Laravel, MySQL, Docker, Vue, bootstrap
- Для фронта использован Vue, bootsrap, Mazer free Bootstrap template
- Настроен запуск через docker (контейнеры: php, nginx, MySQL)


Запуск:
- Для запуска выполнить make up 
- Для запуска терминала контейнера make bash
- Выполнить php composer.phar install, php artisan migrate, npm install 
- Запустить сидеры php artisan db:seed, создать link - php artisan storage:link   
- Проект запускается на http://127.100.100.150
- Для доступа к phpMyAdmin http://127.100.100.150:8081 (db_products/app/root)