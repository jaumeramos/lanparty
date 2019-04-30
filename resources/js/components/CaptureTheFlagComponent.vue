<template>
    <v-card>
        <v-card-title class="white--text">
            <h2>Rànquing CTF INSEbre</h2>
        </v-card-title>
        <v-card-text class="px-0 mb-2">

            <v-data-table
              :headers="headers"
              :items="groups"
              hide-actions
              class="ctfTable"
            >
              <template v-slot:headers>
                  <th
                    v-for="header in headers"
                    :key="header.text"
                    class="ctfTable"
                  >
                    {{ header.text }}
                  </th>
              </template>
              <template v-slot:items="props">
                <tr>
                  <td>{{ props.index +1 }}</td>
                  <td>{{ props.item.points }}</td>
                  <td><a :href="'/ctfGroup/' +props.item.id">{{ props.item.name }}</a></td>
                  <td v-for="flag in props.item.flags">
                      <img v-if="flag==true" src="/img/green.png">
                      <img v-else src="/img/red.png">
                  </td>
                </tr>
              </template>
            </v-data-table>
        </v-card-text>

    </v-card>
</template>


<style>
@font-face {
  font-family: 'Futurama Title Font';
  font-style: normal;
  font-weight: normal;
  src: local('Futurama Title Font'), url('/fonts/fr-title.woff') format('woff');
}

@font-face {
  font-family: 'Futurama Bold Font';
  font-style: normal;
  font-weight: normal;
  src: local('Futurama Bold Font'), url('/fonts/fr-bold.woff') format('woff');
}

img{
  height: 42px;
  width: 42px;
}
input[type=text]{
  background-color: #ffffff !important;
}
.msg{
  font-family: "Futurama Bold Font", Monaco, monospace;
  font-size: 20px;
  width: 50%;
  text-align: center;
  margin-left: 10%;
  margin-right: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #bbdcb1;
  opacity: 0.8;

  border-radius: 25px;
  padding: 20px;
}
.theme--light.v-sheet{
  background-color: transparent !important;
}

.ctf {
  background-image: url("/img/futurama.jpg");
  font-family: "Futurama Title Font", Monaco, monospace;
  width: 100%;
  min-height: 550px !important;
}

.ctfTable {
  font-family: "Futurama Bold Font", Monaco, monospace;
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  width: 90%;
  text-align: center;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
.ctfTable td, .ctfTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
.ctfTable th {
  background-color: #bbdcb1;
}
.ctfTable tbody td {
  font-size: 13px;
}
.ctfTable tbody td.team{
  font-size: 19px;
  font-weight: bold;
  text-align: left;
}
.ctfTable tbody td.num{
  font-size: 21px;
  font-weight: bold;
}
.ctfTable tr:nth-child(even) {
  background: #E1F0E3;
}
.ctfTable thead {
  background: #507863;
  background: -moz-linear-gradient(top, #7c9a8a 0%, #618572 66%, #507863 100%);
  background: -webkit-linear-gradient(top, #7c9a8a 0%, #618572 66%, #507863 100%);
  background: linear-gradient(to bottom, #7c9a8a 0%, #618572 66%, #507863 100%);
  border-bottom: 2px solid #444444;
}
.ctfTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  border-left: 2px solid #D0E4F5;
}
.ctfTable thead th:first-child {
  border-left: none;
}

.container.fluid {
  max-width: 1680px !important;
}

</style>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Ranking', value: 'ranking' },
          { text: 'Points', value: 'points' },
          { text: 'Team', value: 'team' },
          { text: 'F1', value: 'f1' },
          { text: 'F2', value: 'f2' },
          { text: 'F3', value: 'f3' },
          { text: 'F4', value: 'f4' },
          { text: 'F5', value: 'f5' },
          { text: 'F6', value: 'f6' },
          { text: 'F7', value: 'f7' },
          { text: 'F8', value: 'f8' },
          { text: 'F9', value: 'f9' }
        ]
      }
    },
    props: {
      groups: {
        type: Array,
        required: true
      }
    }
  }
</script>
