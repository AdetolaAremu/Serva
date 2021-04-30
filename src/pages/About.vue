<template>
  <Allheader />

  <section class="mt-3 px-5 mb-5">
    <div><p class="text-center text-2xl font-bold">ADETOLA, AREMU</p></div>
    <div><p class="text-center text-lg font-semibold">Location: Lagos, Nigeria.</p></div>
    <a href="mailto:{aremutola@gmail.com}" class="flex justify-center">
      <p class="font-bold p-2 text-red-600 text-lg sm:text-lg">SEND ME A MAIL</p>
    </a>

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
      <div><p class="font-semibold mt-2">SKILLED IN:</p></div>
      <div class="grid text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
        <p class="font-bold bg-green-600 text-white p-1 w-44 m-2 rounded-md hover:bg-green-800">VUE.JS</p>
        <p class="reactcol font-bold bg-gray-700 p-1 w-44 m-2 rounded-md hover:bg-gray-500">REACT (in-view)</p>
        <p class="font-bold bg-yellow-500 text-black p-1 w-44 m-2 rounded-md hover:bg-yellow-700">JAVASCRIPT</p>
        <p class="font-bold bg-red-400 text-black p-1 w-44 m-2 rounded-md hover:bg-red-600">HTML 5</p>
        <p class="font-bold bg-blue-600 text-white p-1 w-44 m-2 rounded-md hover:bg-blue-700">CSS 3</p>
        <p class="font-bold bg-gray-200 text-black p-1 w-44 m-2 rounded-md hover:bg-gray-100">TAILWIND CSS</p>
        <p class="font-bold bg-indigo-600 text-white p-1 w-44 m-2 rounded-md hover:bg-indigo-800">BOOTSTRAP 5</p>
        <p class="font-bold bg-gray-300 text-black p-1 w-44 m-2 rounded-md hover:bg-gray-500"><span class="text-blue-800">My</span><span class="text-yellow-500">SQL</span></p>
        <p class="font-bold bg-indigo-400 text-white p-1 w-44 m-2 rounded-md hover:bg-indigo-600">Panda (Python)</p>
        <p class="font-bold bg-indigo-400 text-white p-1 w-44 m-2 rounded-md hover:bg-indigo-600">Matplotlib (Python)</p>
      </div>
    </div>
    <div class="mt-4">
      <div class="container">
        <div class="slider-wrapper">
          I am Looking for a
          <div class="slider">
            <div class="text1">Full Time</div>
            <div class="text2">Contract</div>
            <div class="text3">Internship</div>
          </div>
          role
        </div>
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

<style scoped>
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

.slider-wrapper {
  font-size: 35px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider {
  height: 50px;
  overflow: hidden;
  padding: 0 10px;
}

.slider > div {
  box-sizing: border-box;
  color: #FFF;
  height: 50px;
  margin-bottom: 50px;
  padding: -1px s10px;
  text-align: center;
}

.text1 {
  background-color: #2ed573;
  animation: slide 5s linear infinite;
}

.text2 {
  background-color: #ffa502;
}

.text3 {
  background-color: #ff4757;
}

@keyframes slide {
  0% { margin-top: -300px; }
  5% { margin-top: -200px; }
  33% { margin-top: -200px; }
  38% { margin-top: -100px; }
  66% { margin-top: -100px; }
  72% { margin-top: -0; }
  100% { margin-top: 0; }
}

@media (max-width: 640px) {
  .slider-wrapper {
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .slider {
    height: 30px;
    overflow: hidden;
    padding: 0 10px;
    margin: 6px 0px;
  }
}
</style>