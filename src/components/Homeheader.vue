<template>
  <section class="flex text-white justify-between pt-5 px-8 font-bold h-10">
    <a href="/"><div class="mr-4">SERVA</div></a>
    <ul class="top flex">
      <a href="About"><li class="mr-4">About</li></a>
      <a href="Buy"><li class="mr-4">Order</li></a>
      <a href="https://github.com/AdetolaAremu" target="_blank"><li class="mr-4">Github</li></a>
      <a href="Dashboard"><li class="mr-4">Admin</li></a>
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