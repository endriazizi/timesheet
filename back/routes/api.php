<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function() {
    return response()->json([
        'user'=> [
            'first_name' =>'Endri',
            'last_name' =>'Azizi'
        ]
    ]);
});

Route::resource('products', 'ProductController');