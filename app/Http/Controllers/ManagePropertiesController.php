<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagePropertiesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the manafe rentals dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        return view('manageProperties');
    }
}
