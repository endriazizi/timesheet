# front

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


php artisan key:generate

php artisan migrate

php artisan db:seed

https://www.hasotech.com/blog/secure-laravel-api-using-oauth-laravel-passport/
composer require laravel/passport

Laravel\Passport\PassportServiceProvider::class,

we added service provider so we need to migrate db

drop db

php artisan migrate
# user seed
php artisan db:seed

php artisan passport:install

some output:

Migrating: 2016_06_01_000003_create_oauth_refresh_tokens_table
Migrated:  2016_06_01_000003_create_oauth_refresh_tokens_table
Migrating: 2016_06_01_000004_create_oauth_clients_table
Migrated:  2016_06_01_000004_create_oauth_clients_table
Migrating: 2016_06_01_000005_create_oauth_personal_access_clients_table
Migrated:  2016_06_01_000005_create_oauth_personal_access_clients_table

C:\PHP\htdocs\travelbook\back>php artisan db:seed

C:\PHP\htdocs\travelbook\back>php artisan passport:install
Encryption keys generated successfully.
Personal access client created successfully.
Client ID: 1
Client Secret: QygRCczmGHzdyyeuRDdFtcCkNSqDVlsu2QuCTWmr
Password grant client created successfully.
Client ID: 2
Client Secret: 6odT0PRd7RLkR9WZpJ1aNZemwsvTZtMv3qDNNwn7


add passport to User model, authprovide and to app.php

php artisan route:list



okenController@store     | web,auth     |
|        | GET|HEAD | oauth/personal-access-tokens            |      | \Laravel\Passport\Http\Controllers\PersonalAccessT
okenController@forUser   | web,auth     |
|        | DELETE   | oauth/personal-access-tokens/{token_id} |      | \Laravel\Passport\Http\Controllers\PersonalAccessT
okenController@destroy   | web,auth     |
|        | GET|HEAD | oauth/scopes                            |      | \Laravel\Passport\Http\Controllers\ScopeController
@all                     | web,auth     |
|        | POST     | oauth/token                             |      | \Laravel\Passport\Http\Controllers\AccessTokenCont
roller@issueToken        | throttle     |
|        | POST     | oauth/token/refresh                     |      | \Laravel\Passport\Http\Controllers\TransientTokenC
ontroller@refresh        | web,auth     |
|        | GET|HEAD | oauth/tokens                            |      | \Laravel\Passport\Http\Controllers\AuthorizedAcces
sTokenController@forUser | web,auth     |
|        | DELETE   | oauth/tokens/{token_id}                 |      | \Laravel\Passport\Http\Controllers\AuthorizedAcces
sTokenController@destroy | web,auth     |
+--------+----------+-----------------------------------------+------+---------------------------------------------------
-------------------------+--------------+

C:\PHP\htdocs\travelbook\back>



Cretae a model for product:
php artisan make:model Product -m

-m will add the migration

now we need the product controller
php artisan make:controller ProductController

now

php artisan migrate

now we need some dummy data

set factory faker data 
migration
and seed


now run:

#product seeder
php artisan db:seed

```




For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
