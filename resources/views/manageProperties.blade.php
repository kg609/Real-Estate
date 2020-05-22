<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> Zillow | Mangage Rentals </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    </head>
    <body>

    <header>
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <div id="mobileLinks" >
                            <li class="">
                                <a href="/" style="">Homepage</a>
                            </li>
                            <div style="">
                                <li>
                                    <a href="#" style="">Sign Out</a>
                                </li>
                            </div>                            
                        </div>
                        <div id="leftNav">
                            <li class="">
                                <a class="" href="/manage-rentals">Manage Rentals </a>
                            </li>
                        </div>
                        <div id="logoContainer">
                            <img src="/images/zillow-logo.png?6ee770efe9f6a0006090ef9aefcfb812" alt="Zillow Logo" />
                        </div>
                        <div id="rightNav">
                            <li>
                                <a class="" href="/zillow">Go To Zillow</a>
                            </li>
                    </div>
                    </ul>
            </div>
        </nav>

        <hr />

        <nav id="secondaryNav">
                <ul>
                    <div class="secondaryLeftMenu">
                        <li class="nav-item active">
                            <a class="nav-link" href="/manage-properties">My Properties</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Messages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                    </div>
                    <div class="secondaryRightMenu">
                        <li>
                            <i class="far fa-bell"></i>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Sign Out</a>
                        </li>
                    </div>
                </ul>  
        </nav>
     </header>

    
    <div class="container">
        <div class="row">
            <h1>My Properties</h1>
            <a href="#" style="margin-top: 15px; margin-left: 20px; text-decoration: none;" data-toggle="modal" data-target="#divAddPropertyModal">+ Add a property</a>
        </div>
        <div id="addPropertyForm">
            
            <form action="/manage-properties" method="POST" >
                @csrf

                <!-- Modal --> 
                <div class="modal fade" id="divAddPropertyModal" aria-labelledby="divAddPropertyModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" >
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title m-auto" id="divAddPropertyModalTitle">Add a property</h4>
                        <button  style=margin: "0", padding: "0" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <h4 class="mt-4  mb-4">Please provide your property's info.</h4>
                            <div class="form-group">
                                <label class="mb-2" for="propertyAddress">
                                    Property address
                                </label>
                                <input id="propertyAddress" name="propertyAddress" type="text" class="form-control form-control-lg"  />
                            </div>

                            <div class="form-group">
                                <label class="mb-2" for="price">
                                    Price                              
                                </label>
                                <input id="propertyPrice" name="price" type="number" class="form-control form-control-lg"  />
                            </div>  

                            <div class="form-group">
                                <label class="mb-2" for="propertyState">
                                    State
                                </label>
                                <select id="propertyState" name="propertyState" class="form-control form-control-lg"   >
                                    <option>Please select a state</option>
                                    <option>NC</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="mb-2" for="city">
                                    City                             
                                </label>
                                <input id="propertyCity"  name="city" type="text" class="form-control form-control-lg"  />
                            </div>

                            <div class="form-group">
                                <label class="mb-2" for="zipcode">
                                    Zip code                             
                                </label>
                                <input type="number" name="zipcode" class="form-control form-control-lg"    />
                            </div>            

                            <div class="form-group">
                                <label class="mb-2" for="propertyType">
                                    Property type
                                </label>
                                <select id="propertyType" name="propertyType" class="form-control form-control-lg"  >
                                    <option>Please select a property type</option>
                                    <option>House</option>
                                    <option>Condo / Apartment Unit</option>
                                    <option>Townhouse</option>
                                    <option>Entire Apartment Community</option>
                                </select>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="submit" class="btn btn-danger" >Submit</button>
                    </div>
                    </div>
                </div>
                </div>               
            </form>
        </div>
        <div class="row">
            <div>
            <div id="infoCard" class="row">
            @foreach ($homesList as $home)
                <section class="col">
                    <div class="card">
                        <div class="m-3 border" style="border-bottom: 4px solid #006aff !important;">
                            <img src="{{ $home->imageUrl }}" alt="Image of a House" class=" img-fluid" />
                            <h3 class="card-title p-1 mb-0" style="font-size: 25px; font-weight: bold;"> {{ $home->address }} </h3>
                            <p class="p-1 mb-1"> {{ $home->city }}, {{ $home->zipcode }} </p>
                        </div>
                        <div class="card-body pt-2 pb-2">                                                     
                            <a class="">
                                <i class="fa fa-chevron-right float-right"></i>
                                <strong class="">Applications</strong>
                                <p class="mt-1">Screen Tenants online</p>                               
                            </a>
                            <hr />
                            <a class="">
                                <i class="fa fa-chevron-right float-right"></i>
                                <strong class="mb-2">Leases</strong>
                                <p class="mt-1">Create or upload your own lease</p>                               
                            </a>
                            <hr />
                            <a class="">
                                <i class="fa fa-chevron-right float-right"></i>
                                <strong class="mb-2">Payments</strong>
                                <p class="mt-1">Set up online payments</p>                               
                            </a>
                        </div>
                    </div>
                </section>
                
                @endforeach
                
            </div>
        </div>

    </div>

     <script src="/js/app.js"></script>
    </body>
</html>
