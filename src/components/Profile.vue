<template>
  <div class="Profile">
    <div class="dropdown-menu">
      <v-container fluid>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="12">
            <v-select :items="items" filled label="SELECT" dense></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="msg">{{ msg }}</div>
            <br />
            <a href="https://github.com/yoitsu1838">https://github.com/yoitsu1838</a >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  //受け口
  props: {
    msg: String,
  },
  data: () => ({
    items: ["SELECT１", "SELECT2", "SELECT3"],
  }),
};
</script>

<style scoped>
.msg {
  font-size: 30px;
}
</style>