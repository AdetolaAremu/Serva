<template>
  <section class="sm:h-full md:h-full lg:h-screen">
    <Allheader />
    <div>
      <div class="mt-16 text-center font-bold text-4xl"><p>Choose to be served</p></div>
      <div class="mt-5 grid grid-cols-2 text-white font-bold text-xl overflow-x-hidden">
        <a href="Getfood" class="bg-blue-500 h-44 rounded-md m-3 transform hover:scale-105 motion-reduce:transform-none 
            transition delay-200 duration-300 ease-in-out">
          <p class="text-center mt-16">FOOD</p>
        </a>
        <a href="#" class="bg-blue-500 h-44 rounded-md m-3 transform hover:scale-105 motion-reduce:transform-none 
          transition delay-200 duration-300 ease-in-out"
        >
          <p class="text-center mt-16">GROCERY</p>
        </a>
        <a href="#" class="bg-blue-500 h-44 rounded-md m-3 transform hover:scale-105 motion-reduce:transform-none 
          transition delay-200 duration-300 ease-in-out"
        >
          <p class="text-center mt-16">PHARMACY</p>
        </a>
        <a href="#" class="bg-blue-500 h-44 rounded-md m-3 transform hover:scale-105 motion-reduce:transform-none 
          transition delay-200 duration-300 ease-in-out"
        >
          <p class="text-center mt-16">HOME APPLIANCES</p>
        </a>
      </div>
    </div>
    <Allfooter />
  </section>
</template>

<script>
import Allheader from '../components/Allheader'
import Allfooter from '../components/Allfooter'
export default {
  components:{Allheader, Allfooter}
}
</script>

<style>

</style>