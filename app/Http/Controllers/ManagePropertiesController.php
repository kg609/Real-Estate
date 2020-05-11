<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagePropertiesController extends Controller
{
    
    public function show()
    {
        return view('manageProperties');
    }
}
