<script setup>
</script>

<template>
<div class="flex inline-block static ">
  <div class="absolute grid grid-cols-1 place-items-center p-3 text-[#5f240f] bg-white rounded top-0 -left-2/20 z-10">
    <router-link to="/MainPage"  class="grid grid-cols-1 place-items-center hover:text-[#5f240f]">
      <fa icon="fa-solid fa-user my-2"  />
      <span class="">About</span>
    </router-link>
    <router-link to="/WorkPage" class="grid grid-cols-1 place-items-center hover:text-[#5f240f]">
      <fa icon="fa-solid fa-briefcase" class="my-2" />
      <span>Work</span>
    </router-link>
    <router-link to="/ResumePage" class="grid grid-cols-1 place-items-center hover:text-[#5f240f]" >
      <fa icon="fa-solid fa-file" class="my-2" />
      <span>Resume</span>
    </router-link>
    <router-link to="/ContactPage" class="grid grid-cols-1 place-items-center hover:text-[#5f240f]">
      <fa icon="fa-solid fa-at" class="my-2"/>
      <span>Contact</span>
    </router-link>
  </div>

  <div class=" bg-white drop-shadow-xl scale-110 rounded-xl flex-row basis-1/3 ">
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
      <a class="text-[#5f240f] rounded-full px-1 hover:translate-x-1.5 hover:transition-colors- hover:text-[#5f240f] mb-4 mr-4" href="mailto:langfrancoisfrederic@gmail.com">CONTACT ME
        <fa icon="fa-solid fa-arrow-right" /></a>
    </div>
  </div>
  <div class="bg-white text-left basis-2/3 p-5 rounded-xl grid grid-cols-1 overflow-y-hidden overflow-y-scroll ">
    <div class="w-full h-fit p-6 bg-white ">
      <div class="py-3 text-3xl font-bold">Portfolio</div>
      <div class="italic text-2xl py-2 text-[#5f240f]">Outils utilisés : Vuejs, HTML, CSS, JavaScript</div>
      <div>
        <p>
          Projet personnel ayant pour but de m'initier à Vuejs et d'apprendre les langages web.
        </p>
      </div>
    </div>

    <div class="w-full h-fit p-5 my-2 bg-white ">
      <div class="py-3 text-3xl font-bold">Super Mario Bros</div>
      <div class="py-2 italic text-2xl text-[#5f240f]">Outils : Java</div>
      <div>
        <p>
          Afin d'étudier le langage Java, j'ai réalisé, à l'aide d'un tutoriel, un niveau similaire à ceux disponibles sur Super Mario Bros.
        </p>
      </div>

    </div>

    <div class=" flex flex-row w-full h-fit p-5 my-2 bg-white">
      <div class="basis-2/3">
        <div class="py-3 text-3xl font-bold ">Neurone simple</div>
        <div class="py-2 text-2xl italic text-[#5f240f]">Outils : Python</div>
        <div>
          <p>
          Pour apprendre les bases de l'intelligence artificielle, j'ai codé un neurone simple permettant de distinguer
          si une plante est toxique ou non.
          </p>
        </div>
      </div>
      <img src="@/assets/decision_boundary_single_neuron.png" class="w-1/2 h-1/2" >
    </div>
  </div>
</div>

</template>

<style scoped>

</style>