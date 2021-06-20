<template>
  <v-container>
    <vue-title :title="pgTitle"></vue-title>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-card>
          <v-data-table :headers="headers" :items="memList" class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.service_id }}</td>
              <td class="text-xs-left">{{ props.item.password }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.email }}</td>
              <td class="text-xs-right">{{ props.item.phone }}</td>
              <td class="text-xs-right">{{ props.item.birth }}</td>
              <td class="text-xs-right">{{ props.item.delivery_password }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { restApi } from "../../services/restServiceApi";
export default {
  data() {
    return {
      pgTitle: "member list",
      memList: [],
      loading: false,
      errored: false,
      errorText: "",
      headers: [
        // {
        //   text: "ID",
        //   value: "id",
        //   sortable: true,
        //   align: "center"
        // },
        { text: "ID", sortable: true, value: "service_id", align: "left" },
        { text: "passwd", value: "password", align: "right" },
        { text: "name", value: "name", align: "right" },
        { text: "email", value: "email", align: "right" },
        { text: "phone", value: "phone", align: "right" },
        { text: "birth", value: "birth", align: "right" },
        { text: "delivery_password", value: "delivery_password", align: "right" },
      ]
    };
  },
  mounted() {
    this.loading = true;
    this.getMemList();
  },
  methods: {
    getMemList: function() {
      restApi.getMemList().then(res => {
        console.log(res)        
        this.memList = res.data.users;
      })  
    }
  }
};
</script>

<style>
</style>
