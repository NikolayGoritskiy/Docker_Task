import axios from 'axios'
const API_URL = 'http://localhost:8000/server' {

  listen 80;

  location /nginx_status {
    stub_status on;
    access_log off;
    allow 127.0.0.1;
    allow 172.16.0.0/12;
    deny all;
  }

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }

  location /api {
    proxy_pass http://server:9013;
    }

  location /api/payments {
    proxy_pass http://p-service:4004;
    }

  location /sitemap.xml {
    proxy_pass http://server:9013/sitemap.xml;
    }

  location /socket.io/ {
#    proxy_pass              http://upstream-nodejs;
    proxy_pass http://server:9013;

    proxy_http_version      1.1;
    proxy_set_header        Upgrade                 $http_upgrade;
    proxy_set_header        Connection              "upgrade";
    proxy_set_header        Host                    $host;
    proxy_set_header        X-Real-IP               $remote_addr;
    proxy_set_header        X-Forwarded-For         $proxy_add_x_forwarded_for;
    }

  error_page   500 502 503 504  /50x.html;

  location = /50x.html {
    root   /usr/share/nginx/html;
  }
api/v1/lib/publishing_house/';

export default class PubManager {

  getPubs(){
    return axios.get(API_URL).then(response => response.data);
  }
  getPub(pub){
    const url = API_URL + pub + '/';
    return axios.get(url).then(response => response.data);
  }
  createPub(pub){
    return axios.post(API_URL,pub)
  }
  updatePub(pub){
    const url = API_URL + pub.pk +'/';
    return axios.patch(url,pub)
  }
  deletePub(pub){
    const url = API_URL + pub.id + '/';
    return axios.delete(url)
  }
}
