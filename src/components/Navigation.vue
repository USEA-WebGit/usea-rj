<template>
<div class="mb-5 md:left-0 md:mt-5 hidden md:block">
    <div class="w-fit sticky top-0 rounded-3xl bg-white px-10 py-10 shadow-md">
      <ul class="font-hanuman md:text-xl lg:text-xl xl:text-2xl text-center text-nowrap w-fit text-sm sm:text-base">
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex items-center"><i class="fa-solid fa-house-chimney"></i> <div class="ml-2 md:ml-3">ទំព័រដើម</div></router-link>
          </li>
          <li class="menu">
            <router-link :to="{name : 'about'}" class="w-100 flex items-center"> <i class="fa-solid fa-bars"></i><div class="ml-2 md:ml-3 my-auto">អំពីទស្សនាវដ្ដីស្រាវជ្រាវ</div></router-link>
          </li>
          <li class="menu" @click="toggleMenu('home')">
            <i class="fa-solid fa-book-open"></i> <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div> <i v-if="activeMenu !== 'home'" class="ml-2 fa-solid fa-angle-down"></i> <i class="ml-2 md:ml-3 fa-solid fa-angle-right" v-else></i>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': activeMenu !== 'home'}">
            <ul>
              <li class="d-menu">ក្រុមព្រឹក្សាទស្សនាវដ្ដីស្រាវជ្រាវ</li>
              <li class="d-menu">គោលការណ៍នៃការបោះពុម្ភ</li>
              <li class="d-menu">ក្រមសីលធម៌នៃការបោះពុម្ភ</li>
              <li class="d-menu">អត្ថប្រយោជន៍នៃការណ៍បោះពុម្ភ</li>
            </ul>
          </div>
          <li class="menu" @click="toggleMenu('study')">
            <i class="fa-solid fa-book"></i> <div class="ml-2 md:ml-3">សេចក្ដីណែនាំ</div> <i v-if="activeMenu !== 'study'" class="ml-2 fa-solid fa-angle-down"></i> <i v-else class="ml-2 md:ml-3 fa-solid fa-angle-right"></i>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': activeMenu !== 'study'}">
            <ul>
              <li class="d-menu">សេចក្ដីណែនាំអ្នកនិពន្ធ</li>
              <li class="d-menu">សេចក្ដីណែនាំអ្នកត្រួតពិនិត្យ</li>
            </ul>
          </div>
          <li class="menu" @click="toggleMenu('check')">
           <i class="fa-solid fa-spinner"></i> <div class="ml-2 md:ml-3">ដំណើរការ</div> <i v-if="activeMenu !== 'check'" class="ml-2 fa-solid fa-angle-down"></i> <i v-else class="ml-2 md:ml-3 fa-solid fa-angle-right"></i>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': activeMenu !== 'check'}">
            <ul>
              <li class="d-menu">បញ្ជូនអត្ថបទស្រាវជ្រាវ</li>
              <li class="d-menu">ការត្រួពិនិត្យស្រាវជ្រាវ</li>
            </ul>
          </div>
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex items-center"><i class="fa-solid fa-arrow-down-a-z"></i> <div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link>
          </li>
      </ul>
      <div class="mt-3 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-fit text-sm sm:text-base">
        <div class="menu mt-10 pt-5"><i class="fa-solid fa-calendar-days"></i><div class="ml-2 md:ml-3">ឆ្នាំបោះពុម្ភទស្សនាវដ្ដីស្រាវជ្រាវ</div></div>
      </div>
      <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg ">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-700 rounded-s-lg" style="width:10%;"></div>
          <div class="absolute h-full w-full text-center p-2">
              ​ឆ្នាំ ២០២៤
          </div>
      </div>
      <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg ">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-700 rounded-s-lg" style="width:10%;"></div>
          <div class="absolute h-full w-full text-center p-2">
              ​ឆ្នាំ ២០២៣
          </div>
      </div>
      <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg ">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-700 rounded-s-lg" style="width:10%;"></div>
          <div class="absolute h-full w-full text-center p-2">
              ​ឆ្នាំ ២០២២
          </div>
      </div>
      <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg ">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-700 rounded-s-lg" style="width:10%;"></div>
          <div class="absolute h-full w-full text-center p-2">
              ​ឆ្នាំ ២០២១
          </div>
      </div>

    </div>
</div>
</template> 

<script>
export default {
  data() {
    return {
      isActive: false,
      activeMenu : null,
    };
  },
  methods: {
    toggleMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = null;
      } else {
        this.activeMenu = menu;
      }
    }
  }
};

</script>

<style>

</style>