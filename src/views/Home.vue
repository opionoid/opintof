<template lang="pug">
#top-bg
	#top
		v-container
			v-layout.pa-4(justify-center text-xs-center)
				#title
					h1.display-4 CoC
					h1.display-2 きゃらんだむ
			v-layout.pa-4(justify-center)
				router-link(to="/coc_select_job")
					.btn
						span.font-weight-bold つくる
</template>

<script>
export default {
  data() {
    return {
      trpg: "くとぅるふ"
    };
  }
};
</script>

<style lang="stylus" scoped>
#top-bg
  background-color yellow

#top
  width 100vw
  height 100vh
  overflow hidden
  color rgb(245, 245, 245)
  background-color indigo
  padding-top 20vh
  clip-path: polygon(0 24%, 15% 0, 100% 0, 100% 76%, 85% 100%, 0 100%)

.btn > span {
  font-size 3rem
}

.btn {
  width: 280px;
  height: 180px;
  line-height: 180px;
  text-align: center;
  cursor: pointer;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.btn:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}

.btn:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
</style>