<template>
  <div class="mb-5 md:left-0 md:mt-20 hidden lg:block">
    <div class="w-fit sticky top-0 rounded-3xl bg-white p-6 shadow-md">
      <ul
        class="font-hanuman md:text-xl lg:text-xl xl:text-2xl text-center text-nowrap w-fit text-sm sm:text-base mx-auto w-full"
      >
        <li class="menu">
          <router-link :to="{ name: 'home' }" class="w-100 flex items-center">
            <i class="fa-solid fa-house-chimney"></i>
            <div class="ml-2 md:ml-3">ទំព័រដើម</div>
          </router-link>
        </li>
        <li class="menu">
          <router-link :to="{ name: 'about' }" class="w-100 flex items-center">
            <i class="fa-solid fa-bars"></i>
            <div class="ml-2 md:ml-3 my-auto">
              អំពីទស្សនាវដ្ដីស្រាវជ្រាវ
            </div></router-link
          >
        </li>
        <li class="menu" @click="toggleMenu('home')">
          <i class="fa-solid fa-book-open"></i>
          <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div>
          <i
            v-if="activeMenu !== 'home'"
            class="ml-2 fa-solid fa-angle-down"
          ></i>
          <i class="ml-2 md:ml-3 fa-solid fa-angle-right" v-else></i>
        </li>
        <div class="ml-5 list-menu" :class="{ show: activeMenu == 'home' }">
          <li class="menu">
            <router-link :to="{ name: 'journal-board' }">
              ក្រុមព្រឹក្សាទស្សនាវដ្ដីស្រាវជ្រាវ
            </router-link>
          </li>
          <li class="menu">
            <router-link :to="{ name: 'publication-policy' }">
              គោលការណ៍នៃការបោះពុម្ភ
            </router-link>
          </li>
          <li class="menu">
            <router-link :to="{ name: 'publication-ethics' }">
              ក្រមសីលធម៌នៃការបោះពុម្ភ
            </router-link>
          </li>
          <li class="menu">
            <router-link :to="{ name: 'publication-benefit' }">
              អត្ថប្រយោជន៍នៃការណ៍បោះពុម្ភ
            </router-link>
          </li>
        </div>
        <li class="menu" @click="toggleMenu('study')">
          <i class="fa-solid fa-book"></i>
          <div class="ml-2 md:ml-3">សេចក្ដីណែនាំ</div>
          <i
            v-if="activeMenu !== 'study'"
            class="ml-2 fa-solid fa-angle-down"
          ></i>
          <i v-else class="ml-2 md:ml-3 fa-solid fa-angle-right"></i>
        </li>
        <div class="ml-5 list-menu" :class="{ show: activeMenu == 'study' }">
          <li class="menu">សេចក្ដីណែនាំអ្នកនិពន្ធ</li>
          <li class="menu">សេចក្ដីណែនាំអ្នកត្រួតពិនិត្យ</li>
        </div>
        <li class="menu" @click="toggleMenu('check')">
          <i class="fa-solid fa-spinner"></i>
          <div class="ml-2 md:ml-3">ដំណើរការ</div>
          <i
            v-if="activeMenu !== 'check'"
            class="ml-2 fa-solid fa-angle-down"
          ></i>
          <i v-else class="ml-2 md:ml-3 fa-solid fa-angle-right"></i>
        </li>
        <div class="ml-5 list-menu" :class="{ show: activeMenu == 'check' }">
          <li class="menu">បញ្ជូនអត្ថបទស្រាវជ្រាវ</li>
          <li class="menu">ការត្រួពិនិត្យស្រាវជ្រាវ</li>
        </div>
        <li class="menu">
          <router-link :to="{ name: 'home' }" class="w-100 flex items-center"
            ><i class="fa-solid fa-arrow-down-a-z"></i>
            <div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link
          >
        </li>
      </ul>
      <div
        class="mt-4 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-fit text-sm sm:text-base"
      >
        <div class="text_menu mt-10 pt-5">
          <i class="fa-solid fa-calendar-days"></i>
          <div class="ml-2 md:ml-3">ឆ្នាំបោះពុម្ភទស្សនាវដ្ដីស្រាវជ្រាវ</div>
        </div>
      </div>
      <div
        class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg"
          style="width: 10%"
        ></div>
        <div class="absolute h-full w-full text-center p-2">​ឆ្នាំ ២០២៤</div>
      </div>
      <div
        class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg"
          style="width: 10%"
        ></div>
        <div class="absolute h-full w-full text-center p-2">​ឆ្នាំ ២០២៣</div>
      </div>
      <div
        class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg"
          style="width: 10%"
        ></div>
        <div class="absolute h-full w-full text-center p-2">​ឆ្នាំ ២០២២</div>
      </div>
      <div
        class="relative w-7/12 h-10 bg-gray-200 text-usea_primary font-hanuman md:text-xl text-nowrap mx-auto text-sm sm:text-base mt-3 rounded-lg"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-s-lg"
          style="width: 10%"
        ></div>
        <div class="absolute h-full w-full text-center p-2">​ឆ្នាំ ២០២១</div>
      </div>

      <div class="border-t-2 mt-4"></div>
      <div>
        <img src="../assets/img/logo/access.png" alt="open access" />
      </div>
      <div
        class="mt-4 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-full text-sm sm:text-base"
      >
        <div class="text_menu mt-10 pt-5">
          <i class="fa-solid fa-calendar-days"></i>
          <div class="ml-2 md:ml-3">ការអំពាវនាវឯកសារ</div>
        </div>
        <div class="font-hanuman md:text-xl text-nowrap text-sm sm:text-base">
          <div class="text-center text-blue-950 font-semibold">
            បោះពុម្ភ២ដងក្នុងមួយឆ្នាំ
          </div>
          <ul class="list-disc ml-7 mt-3">
            <li class="font-semibold">លើកទី១ ខែមិថុនា</li>
            <li class="font-semibold mt-2">លើកទី២ ខែថ្នូ</li>
          </ul>
        </div>
      </div>
      <div
        class="mt-4 border-t-2 font-hanuman md:text-xl lg:text-xl xl:text-2xl text-nowrap mx-auto h-full w-full text-sm sm:text-base"
      >
        <div class="text_menu mt-10 pt-5">
          <i class="fa-solid fa-calendar-days"></i>
          <div class="ml-2 md:ml-3">ដាក់ស្នើសាត្រាស្លឹករឹត</div>
        </div>
      </div>
      <div
        class="flex text-usea_primary items-center text-left p-2 text-sm sm:lg md:text-xl"
      >
        <i class="fa-solid fa-envelope"></i>
        <div class="ml-2 md:ml-3">usea.rj@usea.edu.kh</div>
      </div>

      <div class="bg-container_color mt-3 py-3 px-4 rounded-lg">
        <div class="flex gap-x-3">
          <div>Metrics:</div>
          <div><i class="fa-regular fa-eye"></i> 28</div>
          <div><i class="fa-solid fa-file-arrow-down"></i> 14</div>
        </div>

        <div class="mt-2">
          <canvas ref="myChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  data() {
    return {
      isActive: false,
      activeMenu: null,
      myChart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    toggleMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = null;
      } else {
        this.activeMenu = menu;
      }
    },
    renderChart() {
      const ctx = this.$refs.myChart.getContext("2d");
      this.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["jan", "feb", "april", "mar", "apr", "may"],
          datasets: [
            {
              label: "Downloaded",
              data: [0, 0, 0, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  },
};
</script>

<style>
.list-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.list-menu.show {
  max-height: 400px; /* Adjust the max-height value as needed */
}
</style>
