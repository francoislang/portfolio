<script setup>

</script>

<template>
  <div class="flex inline-block static ">
    <div class="absolute grid grid-cols-1 place-items-center p-3 text-[#5f240f] bg-[#d9c4b6]  top-0 -left-2/20 z-10">
      <router-link to="/MainPage"  class="grid grid-cols-1 place-items-center hover:text-white">
        <fa icon="fa-solid fa-user my-2"  />
        <span class="">About</span>
      </router-link>
      <router-link to="/WorkPage" class="grid grid-cols-1 place-items-center hover:text-white">
        <fa icon="fa-solid fa-briefcase" class="my-2" />
        <span>Work</span>
      </router-link>
      <router-link to="/ResumePage" class="grid grid-cols-1 place-items-center hover:text-white" >
        <fa icon="fa-solid fa-file" class="my-2" />
        <span>Resume</span>
      </router-link>
      <router-link to="/ContactPage" class="grid grid-cols-1 place-items-center hover:text-white">
        <fa icon="fa-solid fa-at" class="my-2"/>
        <span>Contact</span>
      </router-link>
    </div>

    <div class=" bg-white drop-shadow-xl scale-110  flex-row basis-1/3 ">
      <img class="scale-50 border-4 border-[#5f240f] rounded-full" src="@/assets/photo_cv_uploaded.jpg" alt="">
      <ul class="">
        <li class="pt-4 text-2xl font-bold bg-white">François-Frédéric Lang</li>
        <li class="pt-4 font-bold text-[#5f240f] bg-white">Etudiant Epitech Nancy</li>
        <li class="py-4 bg-white" >
          <fa class="hover:scale-125" icon="fa-brands fa-facebook" />
          <fa class="hover:scale-125 mx-2" icon="fa-brands fa-linkedin" />
          <fa class="hover:scale-125" icon="fa-brands fa-github" />
        </li>
      </ul>
      <div class="bg-white flex justify-end rounded-b-xl">
        <a class="text-[#5f240f]  px-1  hover:text-[#5f240f] mb-4 mr-4" href="mailto:langfrancoisfrederic@gmail.com">CONTACT ME
          <fa icon="fa-solid fa-arrow-right" /></a>
      </div>
    </div>
    <div class="grid grid-cols-1 bg-white text-left basis-2/3 p-5 overflow-y-hidden overflow-y-scroll animate-reveal">
      <div class="w-full h-full m-1">
        <div class="grid w-full h-fit grid-cols-2">
          <input type="text" placeholder="Nom" class="p-2 basis-1/2 mr-3 border-b-2 border-[#5f240f] focus:placeholder-transparent outline-0">
          <input type="text" placeholder="Prénom" class="p-2 ml-3 basis-1/2 border-b-2 border-[#5f240f] focus:placeholder-transparent outline-0">
        </div>
        <div class="h-fit w-full">
          <input type="text" placeholder="Sujet" class="p-2 my-1 border-b-2 w-full border-[#5f240f] focus:placeholder-transparent outline-0 ">
        </div>
        <div class="h-fit w-full">
          <input type="email" placeholder="Mail" class="p-2 my-1 border-b-2 w-full border-[#5f240f] focus:placeholder-transparent outline-0">
        </div>
        <div class="w-full h-1/2 mt-4">
          <textarea type="text" placeholder="Votre message..." class="p-2 bg-[#d9c4b6] placeholder-white text-white h-full w-full max-h-full focus:placeholder-transparent outline-0 "></textarea>
        </div>
        <div class="grid place-items-center h-fit text-[#5f240f] mt-5 ">
          <button class="border-none focus:outline-0 hover:bg-[#d9c4b6] hover:text-white hover:animate-pulse p-2">Envoyer</button>
        </div>
      </div>

    </div>
  </div>
</template>



<style scoped>
</style>