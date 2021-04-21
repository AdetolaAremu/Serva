<template>
  <Allheader />
  
  <section class="mt-6 mb-6">
    <div class="flex justify-between px-5">
      <div class="mt-2">
        <label>Choose City</label>
        <select class="border border-gray-500 w-52 rounded-md ml-2">
          <option value="1" selected>Choose</option>
          <option value="2">Ikeja</option>
          <option value="3">Lekki</option>
          <option value="4">Surulere</option>
        </select>
      </div>
      <div>
        <button class="bg-purple-600 p-2 mr-2 rounded-md text-white">SORT ASCENDING</button>
        <button class="bg-purple-600 p-2 rounded-md text-white">SORT DESCENDING</button>
      </div>
      <div class="mt-2">
        <label>Search</label>
        <input type="text" placeholder="Search Restaurant" class="border border-gray-500 w-52 rounded-md ml-2">
      </div>
    </div>
    <div class="grid grid-cols-4 text-center font-bold pl-9">
      <div class="w-max bg-white my-4 shadow-md rounded-md hover:bg-green-100" v-for="(image, index) in foodimages" :key="index">
        <a href="Restaurantpage">
          <img class="h-44 w-56" :src="image.url" :alt="image.alt">
          <p class="py-2">{{ image.name }}</p>
        </a>
      </div>
    </div>
  </section>

  <Allfooter />
</template>

<script>
import Allheader from '../components/Allheader';
import Allfooter from '../components/Allfooter'
export default {
  components:{Allheader, Allfooter},
  data(){
    return{
      showfilters:true,
      foodimages: [
        {url:require('../assets/images/amalaskye.jpg'), alt:'Amala Skye', name:'Amala Skye'},
        {url:require('../assets/images/amalaatiewedu.jpg'), alt:'Amala Special', name:'Amala Special'},
        {url:require('../assets/images/boli.jpg'), alt:'Boli', name:'Boli Exqisite'},
        {url:require('../assets/images/bread.jpg'), alt:'bread', name:'EniBest Bread'},
        {url:require('../assets/images/calabar.jpg'), alt:'Calabar', name:'Mama Calabar'},
        {url:require('../assets/images/confectionary.jpg'), alt:'Confection', name:'Dora Confec'},
        {url:require('../assets/images/fruits.jpg'), alt:'fruits', name:'Bola Fruits'},
        {url:require('../assets/images/smallchops.webp'), alt:'smallchops', name:'Ketty Chops'}
      ]
    }
  }
}
</script>

<style>

</style>