<template>
    <div :class="{ 'hidden': active }" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <div class="w-full h-full bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 fixed lg:hidden top-0 z-10" @click.self="toggleSidebar"></div>
      <div class="w-fit bg-white h-full fixed flex lg:hidden top-0 z-20">
        <div class="w-full top-0 p-10 flex overflow-x-hidden overflow-y-auto">
          <div>
            <ul class="font-hanuman md:text-xl lg:text-2xl text-center text-nowrap mx-auto w-fit h-fit text-base sm:text-lg">
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

            <div class="mt-4 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-fit sm:text-lg">
              <div class="text_menu mt-10 pt-5"><i class="fa-solid fa-calendar-days"></i><div class="ml-2 md:ml-3">ឆ្នាំបោះពុម្ភទស្សនាវដ្ដីស្រាវជ្រាវ</div></div>
                <div>
                  <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto sm:text-base mt-3 rounded-lg">
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg" style="width:10%;"></div>
                  <div class="absolute h-full w-full text-center p-2">
                      ​ឆ្នាំ ២០២៤
                  </div>
                  </div>
                  <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto sm:text-base mt-3 rounded-lg ">
                      <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg" style="width:10%;"></div>
                      <div class="absolute h-full w-full text-center p-2">
                          ​ឆ្នាំ ២០២៣
                      </div>
                  </div>
                  <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto sm:text-base mt-3 rounded-lg ">
                      <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg" style="width:10%;"></div>
                      <div class="absolute h-full w-full text-center p-2">
                          ​ឆ្នាំ ២០២២
                      </div>
                  </div>
                  <div class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto sm:text-base mt-3 rounded-lg ">
                      <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg" style="width:10%;"></div>
                      <div class="absolute h-full w-full text-center p-2">
                          ​ឆ្នាំ ២០២១
                      </div>
                  </div>
                  <div class="border-t-2 border-b-2 mt-4 p-0">
                    <img src="../assets/img/logo/access.png" alt="" class="w-40 h-20 mx-auto">
                  </div>
                  <div class="mt-4 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-full sm:text-lg">
                    <div class="text_menu mt-10 pt-5"><i class="fa-solid fa-calendar-days"></i><div class="ml-2 md:ml-3">ការអំពាវនាវឯកសារ</div></div>
                    <div class=" font-hanuman md:text-xl text-nowrap text-sm sm:text-lg">
                      <div class="text-center text-blue-950 font-semibold">បោះពុម្ភ២ដងក្នុងមួយឆ្នាំ</div>
                        <ul class="list-disc ml-7 mt-3">
                          <li class="font-semibold">លើកទី១ ខែមិថុនា</li>
                          <li class="font-semibold mt-2">លើកទី២ ខែថ្នូ</li>
                        </ul>
                      </div>
                  </div>

                  <div class="mt-4 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-full text-sm sm:text-lg">
                    <div class="text_menu mt-10 pt-5"><i class="fa-solid fa-calendar-days"></i><div class="ml-2 md:ml-3">ដាក់ស្នើសាត្រាស្លឹករឹត</div></div>
                  </div>
                  <div class="flex text-usea_primary items-center text-left p-2 text-sm sm:text-lg md:text-xl"><i class="fa-solid fa-envelope"></i><div class="ml-2 md:ml-3">usea.rj@usea.edu.kh</div></div>
                  
                  <div class="bg-container_color mt-3 py-3 px-4 rounded-lg text-base">
                    <div class="flex gap-x-3 text-base font-hanuman">
                      <div class="text-sm"> Metrics: </div>
                      <div class="text-sm"><i class="fa-regular fa-eye"></i> 28 </div>
                      <div class="text-sm"><i class="fa-solid fa-file-arrow-down"></i> 14 </div>
                    </div>
                    <div>
                      <canvas ref="myChart" class="w-20"></canvas>
                    </div>
                  </div>
                  <!-- end navigation -->
                </div>

            </div>

          </div>
          <div class="text-xl left-0 text-active_color hover:text-usea_primary cursor-pointer sticky top-1" @click="toggleSidebar"><i class="fa-regular fa-circle-xmark"></i></div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
</template>
  
<script>
import Chart from 'chart.js/auto';
export default {
data() {
    return {
    active: false,
    activeMenu : null,
    startX: 0,
    endX: 0,
    translateX: 0
    }
},
mounted() {
  this.renderChart();
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
      if (this.translateX < -20) {
        toggleSidebar()
        console.log(work)
      }
      // Reset translateX
      this.translateX = 0;
    },
    toggleMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = null;
      } else {
        this.activeMenu = menu;
      }
    },
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['jan', 'feb', 'april', 'mar', 'apr', 'may'],
          datasets: [{
            label: 'Downloaded',
            data: [0, 0, 0, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },

}
}
</script>

<style scoped>

</style>
  