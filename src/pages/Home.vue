<template>
  <section class="homehead sm:h-full md:h-full lg:h-screen">
    <Homeheader />
    <div class="px-10">
      <div class="grid grid-cols-2 mt-20">
        <div class="text-white">
          <p class="text-5xl font-bold">CHOOSE TO GET SERVED,</p>
          <p class="mt-5 text-4xl font-bold">BE SERVED.</p>
          <div class="w-7/12">
            <p class="mt-6">Pick to get served in the best possible way</p>
            <p class="mt-1">Your order will be delivered to your doorstep</p>
            <p class="mt-1">Choose from our wide varities of our services</p>
            <p class="mt-1">
              Such as <span class="font-bold">Food</span>, <span class="font-bold">Groceries</span>, 
              <span class="font-bold">Pharmaceutial</span> and <span class="font-bold">Home Appliances</span> deliveries
            </p>
          </div>
        <button 
            class="mt-20 w-28 h-10 rounded-full border-2 font-bold border-white"
          >
            SLIDE IN
          </button>
        </div>
        <div class="pb-5">
          <img class="border-0 border-pink-500 mix-blend-screen bg-pink-500 rounded-full" src="../assets/images/istockphoto.jpg" alt="">
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
  background: linear-gradient(90deg, rgba(202,8,208,1) 19%, rgba(231,150,230,1) 55%, rgba(255,44,147,1) 70%, rgba(238,8,125,1) 94%);
}
</style>