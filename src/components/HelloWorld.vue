<template>
  <div class="hello">
    <span class="border border-primary ">{{Email}}<br></span>
   
   <button class="p-3 mb-2 bg-primary text-white" v-if="LoginStatus==null" @click="SignIn"> Signin </button>
   <button class="p-3 mb-2 bg-primary text-white" v-if="LoginStatus!=null" @click="Signout"> Signout </button> <br>
   {{LoginStatus}}
  </div>
</template>
 
<script>
import db from '@/firebase/init';
import firebase from 'firebase';
export default {
  name: 'HelloWorld',
  data () {
    return {
      Email: '5931301023@lamduan.mfu.ac.th',
      Name: 'Pongpon Seprum',
      EmailSplit: null,
      LoginStatus: null,
    }
  },
  created(){
    this.CutEmail();
    firebase.auth().onAuthStateChanged((user)=>{
           if(user){
               this.LoginStatus = "Loggedin"
           }else{
               this.user = null
           }
       })

  },
  methods:{
    SignIn(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(user.email,user.displayName,user.photoURL,user.uid)
      this.Name = user.displayName;
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
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      
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
    CutEmail(){
      let ref = db.collection("Student").doc(this.Email)
      ref.get().then(doc=>{
          ref.set({
            StudentFirstname: this.Name,
            Student_img_url: "url",
            student_Email: this.Email,
          })
      })
      
    }
  },
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>