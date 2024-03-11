<template>
    <div :class="{ 'hidden': active }" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <div class="w-full h-full bg-black opacity-15 fixed md:hidden top-0 z-10" @click.self="toggleSidebar"></div>
      <div class="w-8/12 bg-white h-full fixed flex md:hidden top-0 z-20">
        <div class="w-full sticky top-0 px-10 py-10 flex">
          <ul class="font-hanuman md:text-xl lg:text-2xl text-center text-nowrap mx-auto w-fit h-fit text-base sm:text-lg">
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-house-chimney"></i> <div class="ml-2 md:ml-3">ទំព័រដើម</div></router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'about'}" class="w-100 flex p-2 items-center"> <i class="fa-solid fa-bars"></i><div class="ml-2 md:ml-3 my-auto">អំពីទស្សនាវដ្ដីស្រាវជ្រាវ</div></router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-user-group"></i> <div class="ml-2 md:ml-3">ក្រុមព្រឹក្សាទស្សនាវដ្ដី</div></router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-book-open"></i> <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div></router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-book"></i> <div class="ml-2 md:ml-3"></div> សេចក្ដីណែនាំ</router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-spinner"></i> <div class="ml-2 md:ml-3">ដំណើរការ</div> </router-link>
            </li>
            <li class="menu">
              <router-link :to="{name : 'home'}" class="w-100 flex p-2 items-center"><i class="fa-solid fa-arrow-down-a-z"></i> <div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link>
            </li>
          </ul>
          <div class="text-xl left-0 text-active_color hover:text-usea_primary cursor-pointer" @click="toggleSidebar"><i class="fa-regular fa-circle-xmark"></i></div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
data() {
    return {
    active: true,
    startX: 0,
    endX: 0,
    translateX: 0
    }
},
methods: {
    toggleSidebar() {
    this.active = !this.active
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.endX = event.touches[0].clientX;
      this.translateX = this.endX - this.startX;
    },
    handleTouchEnd() {
      if (this.translateX < -50) {
        toggleSidebar()
        console.log(work)
      }
      // Reset translateX
      this.translateX = 0;
    }
}
}
</script>

<style>
</style>
  