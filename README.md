
<p align="center">
<img height="150" src="https://vuejs.org/images/logo.png" style="max-width:80%;">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400">
</p>


### Simple boilerplate for spa projects made with Laravel 7.28.4 and VueJs
<br/>

- In back-end side added **Passport** for authentication

- In font-end side (VueJs) added **vuex**, **vue-router**, **middlewares**, some base-components(witch required global)

- for dashboard using [material dashboard](https://github.com/creativetimofficial/material-dashboard).

<br />

### How to install this :

#### 1- Install this repo from composer

```
git clone https://github.com/jalallinux/laravel-vue-spa-boilerplate.git projectname
cd projectname
```
<br />

#### Optional- Update composer packages (composer.json)
```
composer install
```
<br />

#### 2- Install javascript packages (package.json)
```
npm i
```
<br />

#### 3- Copy .env.example file to .env and config .env file for database
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=...
DB_USERNAME=...
DB_PASSWORD=...
```
<br />

#### 4- Generate laravel APP_KEY
```
php artisan key:generate
```
<br />

#### 5- Run migration
```
php artisan migrate:fresh
```
<br />

#### 6- Install passport
```
php artisan passport:install --force
```
<br />

#### 7- Config .env file for passport **client id** and **client secret**
```
PASSPORT_CLIENT_ID=...
PASSPORT_CLIENT_SECRET=...
```
<br />

#### 8- Run and build webpack files
```
npm run dev
```
#### 8- Or run and build webpack files in watch mode for changes
```
npm run watch
```
<br />

#### 9- Run laravel server
```
php artisan serve --port=8000
```
<br />
