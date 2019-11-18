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
        <a class="navbar-brand text-white ml-3" href="#">MFU MOOC</a>
      </div>

      <div class="justify-content-end">
        <div class="navbar-text text-white font-weight-bold mr-2">Wannisa</div>
        <img src="../assets/profile.jpg" width="40" height="40" class="rounded-circle mr-3" />
        <button
          type="button"
          class="btn btn-info rounded-pill text-white font-weight-bold mr-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >Add class</button>
      </div>
    </nav>
    <!-- /navbar -->
    <div class="container-fluid pt-4">
      <div class="row align-items-center">
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
        </div>
        <!-- /background -->
        <!-- box -->
        <div class="col-lg-3 col-md-3 col-sm-12 p-4">
          <div class="card box p-3">
            <div class="card-body text-center">
              <h3 class="card-title p-2">Sec 1</h3>
              <hr>
              <p><strong>Date:</strong> Monday</p>
              <p><strong>Time:</strong> 15:00 - 18:00</p>
             
            </div>
          </div>
        </div>
        <!-- box -->
        <div class="col-lg-3 col-md-3 col-sm-12 p-4">
          <div class="card box p-3">
           <div class="card-body text-center">
              <h3 class="card-title p-2">Sec 2</h3>
              <hr>
              <p><strong>Date:</strong> Monday</p>
              <p><strong>Time:</strong> 08:00 - 11:00</p>
            </div>
          </div>
        </div>
        <!-- box -->
        <div class="col-lg-3 col-md-3 col-sm-12 p-4">
          <div class="card box p-3">
           <div class="card-body text-center">
              <h3 class="card-title p-2">Sec 3</h3>
              <hr>
              <p><strong>Date:</strong> Monday</p>
              <p><strong>Time:</strong> 08:00 - 11:00</p>
              
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 p-4">
          <div class="card box p-3">
            <div class="card-body text-center">
              <h3 class="card-title p-2">Sec 4</h3>
              <hr>
              <p><strong>Date:</strong> Monday</p>
              <p><strong>Time:</strong> 08:00 - 11:00</p>
            </div>
          </div>
        </div>
        <!-- /box -->
        <!-- Modal -->
        <form action method="post">
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Join class</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Ask your teacher for the class code. then enter it here</p>
                  <input type="text" class="text-code" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-dismiss="modal">Close</button>

                  <div id="example-2">
                    <button type="button" class="btn button-navbar text-white">Join</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- ปิด container & row -->
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #560505;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: bottom right;
  background-attachment: fixed;
}
.bgNavbar {
  background-color: #350404;
}
button.button-navbar {
  background-color: #faa90b;
}
div.bg-Header {
  background-color: #751102;
}
button.menubar-border {
  border: 1px solid #fff;
}
button.menubar-border:hover {
  background-color: #faa90b;
}
div.menubar {
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
}
.box:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid red;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

input.text-code {
  width: 100%;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #cccccc;
}
input.text-code:focus {
  border-color: #faa90b;
}

.snowflake {
  color: #f8f8ff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #f8f8ff;
}
@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes snowflakes-shake {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
}
@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes snowflakes-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80px);
  }
}
.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, 0.5s;
  animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s;
}
</style>
