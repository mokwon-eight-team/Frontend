<template>
  <v-container>
    <vue-title :title="pgTitle + ' | Vuesterplate'"></vue-title>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
       <h1>관리자 페이지 대시보드</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //
      pgTitle:"Page One"
    };
  },
  methods: {
    //
  }
};
</script>

<style>
</style>
