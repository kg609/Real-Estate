<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class ManagePropertiesController extends Controller
{
    
    public function show()
    {
        $homesList = DB::table('homes')->first();

        // dd($homesList);

        return view('manageProperties', [
            'homesList' => $homesList
        ]);
    }
}
