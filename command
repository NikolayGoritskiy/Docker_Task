docker run -d --net=docker_task2 -p 8000:8000 --name backend lib_catalog
docker-compose exec backend python manage.py migrate

docker run -d --net=docker_task2 -e POSTGRES_PASSWORD=django -e POSTGRES_USER=django -e POSTGRES_DB=django --name database postgres

docker run -d --net=docker_task2 -p 3000:80 --name frontend frontend