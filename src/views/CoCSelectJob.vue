<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(xs3 v-for="job in job_list")
        v-card(@click="router.push('coc_character')")
          v-img(src="job.icon")
          v-card-title(primary-title)
            h1.headline {{ job.name }}
</template>
