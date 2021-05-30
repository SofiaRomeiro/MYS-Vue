<template>
  <div>
	<div v-for="(recipe, i) in recipes" :key="i">
		<p> nome : {{recipe.name}} </p>
		<p> tipo : {{recipe.type}} </p>
	</div>		
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'AboutView',
	components: {},
	data: function() {
		return{		
			recipes: [],
		}
	},
	mounted () {
		axios
			.get('http://localhost:3000/api/recipes')
			.then(response => (this.recipes = response.data))
	},
	methods: {
	}
}
</script>

<style>
</style>
