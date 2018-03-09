<template>
  <div id="app">
  <v-app id="inspire">
    <v-content>

      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <div class="parentContainer">

            <v-card height="300px" width="400px">
              <div class="quote">
                <span style="font-size:120px;line-height:0.6em">❝</span>
              </div>

              <div class="loremText">
                <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae, soluta provident ipsum sequi mollitia aut, eveniet sunt natus itaque alias nulla nam facere quas laudantium corrupti molestias praesentium."</p>
              </div>

              <hr class="divider">

              <div class="contentContainer">
                <v-card-title>
                  <h1 align="left">Cristiano Ronaldo</h1>
                  <h3>Legend, Real Madrid</h3>
                </v-card-title>
              </div>

              <div class="mediaContainer">
                <v-card-media src="https://images.unsplash.com/photo-1440448894877-4c4fdec04f63?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7bfdb73a6d77f7e2c3e707221cc3d1d7" height="80px">
                </v-card-media>
              </div>
            </v-card>
          </div>

        </v-flex>
      </v-layout>

    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Parent Container Main Div Done*/
.parentContainer{
  height: 400px;
  width: 450px;
  /*border-style: solid;
  border-color: black;*/
}
/*The Card. It has a dark theme*/
.card{
  margin-left: 15px;
  margin-top: 30px;
  border-radius: 8px;
  border: solid black 2px;
}
/*This is for the review*/
.loremText{
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 200px;
  width: auto;
  text-align: center;
}
/*This is the div for Contents*/
.contentContainer{
  float: left;
  height: 100px;
  width: 300px;
}
/*The Media Container will contain Picture*/
.mediaContainer{
  float: right;
  margin-top: 35px;
  margin-right: -25px;
}
/*This will override the image of v-card-media*/
.card__media{
  border-radius: 50%;
  /*border-style: solid;*/
  width: 70px;
}
/*Divider styling*/
hr.divider{
  border-top: 3px dotted seagreen;
  margin-left: 140px;
  width: 30%;
}
h1{
  font-size: 20px;
  margin-left: 95px;
  font-family: 'Josefin Sans', sans-serif;
}
h3{
  font-size: 14px;
  margin-left: 111px;
  font-family: 'Shadows Into Light Two', cursive;
}
p{
  font-size: 14px;
  font-family: 'Grand Hotel', cursive;
}
.quote{
  margin-top: -15px;
  margin-left: -15px;
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: white;
  /* !important overrides card and we are able to make a circle*/
  border-radius: 50%!important; 
  /*helps in overlaying image*/
  z-index: 999;
}
</style>
