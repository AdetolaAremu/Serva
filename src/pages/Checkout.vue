<template>
  <Appheader />

  <section>
    <div>
      
      <div class="text-center font-bold text-2xl mt-5"><p>SUMMARY AND CHECKOUT PAGE</p></div>

      <div v-show="currentstep === 1" class="bg-white h-full mt-10 font-semibold">
        <div><p class="text-center text-xl mb-6">Estimations</p></div>
        <form class="flex sm:px-7 md:px-10 lg:px-96">
          <div class="w-full">
            <div class="flex justify-between">
              <div>
                <label class="">Your Order</label>
              </div>
              <input disabled class="rounded border-black border h-8 w-7/12 
                focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="text" 
                v-model="order"
              >
            </div>
            <div class="flex justify-between mt-3">
              <div>
                <label class="">Quantities</label>
              </div>
              <input class="rounded border-black border h-8 w-7/12
                focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="number" 
                v-model="quantity"
              >
            </div>
              <div class="flex justify-between mt-3">
              <div>
                <label class="">Price</label>
              </div>
              <input disabled class="rounded border-black border h-8 w-7/12
                focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="text" 
                v-model="price" placeholder="1000"
              >
            </div>
          </div>
          </form>
          <div class="mr-5 text-center">
              <button class="border border-red-600 shadow-md text-gray-600 h-11 mr-2 px-2 py-1 w-28 rounded font-bold mt-6">BACK</button>
              <button class="bg-green-600 shadow-md h-11 mr-2 text-white px-2 py-1 w-28 rounded font-bold mt-6" @click.prevent="next()">CHECKOUT</button>
          </div>
        </div>

        <div v-show="currentstep === 2" class="h-full mt-10 font-semibold">
        <form class="flex sm:px-7 md:px-10 lg:px-96">
          <div class="w-full">
            <div><p class="text-center text-xl mb-6">Summary</p></div>
            <div class="flex justify-between">
              <div>
                <label class="">Your Order:</label>
              </div>
              <div><p class="text-sm">One wrap of Amala + One Tilapia Fish</p></div>
            </div>
            <div class="flex justify-between mt-3">
              <div>
                <label class="">Quantities:</label>
              </div>
              <div><p>{{ quantity }}</p></div>
            </div>
            <div class="flex justify-between mt-3">
              <div>
                <label class="">Delivery Fee:</label>
              </div>
              <div><p>N500</p></div>
            </div>
            <div class="flex justify-between mt-3">
              <div>
                <label class="">Total Cost:</label>
              </div>
              <input disabled class="rounded border-black border h-8 w-7/12
                focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="text" 
                :value="quantity * 1000 + 500" placeholder="1000"
              >              
            </div>
          </div>
          </form>
          <div class="mr-5 text-center">
              <button class="border border-red-600 shadow-md text-gray-600 h-11 mr-2 px-2 py-1 w-28 rounded font-bold mt-6" @click.prevent="previous()">BACK</button>
              <button class="bg-green-600 shadow-md h-11 mr-2 text-white px-2 py-1 w-28 rounded font-bold mt-6">PAY</button>
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
    return{
      currentstep:1,
      order:'One wrap of Amala + One Tilapia Fish',
      quantity:'1',
      price:'1000',
      totalcost:'',
    }
  },
  methods:{
    next(){
      this.currentstep++
    },
    previous(){
      this.currentstep--
    }
  }
}
</script>

<style>

</style>