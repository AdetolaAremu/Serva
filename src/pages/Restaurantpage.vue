<template>
  <Appheader />

  <section class="mb-6">
    <div>
      <div><p class="font-semibold text-center mt-5 text-2xl">Welcome to, <span class="font-bold">AMALA SKYE E-RESTAURANT</span></p></div>

      <div class="grid grid-cols-4 text-center font-semibold px-2">
        <div class="bg-yellow-700 text-white font-bold h-12 text-sm"><p class="pt-1">AVERAGE DELIVERY TIME</p></div>
        <div class="bg-yellow-700 text-white font-bold h-12 border-white border text-sm"><p class="pt-1">ORDER STARTS</p></div>
        <div class="bg-yellow-700 text-white font-bold h-12 border-white border text-sm"><p class="pt-1">ORDER ENDS</p></div>
        <div class="bg-yellow-700 text-white font-bold h-12 border-white border text-sm"><p class="pt-1">RATINGS</p></div>
        <div class="bg-gray-100"><p>35minutes</p></div>
        <div class="bg-gray-100"><p>7:45a.m</p></div>
        <div class="bg-gray-100 "><p>4:15p.m</p></div>
        <div class="bg-gray-100 "><p>4.4/5</p></div>
      </div>

      <div class="grid text-center font-bold px-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="bg-white my-4 shadow-md rounded-md hover:bg-green-100 sm:w-48 md:w-48 lg:w-96" v-for="(image, index) in images" :key="index">
          <img class="h-44 w-full" :src="image.url">
          <p class="">{{ image.name }}</p>
          <p class="py-1">{{ image.price }}</p>
          <a href="Checkout"><button class="bg-green-500 text-white mb-1 px-5 py-1 rounded-lg font-bold">BUY</button></a>
        </div>
      </div>
    </div>
  </section>

  <Appfooter />
</template>

<script>
import Appheader from '../components/Allheader';
import Appfooter from '../components/Allfooter';
export default {
  components:{Appheader, Appfooter},
  data(){
    return {
      images:[
        {url:require('../assets/amalaimages/amala2.webp'), name:'One wrap of Amala + One Tilapia Fish', price:'N1000'},
        {url:require('../assets/amalaimages/amala3.webp'), name:'One wrap of Amala + Two Ogufe Meat', price:'N2000'},
        {url:require('../assets/amalaimages/amala4.webp'), name:'One wrap of Amala + Three meats', price:'N2200'},
        {url:require('../assets/amalaimages/firstamala.webp'), name:'One wrap of Amala + Two Tilapia Fish', price:'N2500'}
      ]
    }
  }
}
</script>

<style>

</style>