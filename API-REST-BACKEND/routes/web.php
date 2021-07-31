<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});
/**
 * API authentication
 */
Route::post('register', 'UserController@authenticate');
Route::post('login', 'UserController@authenticate');
Route::post('loginSys','usuariController@login');

/**
 * Security; Valid token
 */
//Route::group(['middleware' => ['jwt.verify']], function() {

    Route::get('/users', 'usuariController@index');

    Route::put('/users/update', 'usuariController@update');

    Route::post('/users/create', 'usuariController@insert');

    Route::delete('/users/delete', 'usuariController@destroy');
    
    Route::get('/users/detail', 'usuariController@show');
//});

Route::group(['middleware' => [], 'prefix' => 'v1'], function () {
    // Auth
    Route::post('/auth/login', 'TokensController@login');
    Route::post('/auth/refresh', 'TokensController@refreshToken');
    Route::get('/auth/expire', 'TokensController@expireToken');
});
