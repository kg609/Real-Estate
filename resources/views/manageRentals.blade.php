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
                                <a class="" href="#">Manage Rentals </a>
                            </li>
                        </div>
                        <div id="logoContainer">
                            <img src="/images/zillow-logo.png?6ee770efe9f6a0006090ef9aefcfb812" alt="Zillow Logo" />
                        </div>
                        <div id="rightNav">
                            <li>
                                <a class="" href="zillowhome">Go To Zillow</a>
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
                            <a class="nav-link" href="#">My Properties</a>
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

    <div class="row">
         <img src="https://live.staticflickr.com/126/421729935_a4330fffba_b.jpg" alt="kitchen image" style="width: 100%; height: 75vh">
    </div>

     <script src="/js/app.js"></script>
    </body>
</html>
