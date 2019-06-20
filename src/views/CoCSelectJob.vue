<template lang="pug">
#select_job
	v-container
		v-layout(row wrap)
			v-flex(xs4 v-for="job in job_list" @click="apply_job(job)")
				router-link(to="/coc_character")
					v-card.pa-4(flat height="200" color="transparent" :class="{ hovered: hover === job.name}" @mouseenter="hover = job.name" @mouseleave="hover = ''")
						v-layout(justify-center wrap)
							v-icon.card-icon(x-large) {{ job.icon }}
						v-layout
							v-card-title.mx-auto
								h4.card-title {{ job.name }}

</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      hover: "",
      job_list: [
        {
          name: "ビジネスマン",
          icon: "card_travel",
          abilities: [0, 10, 15, 20, 27, 39, 43, 44],
          description: "ほかの言語（任意）"
        },
        {
          name: "セールスマン",
          icon: "card_travel",
          abilities: [0, 2, 12, 13, 21, 27, 39, 47],
          description: "芸術（演技）"
        },
        {
          name: "接客業",
          icon: "sentiment_satisfied_alt",
          abilities: [0, 5, 11, 13, 21, 27, 39, 47],
          description: ""
        },
        {
          name: "執事，メイド",
          icon: "room_service",
          abilities: [3, 11, 13, 21, 24, 27, 44, 47],
          description: ""
        },
        {
          name: "料理人",
          icon: "restaurant",
          abilities: [6, 24, 26, 40, 44, 47, 49],
          description: "製作（料理），歴史（料理）"
        },
        {
          name: "職人",
          icon: "build",
          abilities: [2, 10, 18, 24, 32, 36, 37, 47],
          description: ""
        },
        {
          name: "ハードウェアエンジニア",
          icon: "devices_other",
          abilities: [10, 15, 18, 32, 33, 37, 41, 44],
          description: "ほかの言語（英語）"
        },
        {
          name: "ソフトウェアエンジニア",
          icon: "desktop_mac",
          abilities: [0, 13, 15, 24, 32, 37, 41, 44],
          description: "製作（ソフトウェア），ほかの言語（英語）"
        },
        {
          name: "ガードマン",
          icon: "pan_tool",
          abilities: [3, 5, 46, 47, 51, 52, 53, 54],
          description: "ガタイを活かした仕事なら何でも"
        },
        {
          name: "カメラマン",
          icon: "photo_camera",
          abilities: [0, 2, 7, 10, 17, 20, 38, 47],
          description: ""
        },
        {
          name: "私立探偵",
          icon: "search",
          abilities: [0, 2, 7, 9, 21, 31, 37, 43, 47],
          description: ""
        },
        {
          name: "ジャーナリスト",
          icon: "whatshot",
          abilities: [0, 17, 21, 27, 37, 44, 45, 49],
          description: "ほかの言語（任意）"
        },
        {
          name: "店主",
          icon: "store_mall_directory",
          abilities: [0, 2, 11, 13, 20, 27, 39],
          description: ""
        },
        {
          name: "水産業従事者",
          icon: "directions_boat",
          abilities: [10, 18, 23, 28, 34, 38, 40, 47],
          description: "操縦（船舶）"
        },
        {
          name: "農林業従事者",
          icon: "nature_people",
          abilities: [3, 10, 24, 31, 32, 40, 47],
          description: "製作（農林系から任意）"
        },
        {
          name: "パイロット",
          icon: "flight",
          abilities: [10, 18, 28, 32, 34, 38, 41, 44],
          description: "ほかの言語（任意）"
        },
        {
          name: "医師",
          icon: "local_hospital",
          abilities: [1, 3, 20, 21, 25, 26, 44, 48],
          description: "ほかの言語（ラテン語）"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("CoC", ["apply_job"])
  }
};
</script>

<style lang="stylus" scoped>
#select_job
  color white
  background-color indigo
  padding-bottom 10vh
  overflow hidden

.hovered .card-icon, .hovered .card-title
  color yellow

.hovered .card-icon
	padding none

.hovered .card-title
	font-size 22px
</style>

