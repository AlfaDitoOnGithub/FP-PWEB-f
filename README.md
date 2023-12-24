Notes:

ini adalah modifikasi dari proyek [ini](https://www.youtube.com/watch?v=rN1fNO-ATb0).

Coba Connect DB mongoDB dan ganti URL di api.js line 6 ke URL yang benar. 
entah MongoDB nya di buat bisa di akses di localhost, atau semacamnya.

jangan lupa download dependencies dan package package nya.

- corepack enable
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
- yarn init
- yarn add cookie-parser cors dotenv express express-async-handler express-oauth2-jwt-bearer nodemon prisma @prisma/client
- yarn add react-query
- yarn add @tanstack/react-query
- yarn add axios dayjs react-toastify
- npm install mongodb
- yarn add lodas
- *buat check dependencies: yarn install --check-files
  

untuk DB sementara ada di aku, Alfadito, bisa hubungi aku perihal akses nya.
data residency ada di server/data/residency.json, bisa ubah itu sesuai keinginan. 



Package.json list
```
{
  "name": "realestate",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@auth0/auth0-react": "2.0.1",
    "@emotion/react": "^11.11.1",
    "@mantine/core": "^6.0.16",
    "@mantine/dates": "^6.0.16",
    "@mantine/form": "^6.0.16",
    "@mantine/hooks": "^6.0.16",
    "axios": "^1.6.2",
    "dayjs": "^1.11.10",
    "esri-leaflet-geocoder": "2.3.3",
    "framer-motion": "^10.8.5",
    "leaflet": "^1.9.4",
    "lodash": "^4.17.21",
    "mongodb": "^6.3.0",
    "react": "^18.2.0",
    "react-accessible-accordion": "^5.0.0",
    "react-countup": "^6.4.2",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-leaflet": "4.2.1",
    "react-outside-click-handler": "^1.3.0",
    "react-query": "^3.39.3",
    "react-router-dom": "6.10.0",
    "react-spinners": "^0.13.8",
    "react-toastify": "^9.1.3",
    "swiper": "^9.1.1",
    "world-countries": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.2.0"
  }
}
```


