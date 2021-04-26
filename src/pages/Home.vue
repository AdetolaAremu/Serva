<template>
  <section class="homehead sm:h-full md:h-full lg:h-screen">
    <Homeheader />
    <div class="px-5 mt-14">
      <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
         <div class="pb-5">
          <img class="border-0 border-pink-500 mix-blend-screen bg-pink-500 rounded-full" src="../assets/images/istockphoto.jpg" alt="">
        </div>
        <div class="text-white mt-10">
          <p class="text-5xl font-bold">CHOOSE TO GET SERVED,</p>
          <p class="mt-5 text-4xl font-bold">BE SERVED.</p>
          <div class="sm:w-full md:w-full lg:w-7/12">
            <p class="mt-6">Pick to get served in the best possible way</p>
            <p class="mt-1">Your order will be delivered to your doorstep</p>
            <p class="mt-1">Choose from our wide varities of our services</p>
            <p class="mt-1">
              Such as <span class="font-bold">Food</span>, <span class="font-bold">Groceries</span>, 
              <span class="font-bold">Pharmaceutial</span> and <span class="font-bold">Home Appliances</span> deliveries
            </p>
          </div>
          <a href='Buy'>
            <button class="mt-20 mb-4 w-28 h-10 rounded-lg font-bold border-white bg-blue-600">
              SLIDE IN
            </button>
          </a>
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
  background: linear-gradient(90deg, rgba(202,8,208,1) 19%, rgba(231,150,230,1) 40%, rgba(255,44,147,1) 70%, rgba(238,8,125,1) 94%);
}
</style>