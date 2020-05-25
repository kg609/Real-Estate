<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Home;

class ManagePropertiesController extends Controller
{
    
    public function show()
    {
        $homesList = DB::table('homes')->get();
        
        if(! $homesList) {
            abort(404);
        }
        // $homesList = array($homesList);
        // dd($homesList);

        return view('manageProperties', [
            'homesList' => $homesList
        ]);
    }

    public function store() 
    {
        // persist the new property data
        
        // clean up
        $home = new Home();
        $home->address = request("propertyAddress");
        $home->price = request("price");
        $home->state = request("propertyState");
        $home->city = request("city");
        $home->zipcode = request("zipcode");
        $home->type = request("propertyType");

        $home->save();

         // dump(request()->all());

        return redirect("/manage-properties");
        
    }

    
}
