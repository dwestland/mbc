# mbc

**Run local dev environment:**

```
npm run dev
```

**Open in browser:**

```
http://localhost:3100
```

**Git Clone**

```
git clone https://github.com/dwestland/mbc.git mbc20221023
```

<!-- ### Migrate Prisma

```
npx prisma migrate dev --name my-named-migration
``` -->

### Migrate Prisma Development

```
npm run migrate:dev
```

### Migrate Prisma Production

```
npm run migrate:prod
```

Adding Prisma Migrate to an existing project
https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/add-prisma-migrate-to-a-project#baseline-your-production-environment

**Push Prisma**

```
npx prisma db push
```

### Seed database

```
npx prisma db seed
```

### Debugging

Go to the Debug panel, select a launch configuration, then click on Debug start button: Start Debugging from the Command Palette to start your debugging session.

https://nextjs.org/docs/advanced-features/debugging

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
