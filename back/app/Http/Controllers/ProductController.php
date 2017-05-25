<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//imported by me product class
use App\Product;

class ProductController extends Controller
{
    //
    public function index()
    {
        //
        return Product::all();
    }
}
