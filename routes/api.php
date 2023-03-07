<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ColorsController;
use App\Http\Controllers\SizesController;


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products', [ProductsController::class, 'index']);
Route::get('colors', [ColorsController::class, 'index']);
Route::get('sizes', [SizesController::class, 'index']);
