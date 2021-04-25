<template>
  <Allheader />

  <section class="mb-10 mt-7">
    <div class="px-10">
      <p class="bg-gray-300 h-10 rounded-2xl px-2 py-2">Welcome, <span class="font-bold">AMALA SKYE RESTAURANT</span></p>
    </div>
    <div class="mt-2 px-10">
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Total Amount Earned</p>
            <p class="font-bold pt-8 text-right px-2">850,000 (Naira)</p>
          </div>
          <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
              <p class="pt-5 px-2">Current Balance</p>
              <p class="font-bold pt-8 text-right px-2">45,000 (Naira)</p>
          </div>
          <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
              <p class="pt-5 px-2">Total Meals Delivered</p>
              <p class="font-bold pt-8 text-right px-2">589</p>
          </div>
        </div>
        <div class="grid mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <a href="#">
            <div class="bg-indigo-600 h-32 w-52 rounded-lg text-white">
              <p class="pt-5 px-2">Pending Orders</p>
              <p class="font-bold pt-8 text-right px-2">3</p>
            </div>
          </a>
          <a href="#">
            <div class="bg-gray-700 h-32 w-52 rounded-lg text-white">
              <p class="pt-5 px-2">Unfilled Orders</p>
              <p class="font-bold pt-8 text-right px-2">5</p>
            </div>
          </a>
          <div class="bg-yellow-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Ratings</p>
            <p class="font-bold pt-8 text-right px-2">4.3/5</p>
          </div>
        </div>
    </div>

    <div class="px-10">
      <div class="mt-5">
        <div><p class="font-bold">Available Meals ({{ mealength }})</p></div>
      </div>
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
        <div class="flex justify-between bg-gray-300 py-2 px-3 rounded-md m-2" v-for="(meal, index) in meals" :key="index">
          <span class="flex">
            <span><img class="h-20 w-20 rounded-full" :src="meal.src" alt=""></span>
            <span class="ml-3 mt-5 flex-col flex">
              <span>{{ meal.name }}</span>
              <span class="font-bold">{{ meal.price }}</span>
            </span>
          </span>
          <span><button class="bg-red-700 rounded-full mt-5 py-3 px-5 text-white font-bold" @click="remove(index)">x</button></span>
        </div>
      </div>
    </div>

    <form class="px-10 mt-5">
      <div><p class="font-bold mb-3">Add Meals</p></div>
      <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <div class="mb-2">
          <label class="block font-semibold">Meal Picture:</label>
          <input @change="mealpicture" type="file">
        </div>
        <div class="mb-2">
          <label class="block font-semibold">Meal Name:</label>
          <input v-model="mealname" type="text" class="border border-gray-500 rounded-md w-80">
        </div>
        <div class="mb-2">
          <label class="block font-semibold">Meal Price:</label>
          <input v-model="mealprice" type="number" class="border border-gray-500 rounded-md w-80">
        </div>
      </div>
      <div class="text-center"><button @click.prevent="addmeal" class="bg-indigo-700 w-2/6 font-bold px-2 py-2 text-white rounded-lg">ADD MEAL</button></div>
    </form>
  </section>

  <Allfooter />
</template>

<script>
import Allheader from '../components/Allheader'
import Allfooter from '../components/Allfooter'
export default {
  components:{Allheader, Allfooter},
  data(){
    return{
      mealname:'',
      mealpicture:'',
      mealprice:'',
      meals:[
        {name: 'One wrap of Amala + One Tilapia Fish', src:require('../assets/amalaimages/amala2.webp'), price:'N1000'},
        {name: 'One wrap of Amala + Two Ogufe Meat', src:require('../assets/amalaimages/amala3.webp'), price:'N2000'},
        {name: 'One wrap of Amala + Three meats', src:require('../assets/amalaimages/amala4.webp'), price:'N2200'},
        {name: 'One wrap of Amala + Two Tilapia Fish', src:require('../assets/amalaimages/firstamala.webp'), price:'N2500'}
      ]
    }
  },
  methods:{
    addmeal(){
      if(this.mealname != '' && this.mealprice !=''){
        this.meals.push({name: this.mealname, src: this.mealpicture, price: this.mealprice})
        this.mealprice = ''
        this.mealname = ''
      }
    },
    remove(index){
      this.meals.splice(index, 1)
    }
  },
  computed:{
    mealength(){
      return this.meals.length
    }
  }
}
</script>

<style>

</style>