<script setup>

import SkillBar from '@/components/skillBar.vue'

const Competences = [
  {
    langage: "HTML, CSS",
    percentage: "width : 70%",
  },
  {
    langage: "Vuejs",
    percentage: "width : 70%",
  },
  {
    langage: "JavaScript",
    percentage: "width : 70%",
  },
  {
    langage: "Python",
    percentage: "width : 80%",
  },
  {
    langage: "Java",
    percentage: "width : 60%",
  },
];


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
    <div class="bg-white text-left basis-2/3 p-5  overflow-y-hidden overflow-y-scroll animate-reveal">
      <div class="text-3xl  font-bold my-4 ml-2"><span class="text-[#5f240f] bg-gradient-to-r from-[#d9c4b6] to-transparent">About</span> Me :</div>
      <div class="text-sm ml-2 box-border flex inline-block">
        <div class="basis-2/3">
          <p class="my-4">
            D'abord attiré par les sciences j'ai poursuivi mes études en physique et
            je suis actuellement titulaire d'un master en physique théorique,
            spécialité : matière condensée. Une autre passion est née durant ma
            dernière expérience professionnelle, le codage. Par conséquent, j'ai
            décidé cette année d'intégrer l'école Epitech afin de poursuivre ma
            carrière en informatique.
          </p>
        </div>
        <div class=" grid grid-cols-2 basis-1/3 mx-2 ">
          <div class="my-4"><span class="text-white bg-[#5f240f] rounded px-1">Age.....</span></div>
          <div class="text-end my-4">25</div>
          <div class="my-4"><span class="text-white bg-[#5f240f] rounded px-1">Résidence.....</span></div>
          <div class="text-end my-4">Malzéville</div>
          <div class="my-4"><span class="text-white bg-[#5f240f] rounded px-1">Téléphone.....</span></div>
          <div class="text-end my-4">06.32.81.42.00</div>
        </div>
      </div>
      <div class="text-3xl font-bold my-4 ml-2"><span class="text-[#5f240f] bg-gradient-to-r from-[#d9c4b6] to-transparent">Mes</span> compétences :</div>
      <skillBar :datas="Competences" title="compétences" class="mx-2"></skillBar>
    </div>

  </div>
</template>



<style scoped>
</style>