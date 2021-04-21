<template>
  <section class="flex text-white justify-between pt-5 px-10 font-bold h-10">
    <div>SERVA</div>
    <ul class="top flex">
      <a href="/"><li class="mr-5">Home</li></a>
      <a href="Buy"><li class="mr-5">Order</li></a>
      <a href="About"><li class="mr-5">About</li></a>
      <a href="Contact"><li class="mr-5">Contact</li></a>
    </ul>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>
.top a:hover:after {
  content:"";
  color:#212121;
  display:block;
  width:20px;
  margin:2px 16px;
  border-bottom:3px solid white;
  transition: all 1s ease-in-out;
}
</style>