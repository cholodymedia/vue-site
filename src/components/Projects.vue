<template>
    <div class="projects-wrapper">
      <SingleProject
      v-for="item in myJson"
      :key="item.id"
      :bgcolor="item.color"
      :title="item.title"
      :description="item.description"
      :img="item.img"
      :github_state="item.github_state"
      :github_link="item.github_link"
      :website_state="item.website_state"
      :website_link="item.website_link"
      class="single-project"
      />
    </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue';
import json from '@/data.json';

export default {
  name: 'Projects',
  components: {
    SingleProject,
  },
  data() {
    return {
      myJson: json.projects,
    };
  },
};
</script>

<style lang="scss" scoped>
  .projects-wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100vw;
    height: auto;
    background: #262727;
    display: grid;
    grid-template-rows: repeat(6, 70vh);
    grid-template-columns: 1fr;
    grid-gap: 40px;
    justify-content: space-evenly;
    .single-project{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70vh;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 55vh);
      grid-gap: 0px;
      .single-project{
        height: 55vh;
      }
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(2, 90vh);
      .single-project{
        height: 90vh;
      }
    }
  }
</style>
