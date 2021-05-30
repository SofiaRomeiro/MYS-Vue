<template>
  <div>
    <div class="nav-wrapper">
      <div class="left-side">
        <img id="gato" src="../assets/images/yummi.png"/>
        MY YUMI STORE
      </div>	
      <div class="right-side">
        <a type="button" class="btn btn-outline" href="index.html">Home</a>
        <a type="button" class="btn btn-outline" href="recipes.html">Recipes</a>			
        <a type="button" class="btn btn-outline" href="about.html">About</a>
      </div>		
    </div>

    <div class="container"> 
  <!--		Image + today's meal btn 	-->
      
      <div class="food">		
        <img src="../assets/images/food-right-center.jpg" id="food" alt="Snow"/>
        <button class="btn">What's today's meal?</button>
      </div>
        
  <!-- Adicionar nova receita -->

      <div class="restaurant">		
        <img src="../assets/images/restaurant.jpg" class="restaurant" alt="Snow"/>
        <a type="button" class="btn btn-outline" href="https://www.thefork.pt">Go out?</a>
      </div>

  <!--			Acordeao				-->

      <div class="card">
        <div class="card-body" >
          Name + type (card)
        </div>
      </div>
      
    <!--			Ingredients				-->

      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Ingredients
              </button>
            </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body"></div>
        </div>
      </div>
      

    <!--			Preparation				-->		

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Preparation
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body"></div>
          </div>
        </div>
    </div>

  <!-- Adicionar nova receita -->

      <div class="add-recipe">

        <div class="text-add">
          <b>ADD NEW ONE</b>
        </div>

        <div class="input-group mb-3" style="padding-bottom: 0px !important">
          <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group">
          <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected>Options...</option>
            <option value="1">Carne</option>
            <option value="2">Peixe</option>
            <option value="3">Vegetariano</option>
          </select>
        </div>

        <div class="input-group">
          <span class="input-group-text">Ingredients</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div class="input-group">
          <span class="input-group-text">Preparation</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

    <!--	<div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02">
          <label class="input-group-text" for="inputGroupFile02">Upload file</label>
        </div> -->

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>
body {
	/* remember : font-family */
	height: 100%;
	width: 100%;
	justify-content: center;
	margin: 0px;
	background-image: url(../assets/images/backgrnd.png);
}

.container{
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 100%;
	justify-content: center;
}

/* ------------------------------------- navigation --------------------------------------- */

.nav-wrapper{
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 25px;
	background-color: #0FA373;
}

/* ----------------------------------- left side buttons ----------------------------------- */

.right-side{
	display: flex;
	margin-right: 1%;
}

.right-side > .btn{
	margin: 2%;
	color: black;
	background-color: #FDC189 ;
	width: 100%;
	border-color: white;
}

.right-side > .btn:hover {
	color: black;
	border-color: black;
}

/* --------------------------------------- title -------------------------------------------*/

.left-side{
	font-family: 'Noto Sans', sans-serif;
	display: flex;
	font-size: 200%;
	color: white;
	text-shadow: 2px 2px 5px #000000;
}

#gato {
	width: 5%;
	margin-right: 1%;
} 


/* -------------------------------- button meal + image --------------------------------------*/

#food {
	position: absolute;
	grid-column: 1;
	grid-row: 1;
	margin-top: 6%;
	width: 45%;
	opacity: 1;
	border-radius: 10px;
	border: solid darkgrey 1px;
} 

.container > .food > .btn {
	position: relative;
	grid-row: 1;
	grid-column: 1;
	margin-top: 38%;
	margin-left: 28%;
	margin-right: 5%;
	border-color: white;
	background-color: #0FA373;
	color: white;
	font-size: 100%;
	padding: 16px 30px;
	cursor: pointer;
	border-radius: 5px;
	text-align: center;
}

.container > .food > .btn:hover {
	background-color: #097754 ;
	color: white;
	border-color: white;
}

/* --------------------------------------- display meal --------------------------------------*/

.card{
	grid-column: 2;
	grid-row: 1;
	width: 80%;
	height: 11%;
	margin-top: 15%;
	margin-left: 25%;
	border-radius: 5px;
	background-color: #FDC189;
	border: solid black 1px;
}

.accordion{
	grid-column: 2;
	grid-row: 1;
	position: relative;
	width: 80%;
	margin-top: 30%;
	margin-left: 25%;
	margin-right: 20%;
	margin-bottom: 5%;
	border-radius: 10px;
}

.accordion > .accordion-item > .accordion-header > .accordion-button{
	background-color: #FDC189;
}

.accordion > .accordion-item > .accordion-header > .accordion-button:hover{
	color: black;
	background-color: #FDB471;
	border-color: black;
}


/* --------------------------------------- Add Recipe ----------------------------------------*/

.add-recipe{
	grid-column: 1;
	grid-row: 2;
	margin-top: 12%;
	margin-bottom: 10%;
}

.text-add{
	display: flex;
	padding-bottom: 15px;
	font-size: 150%;
	text-shadow: 2px 2px 2px lightgrey;
}

.input-group{
	padding-bottom: 15px;
}

.input-group > .form-select{
	margin-right: 5px
}

.input-group > .input-group-text{
	background-color: #FDC189;
}

.input-group > .form-select > .btn{
	background-color: white;
	color: black;
	margin-right: 15px; 
}

/* --------------------------------------- Search ----------------------------------------*/

.restaurant img{
	grid-column: 2;
	grid-row: 2;
	position: absolute;
	margin-top: 5%;
	margin-left: 20%;
	width: 85%;
	max-width: 85%;
	height: 75%;
	max-height: 75%;
	border-radius: 5%;
}

.container > .restaurant > .btn{
	grid-column: 2;
	grid-row: 2;
	position: relative;
	border-color: white;
	background-color: #0FA373;
	color: white;
	height: 10%;
	max-height: 10%;
	width: 20%;
	max-width: 20%;
	padding-top: 1.5%;
	cursor: pointer;
	font-size: 125%;
	text-align: center;
	margin-top: 30%;
	margin-left: 54%
}

.container > .restaurant > .btn:hover {
	border-color: white;
	background-color: #097754;
	color: white;
}
</style>
