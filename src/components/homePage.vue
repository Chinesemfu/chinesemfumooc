<template>
<div class="conatainer-fluid">
    <!-- navbar -->
    <nav class="navbar navbar-light bgNavbar">
        <div class="justify-content-start">
            <button type="button" class="btn menubar-border">
                    <div class="menubar"></div>
                    <div class="menubar"></div>
                    <div class="menubar"></div>
            </button>
            <a class="navbar-brand text-white ml-3" href="#">
                MFU MOOC
            </a>
        </div>
       

        <div class="justify-content-end">
            <button type="button" class="btn btn-warning rounded-pill text-white font-weight-bold">Login</button>
            <input type="submit"  class="btn btn-info rounded-circle">
        </div>
        
      </nav>
      <!-- /navbar -->
      <!-- header -->
      <div class="container-fluid">
            <div class="row bg-Header">
                <!-- image Header -->
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="../assets/logo_pin.png" alt="Responsive image" class="mx-auto d-block p-3 img-fluid" >
                </div>
                <!-- Text Header -->
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center align-items-center p-3 text-white" style="height: 100%;">
                        
                        <h1 class="text-center">Lerning for free. forever.</h1>
                        <hr width="90%" class="line">
                        <h4 class="text-center">" More knowledge and to be more</h4>
                        <h4 class="text-center">fun with out course "</h4>        
                    </div>
                </div>
            </div>
        </div>
    <!-- Header -->
    <!-- Article -->
    <!-- slide show -->
    <div class="container-fluid">
        <div class="row p-2 mt-4 mb-4">
            <div class="col-lg-12 col-md-12 col-sm-12">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img class="d-block w-100" src="../assets/slideImage/slide1.png" alt="First slide">
                              </div>
                              <div class="carousel-item">
                                <img class="d-block w-100" src="../assets/slideImage/slide2.png" alt="Second slide">
                              </div>
                              <div class="carousel-item">
                                <img class="d-block w-100" src="../assets/slideImage/slide3.png" alt="Third slide">
                              </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </div>  
            </div> 
        </div>
    </div>
    <!-- slide show -->
    <!-- box Text -->
    <div class="container-fluid bg-Header">
        <div class="row">
            <div class="col-lg-12 col-md-12 co-sm-12 mb-4">
                
                 <div class="row justify-content-center" style="padding-top: 50px;padding-bottom: 50px;">
                    <div class="col-lg-10">
                        <div class="justify-content-center bg-white shadow-sm p-4 bg-white rounded-lg">
                            <div class="p-3 mb-4">
                                    <h4 class="text-center mt-3 mb-3">คำคมข่าวสาร ต่างๆ</h4>
                                    <div class="align-items-left">
                                         <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                    </div>      
                            </div>
                        </div>
                    </div>
                 </div>
                 <div class="posit">
                    <img src="../assets/test.jpeg" alt="" srcset="" width="200" height="200"  class="img-fluid">
                </div>

            </div>
        </div>
    </div>
    


</div>
<!-- Article -->   
</template>


<style>
body{
    margin:0;
    padding: 0;
}
 .bgNavbar{
        background-color: #350404;
    }
button.button-navbar{
        background-color:#faa90b;
    }
div.bg-Header{
        background-color: #751102;
    }
    button.menubar-border{
        border:1px solid #fff;
    }
    button.menubar-border:hover{
        background-color: #faa90b;
    }
    div.menubar{
        width: 25px;
        height: 2px;
        background-color: #fff;
        margin: 6px 0;
    }
   hr.line{
     height: 2px;
     background-color: #ccc;  
   }
   div.posit{
       position: absolute;
        bottom: 8px;
        right: 10px;
        margin-bottom: 5px;

   }
</style>