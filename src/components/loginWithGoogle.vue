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
            <h1 class="text-center p-4 text-white">Chinese for Fun</h1>
            <div class="d-flex flex-row justify-content-center">
                 <div class="g-signin2" style="width:200px;" data-onsuccess="onSignIn">
                   <button class="p-3 mb-2 bg-primary text-white" v-if="LoginStatus==null" @click="Login"> Signin </button>
                   <button class="p-3 mb-2 bg-primary text-white" v-if="LoginStatus!=null" @click="Signout"> Signout </button> <br>
                 </div>
                 <img v-bind:src="picture" alt="">
            </div>
           
            
            
            
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import db from '@/firebase/init';
import firebase from 'firebase';
export default {
  name: 'HelloWorld',
  data () {
    return {
      Email: null,
      Name: null,
      picture: null,
      StudentID: null,
      LoginStatus: null,
    }
  },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
           if(user){
               this.LoginStatus = "Loggedin"
           }else{
               this.user = null
           }
       })

  },
  methods:{
    Login(){
      let self = this
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      self.Name = user.displayName;
      self.Email = user.email;
      self.Name = user.displayName;
      self.picture = user.photoURL;
      let CutEmail = self.Email.split("@");
      self.StudentID = CutEmail[0];
      let ref = db.collection("Student").doc(self.StudentID)
      ref.get().then(function(doc){
        if(doc.exists){
        self.$router.push({name: 'homeS'})
      }else{
        self.CreateAccount();
      }
      })
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
    },
    Signout(){
      let self = this
      firebase.auth().signOut().then(function() {
        console.log("Signout")
        self.LoginStatus = null
      }).catch(function(error) {
        console.log(error)
      });
    },
    CreateAccount(){
      let self = this
      let ref = db.collection("Student").doc(self.StudentID)
      ref.get().then(doc=>{
          ref.set({
            StudentFirstname: self.Name,
            Student_img_url: self.picture,
            student_Email: self.Email,
            sutdent_ID: parseInt(self.StudentID),
          })
      })
      console.log("Pushed")
    }
  },
}
</script>
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