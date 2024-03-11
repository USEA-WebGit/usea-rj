<template>
<div class="mb-5 md:left-0 md:mt-5 hidden md:block">
    <div class="w-fit sticky top-0 rounded-3xl bg-white px-10 py-10 shadow-md">
      <ul class="font-hanuman md:text-xl lg:text-xl xl:text-2xl text-center text-nowrap mx-auto w-fit text-sm sm:text-base">
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-house-chimney"></i> <div class="ml-2 md:ml-3">ទំព័រដើម</div></router-link>
          </li>
          <li class="menu">
            <router-link :to="{name : 'about'}" class="w-100 flex p-2 items-center"> <i class="fa-solid fa-bars"></i><div class="ml-2 md:ml-3 my-auto">អំពីទស្សនាវដ្ដីស្រាវជ្រាវ</div></router-link>
          </li>
          <li class="menu" @click="toggleMenu('home')">
            <i class="fa-solid fa-book-open"></i> <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div> <i class="ml-2 md:ml-3 fa-solid fa-angle-right"></i> <i class="ml-2 md:ml-3 fa-solid fa-angle-down"></i>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': activeMenu !== 'home'}">
            <ul>
              <li class="d-menu">ក្រុមព្រឹក្សាទស្សនាវដ្ដីស្រាវជ្រាវ</li>
              <li class="d-menu">គោលការណ៍នៃការបោះពុម្ភ</li>
              <li class="d-menu">ក្រមសីលធម៌នៃការបោះពុម្ភ</li>
              <li class="d-menu">អត្ថប្រយោជន៍នៃការណ៍បោះពុម្ភ</li>
            </ul>
          </div>
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-book"></i> <div class="ml-2 md:ml-3">សេចក្ដីណែនាំ</div> <i class="ml-2 md:ml-3 fa-solid fa-angle-right"></i> <i class="ml-2 md:ml-3 fa-solid fa-angle-down"></i></router-link>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': d_menu}">
            <ul>
              <li class="d-menu">សេចក្ដីណែនាំអ្នកនិពន្ធ</li>
              <li class="d-menu">សេចក្ដីណែនាំអ្នកត្រួតពិនិត្យ</li>
            </ul>
          </div>
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-spinner"></i> <div class="ml-2 md:ml-3">ដំណើរការ</div> <i class="ml-2 md:ml-3 fa-solid fa-angle-right"></i> <i class="ml-2 md:ml-3 fa-solid fa-angle-down"></i> </router-link>
          </li>
          <div class="text-sm md:text-base lg:text-lg bg-container_color rounded-md p-2" :class="{'hidden': d_menu}">
            <ul>
              <li class="d-menu">បញ្ជូនអត្ថបទស្រាវជ្រាវ</li>
              <li class="d-menu">ការត្រួពិនិត្យស្រាវជ្រាវ</li>
            </ul>
          </div>
          <li class="menu">
            <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-arrow-down-a-z"></i> <div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link>
          </li>
      </ul>
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