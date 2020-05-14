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
                            <a class="nav-link" href="#">Sign Out</a>
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
        </div>
        <div class="row">
            <div>
            <div id="infoCard" class="row">
                <section class="col-md-4 col-sm-12">
                    <div class="card">
                    <img src="{{ $homesList->imageUrl }} " alt="Image of a House" style="width: 100%" />
                        <div class="card-body">
                            <h3 class="card-title" style="font-size: 25px; font-weight: bold; margin-bottom: 0;"> {{$homesList->address}} </h3>
                            <p>{{$homesList->zipcode}}</p>
                            <p> Find your place with an immersice photo experience and the most
                                listings, including things you won't find anywhere else. </p>
                                <br />
                                <a  id="cardBtn" href="#" class="btn btn-light" >
                                Search homes
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

     <script src="/js/app.js"></script>
    </body>
</html>
