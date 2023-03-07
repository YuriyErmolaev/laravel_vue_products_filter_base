SHELL=/bin/bash -e

.DEFAULT_GOAL := help

-include ./docker/.env

up: 
	@cd ./docker && docker-compose up
down: 
	@cd ./docker && docker-compose down

product-prepare:
	@cd ./docker && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm php composer.phar install && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm php artisan migrate && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm npm install && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm php artisan db:seed && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm php artisan storage:link

bash: ## Доступ к консоли веба
	@cd ./docker && docker exec -it --user laravel "${PROJECT_NAME}"-php-fpm bash