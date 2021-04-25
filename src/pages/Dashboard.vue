<template>
  <Allheader />

  <section class="mb-10">
    <div class="mt-7 px-10">
      <div class="grid grid-cols-3">
        <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Total Amount Earned</p>
            <p class="font-bold pt-8 text-right px-2">850,000 (Naira)</p>
        </div>
        <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Total Meals Delivered</p>
            <p class="font-bold pt-8 text-right px-2">589</p>
        </div>
        <div class="bg-green-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Restaurant Ratings</p>
            <p class="font-bold pt-8 text-right px-2">4.2/5</p>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-5">
        <a href="#">
          <div class="bg-indigo-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Pending Orders</p>
            <p class="font-bold pt-8 text-right px-2">3</p>
          </div>
        </a>
        <a href="#">
          <div class="bg-yellow-600 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Filled Orders</p>
            <p class="font-bold pt-8 text-right px-2">589</p>
          </div>
        </a>
        <a href="#">
          <div class="bg-gray-700 h-32 w-52 rounded-lg text-white">
            <p class="pt-5 px-2">Unfilled Orders</p>
            <p class="font-bold pt-8 text-right px-2">4.2/5</p>
          </div>
        </a>
      </div>
    </div>

    <div class="px-10">
      <div class="flex justify-between mt-5">
        <div><p class="font-bold">Available Meals</p></div>
        <a href="#"><button class="bg-pink-600 px-3 py-1 rounded-xl text-white">See all</button></a>
      </div>
      <div>
        <div class="flex justify-between bg-gray-300 w-2/5 py-2 px-3 rounded-md" v-for="(meal, index) in meals" :key="index">
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

    <form @click.prevent="addmeal" class="px-10 mt-5">
      <div><p class="font-bold mb-3">Add Meals</p></div>
      <div class="mb-2">
        <label class="block font-semibold">Meal Picture:</label>
        <input type="file">
      </div>
      <div class="mb-2">
        <label class="block font-semibold">Meal Name:</label>
        <input v-model="mealname" type="text" class="border border-gray-500 rounded-md w-80">
      </div>
      <div class="mb-2">
        <label class="block font-semibold">Meal Price:</label>
        <input v-model="mealprice" type="number" class="border border-gray-500 rounded-md w-80">
      </div>
      <button class="bg-indigo-700 px-2 py-2 text-white rounded-lg">ADD MEAL</button>
    </form>
    <input type="file">
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
        {name: 'One Tilapia + Two wraps of Amala', src:require('../assets/amalaimages/amala2.webp'), price:'N1000'}
      ]
    }
  },
  methods:{
    addmeal(){
      if(this.mealname != '' && this.mealprice !=''){
        this.meals.push({name: this.name, src: this.mealpicture, price: this.mealprice})
        this.mealprice = ''
        this.mealname = ''
      }
    }
  }
}
</script>

<style>

</style>