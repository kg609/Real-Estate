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

    <div class="row">
         <div class="promoImage text-center">
             <div class="overlay">
                <h1>Zillow Rental Manager</h2>
                <p>The simplest way to manage your rental</p>
                <a href="/manage-properties" class="zillowBtn">View your properties</a>
            </div>
         </div>
    </div>

    <div class="row" style="padding: 100px 0;">
        <div id="divListYourProperty" class="col-sm">
            <h2>List your property</h2>
            <p>
            Whether you manage one or many properties, we have the easy-to-use tools to help you find your perfect renter. 
            Plus, when you list your property, you can accept rental applications for free to quickly screen prospective tenants. <a href="#">Learn more</a>
            </p>
            <p>
                <small>
                    Manage a large apartment community? <br />
                    <a href="#">Learn more about advertising</a>
                </small>
            </p>
            <button>Create a listing</button>
        </div>

        <div id="divListYourPropertyImg" class="col-sm">
        </div>
    </div>

    <div class="row inverseRow" style="padding: 100px 0;">
        <div id="divManageApplicationsImg" class="col-sm">
        </div>

        <div id="divManageApplications" class="col-sm">
            <h2>Manage applications and screen tenants</h2>
            <p>
            Save time with online rental applications and tenant screening, including criminal and eviction checks, 
            credit reports and more. <a href="#">Learn more</a>
            </p>
            <button>Accept applications</button>
        </div>    
    </div>

    <div class="row" style="padding: 100px 0;">       
        <div id="divStreamlinePayments" class="col-sm">
            <h2>Streamline your payments</h2>
            <p>
            Get rent payments, utility payments and security deposits sent directly to your bank account, for all of your units, 
            and easily keep track of those payments in one place. <a href="#">Learn more</a>
            </p>
            <button>Collect rent online</button>
        </div>

        <div id="divStreamlinePaymentsImg" class="col-sm">
        </div>
    </div>

    <div class="row">
         <div class="promoImage2 text-center" >
             <div class="overlay2" style="height: 40vh;">
                <h2>Save time with Zillow Rental Manager</h2>
                <button class="zillowBtn">View your properties</button>
            </div>
         </div>
    </div>

    <div class="row" style="padding: 50px 0;">       
        <div id="divStayInformed" class="col-sm">
            <h2>Stay informed</h2>
            <p>
                Explore our Rentals Resource Center to learn more about managing your rental, get useful tips and tools, and dive into rental market trends.
            </p>
            <button>Learn more</button>
        </div>

        <div id="divHereToHelp" class="col-sm">
            <h2>We're here to help</h2>
            <p>
                Visit our help center for commonly asked questions and ways to connect with our support team.
            </p>
            <button>Get help</button>
        </div>
    </div>
    <hr />

    <div class="row" style="padding: 50px 0; justify-content: center;">
        <h4>Manage your properties from any device, anytime.</h3>
    </div>

     <script src="/js/app.js"></script>
    </body>
</html>
