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
            <input type="submit"  class="btn btn-warning rounded-circle">
        </div>
        
      </nav>
      <!-- /navbar -->
      <div class="container-fluid p-5">
        <div class="row">
          <div class='snowflakes' aria-hidden='true'>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
            </div>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
            </div>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
            </div>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
            </div>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
            </div>
            <div class='snowflake'>
            ❅
            </div>
            <div class='snowflake'>
            ❆
        </div>
</div>
          <div class="col-lg-6 col-md-6 col-sm-12 p-3">
            <div class="text-center">
               <img src="../assets/logo_pin.png" class="img-fluid" alt="" srcset="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <h1 class="text-center pt-3 text-white">Learning For free. Forever</h1>
            <hr class="m-5">
            <router-link to="loginGoogle"><div class="row m-4">
              <button class="button"> STUDENT</button>
            </div></router-link>
            <div class="row m-4">
              <button class="button1">TEACHER</button>
            </div>
            
          </div>
        </div>
      </div>

    </div>
</template>
<style>
body{
    margin:0;
    padding: 0;
}
body{
  background-color: #560505;
  background-image: url("");
  background-repeat: no-repeat;
   background-size: 50% ;
  background-position:bottom right;
  background-attachment: fixed;
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
    hr{
      height:5px;
      background-color:#cccccc;
      border:none;
      border-radius:10px;
      size:70%;
    }
     .button {
  display: inline-block;
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #560505;
  background-color: #f3df16;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #e49310;
  width:100%;
}

.button:hover {
  background-color: #faa90b;
  color:#fff;
  }

.button:active {
  background-color: #f3df16;
  box-shadow: 0 5px #e49310;
  transform: translateY(4px);
}
    .button1 {
  display: inline-block;
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #85c902;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #064d01;
  width:100%;
}

.button1:hover {background-color: #235d37}

.button1:active {
  background-color: #85c902;
  box-shadow: 0 5px #064d01;
  transform: translateY(4px);
}
.snowflake {
 color: #F8F8FF;
 font-size: 1em;
 font-family: Arial, sans-serif;
 text-shadow: 0 0 5px   #F8F8FF;
      }
@-webkit-keyframes snowflakes-fall{
    0%{top:-10%}100%{top:100%}}
    @-webkit-keyframes snowflakes-shake{0%,100%{
        -webkit-transform:translateX(0);
        transform:translateX(0)}
        50%{-webkit-transform:translateX(80px);
        transform:translateX(80px)}}
        @keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}
        @keyframes snowflakes-shake{0%,100%{transform:translateX(0)}
        50%{transform:translateX(80px)}}
        .snowflake{position:fixed;
        top:-10%;
        z-index:9999;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        cursor:default;
        -webkit-animation-name:snowflakes-fall,snowflakes-shake;
        -webkit-animation-duration:10s,3s;
        -webkit-animation-timing-function:linear,ease-in-out;
        -webkit-animation-iteration-count:infinite,infinite;
        -webkit-animation-play-state:running,running;
        animation-name:snowflakes-fall,snowflakes-shake;
        animation-duration:10s,3s;
        animation-timing-function:linear,ease-in-out;
        animation-iteration-count:infinite,infinite;
        animation-play-state:running,running}
        .snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;
        animation-delay:0s,0s}
        .snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}
        .snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}
        .snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}
        .snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}
        .snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}
        .snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}
        .snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}
        .snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}
        .snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s}
</style>