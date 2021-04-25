<template>
  <Allheader />
  
  <section class="mt-6 mb-6">
    <button class="px-5 lg:hidden" @click="showfilters =! showfilters">Hide/show Filter</button>
    <div v-if="showfilters" class="flex flex-col justify-between px-5 sm:flex-col md:flex-col lg:flex-row">
      <div class="mt-2 mb-2">
        <label>Choose City</label>
        <select class="border border-gray-500 w-52 rounded-md ml-2">
          <option value="1" selected>Choose</option>
          <option value="2">Ikeja</option>
          <option value="3">Lekki</option>
          <option value="4">Surulere</option>
        </select>
      </div>
      <div>
        <button class="bg-purple-600 p-2 mr-2 rounded-md text-white" @click="sortedAsc()">SORT ASCENDING</button>
        <button class="bg-purple-600 p-2 rounded-md text-white" @click="sortedDsc()">SORT DESCENDING</button>
      </div>
      <div class="mt-2">
        <label>Search</label>
        <input type="text" v-model="search" placeholder="Search Restaurant" class="border border-gray-500 w-52 rounded-md ml-2">
      </div>
    </div>
    <div class="grid text-center font-bold pl-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div class="w-max bg-white my-4 shadow-md rounded-md hover:bg-green-100" v-for="image in filteredList" :key="image">
        <a href="Restaurantpage">
          <img class="h-44 w-56" :src="image.url" :alt="image.alt">
          <p class="py-2">{{ image.nameofres }}</p>
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
      search:'',
      showfilters:true,
      foodimages: [
        {url:require('../assets/images/amalaskye.jpg'), alt:'Amala Skye', nameofres:'Amala Skye'},
        {url:require('../assets/images/amalaatiewedu.jpg'), alt:'Amala Special', nameofres:'Amala Special'},
        {url:require('../assets/images/boli.jpg'), alt:'Boli', nameofres:'Boli Exqisite'},
        {url:require('../assets/images/bread.jpg'), alt:'bread', nameofres:'EniBest Bread'},
        {url:require('../assets/images/calabar.jpg'), alt:'Calabar', nameofres:'Mama Calabar'},
        {url:require('../assets/images/confectionary.jpg'), alt:'Confection', nameofres:'Dora Confec'},
        {url:require('../assets/images/fruits.jpg'), alt:'fruits', nameofres:'Bola Fruits'},
        {url:require('../assets/images/smallchops.webp'), alt:'smallchops', nameofres:'Ketty Chops'}
      ]
    }
  },
  methods: {
    sortedAsc(){
    this.foodimages.sort((a, b) => (a.nameofres > b.nameofres) ? 1 : -1)
  },
    sortedDsc(){
      this.foodimages.sort((a, b) => (a.nameofres < b.nameofres) ? 1 : -1)
    }
  },
  computed: {
    filteredList() {
      return this.foodimages.filter(image => {
        return image.nameofres.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>