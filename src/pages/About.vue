<template>
  <Allheader />

  <section class="mt-3 px-5 mb-5">
    <div><p class="text-center text-2xl font-bold">Adetola, AREMU</p></div>
    <div><p class="text-center text-lg font-semibold">Location: Lagos, Nigeria.</p></div>
    <div class="flex justify-between mt-5">
      <div class="font-semibold text-gray-700 mt-3">
        <p>The framework used in developing this website is <span class="font-bold bg-green-600 text-white p-1 rounded-md">VUE.JS</span></p>
        <p class="mt-3">Adetola is a well organized and hardworking individual with expertise in:</p>
        <p class="uppercase font-bold mt-3">Frontend Web Development.</p>
        <p class="uppercase font-bold mt-3">Data Analytics.</p>
      </div>
      <div class="swing">
        <img class="ppix rounded-md h-52 w-72" src="../assets/images/profilepix.webp" alt="profilepicture">
      </div>
    </div>
    <div>
      <div><p class="font-semibold">SKILLED IN:</p></div>
      <div class="grid grid-cols-5 text-center">
        <p class="font-bold bg-green-600 text-white p-1 w-44 m-2 rounded-md">VUE.JS</p>
        <p class="reactcol font-bold bg-gray-700 p-1 w-44 m-2 rounded-md">REACT (in-view)</p>
        <p class="font-bold bg-yellow-500 text-black p-1 w-44 m-2 rounded-md">JAVASCRIPT</p>
        <p class="font-bold bg-red-400 text-black p-1 w-44 m-2 rounded-md">HTML 5</p>
        <p class="font-bold bg-blue-600 text-white p-1 w-44 m-2 rounded-md">CSS 3</p>
        <p class="font-bold bg-gray-200 text-black p-1 w-44 m-2 rounded-md">TAILWDIND CSS</p>
        <p class="font-bold bg-indigo-600 text-white p-1 w-44 m-2 rounded-md">BOOTSTRAP 5</p>
        <p class="font-bold bg-gray-300 text-black p-1 w-44 m-2 rounded-md"><span class="text-blue-800">My</span><span class="text-yellow-500">SQL</span></p>
        <p class="font-bold bg-indigo-400 text-white p-1 w-44 m-2 rounded-md">Panda (Python)</p>
        <p class="font-bold bg-indigo-400 text-white p-1 w-44 m-2 rounded-md">Matplotlib (Python)</p>
      </div>
    </div>
  </section>

  <Allfooter />
</template>

<script>
import Allheader from '../components/Allheader'
import Allfooter from '../components/Allfooter'
export default {
  components:{Allheader, Allfooter}
}
</script>

<style>
.reactcol{
  color:aqua
}

.swing {
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float:left;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
.swing img {
    border: 5px solid #f8f8f8;
    display: block;
}
.swing:after{
    content: '';
    position: absolute;  
    width: 20px; height: 20px;  
    border: 1px solid #999;
    top: -10px; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
}
/* nail */
.swing:before{
    content: '';
    position: absolute;
    width: 5px; height: 5px;
    top: -14px;left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
}
 
@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}

/* 
@keyframes swing {
  0%, 100% { transform: rotate(-20deg); }
  20% {transform:scale(.95);}
  50% { transform: rotate(20deg); }
  80% {transform:scale(.95);}
}

.ppix {
  animation: swing 2s infinite ease-in-out;
} */


</style>