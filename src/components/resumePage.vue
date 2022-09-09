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
        <div class="py-3 text-3xl font-bold">MSC pro spécialité: intelligence artificielle</div>
        <div class="py-2  text-2xl text-[#5f240f]">Epitech Nancy</div>
        <div class="py-2 italic text-xl">2022-2025</div>
        <div>
          <p>
            Actuellement étudiant à l'école Epitech. J'ai choisis cette formation afin de pouvoir
            à la suite de mes études me spécialisé dans l'intelligence artificielle.
          </p>
        </div>
      </div>

      <div class="w-full h-fit p-5 my-2 bg-white  ">
        <div class="py-3 text-3xl font-bold">Master physique théorique spécialité: matière condensée</div>
        <diV class="py-2 text-2xl text-[#5f240f]">Faculté des Sciences et technologies Nancy</diV>
        <div class="py-2 italic text-xl">2021</div>
        <div>
          <p>
            Je me suis orienté en physique théorique par simple attirance pour les mathématiques. J'ai décidé de me spécialiser
            en matière condensée car cette discipline fait appel à tous les concepts de la mécanique quantique.
          </p>
        </div>
      </div>

      <div class="w-full h-fit p-5 my-2 bg-white ">
        <div class="py-3 text-3xl font-bold">Licence Physique-chimie, spécialité : physique</div>
        <diV class="py-2 text-2xl text-[#5f240f]">Faculté des Sciences et technologies Nancy</diV>
        <div class="py-2 italic text-xl">2018</div>
        <div>
          <p>
            Durant mes cours de lycée, j'ai découvert un attrait particulier pour les mathématiques. D'une part pour sa capacité
            de démonstration et d'autre part pour sa beauté. Voulant comprendre les phénomènes qui nous entourent, je me suis
            naturellement orienté vers la physique.
          </p>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>