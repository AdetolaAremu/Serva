<template>
  <section class="homehead sm:h-full md:h-full lg:h-screen">
    <Homeheader />
    <div class="px-5 mt-14">
      <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
         <div class="pb-5">
          <img class="border-0 border-pink-500 mix-blend-screen bg-pink-500 rounded-full" src="../assets/images/istockphoto.webp" alt="">
        </div>
        <div class="text-white mt-10">
          <p class="text-5xl font-bold">CHOOSE TO GET SERVED,</p>
          <p class="mt-5 text-4xl font-bold">BE SERVED.</p>
          <div class="sm:w-full md:w-full lg:w-7/12">
            <p class="mt-6">Choose to get served in the best possible way</p>
            <p class="mt-1">Your order will be delivered to your doorstep</p>
            <p class="mt-1">Choose from our wide varities of options</p>
            <p class="mt-1">
              Such as <span class="font-bold">Food</span>, <span class="font-bold">Groceries</span>, 
              <span class="font-bold">Pharmaceutial</span> and <span class="font-bold">Gadgets</span> deliveries
            </p>
          </div>
          <div>
            <a href='Buy' class="mr-5">
              <button class="mt-20 mb-4 w-36 h-14 rounded-lg font-bold border-white bg-blue-600 transform
                hover:scale-125 motion-reduce:transform transition delay-200 duration-300 ease-in-out"
              >
                SLIDE IN
              </button>
            </a>
            <a href='#'>
              <button class="mt-20 mb-4 w-32 h-12 rounded-lg font-bold border-1 bg-gray-600 transform
                hover:scale-105 motion-reduce:transform transition delay-200 duration-300 ease-in-out"
              >
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Homeheader from '../components/Homeheader'
export default {
  components:{Homeheader}
}
</script>

<style>
.homehead {
  background: rgb(202,8,208);
  background: linear-gradient(90deg, rgba(202,8,208,1) 19%, rgba(255,44,147,1) 70%, rgba(238,8,125,1) 94%);
}
</style>