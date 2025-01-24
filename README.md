# MBC

## **Tech Stack**

### **Frontend**

- **Next.js** Version 12+
- **React** Version 17+
- **TypeScript**
- **SCSS**

### **Backend**

- **Next.js API Routes**
- **Node.js** Version 16+
- **Prisma** Version 4+

### **Database**

- **PostgreSQL** Version 15+
- **Prod,Hosted on Neon - AWS Oregon**

### **DevOps & Hosting**

- **Staging Hosted on Vercel**
- **AWS S3 for Image Hosting**
- **Cloudflare CDN & DNS**

### **Mapping & Geolocation**

- **React-Leaflet** Version 3+
- **OpenStreetMap (OSM)**

### **Authentication**

- **NextAuth.js** Version 4+

### **Development Tools**

- **Visual Studio Code**
- **AI Tools - GitHub Copilot & ChatGPT4o**
- **Git**
- **ESLint** & **Prettier**

### **Key Features**

- **Dynamic Webcam Display**: Webcams organized by countries, states/regions, and specific areas.
- **API-Driven Architecture**: Modular and reusable API endpoints for fetching webcam data.
- **Interactive Maps**: Visualize webcam locations globally with zoom and click functionality.
- **SEO Optimization**: Metadata and content structure designed for search engine performance.

---

**-----------------------------------------------------------------------**

**Browse on iPhone**
http://don.local, http://192.168.l.l4:3100

**Run local dev environment:** (Currently running Node 20.4)

```
npm run dev
```

**Open in browser:**

```
http://localhost:3100
```

**Login Page::**

```
http://localhost:3100/login
```

```
https://www.mybeachcams.com/login
```

**Git Clone**

```
git clone https://github.com/dwestland/mbc.git
```

**Check for TS, ESLint errors**

```
npx tsc --noEmit

npx eslint . --ext .ts,.tsx
```

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

**Generate client library on the production server**

```
npx prisma generate
```

**Push Prisma**

```
npx prisma db push
```

### Prisma Schema Linting

```
npx prisma format
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

**301 redirects**

How To Create Temporary and Permanent Redirects with Nginx
https://www.digitalocean.com/community/tutorials/how-to-create-temporary-and-permanent-redirects-with-nginx

server {

# 301 Redirect for single pages

rewrite /realestate/about.php /realestate/about/ permanent;

rewrite /california/san_diego /california/san-diego permanent;
rewrite /california/los_angeles /california/los-angeles permanent;
rewrite /california/central_coast /california/central-coast permanent;
rewrite /california/san_francisco /california/san-francisco permanent;
}
