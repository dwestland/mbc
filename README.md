# mbc

**Run local dev environment:**

```
npm run dev
```

**Open in browser:**

```
http://localhost:3100
```

### Migrate Prisma

```
npx prisma migrate dev --name my-named-migration
```

**Push Prisma**

```
npx prisma db push
```

### Seed database

```
npx prisma db seed
```

### Nginx Server Block

````

```nginx
# Redirect from http to https
server {
  listen 80;
  listen [::]:80;
  access_log off;
  error_log off;
  server_name stg.mybeachcams.com;
  return 301 https://$host$request_uri;
  root /srv/www/stg.mybeachcams.com;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  server_name stg.mybeachcams.com;
  root /srv/www/stg.mybeachcams.com;
  index index.html;

  ssl_certificate /etc/letsencrypt/live/stg.mybeachcams.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/stg.mybeachcams.com/privkey.pem;

  access_log  /var/log/nginx/stg.mybeachcams.com_access.log;
  error_log  /var/log/nginx/stg.mybeachcams.com_error.log;
}
````
