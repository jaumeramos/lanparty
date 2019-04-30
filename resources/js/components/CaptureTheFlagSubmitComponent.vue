<template>

    <v-card class="" v-if="mostrar != 'NoRegistrat'">
        <v-card-text class="px-0 mb-2">


        	<div class="msg">Entra la cadena amb el Flag trobat. </br>
        	Si és correcte s'acumularan els punts del Flag. </br>
        	Reviseu d'enganxar TOTS els caràcters. </div>

        	<div class="msg">
        		<form  @submit.prevent="submit">
                <div class="form-group">
                    <label for="flag">Flags:</label>
                    <input type="text" size="200" class="form-control" name="flag" id="flag" v-model="fields.flag" />
                    <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                </div>



              <button type="submit" class="btn btn-primary">Envia</button>
        		</form>
        	</div>
        </v-card-text>
      </v-card>

</template>

@font-face {
  font-family: 'Futurama Bold Font';
  font-style: normal;
  font-weight: normal;
  src: local('Futurama Bold Font'), url('/fonts/fr-bold.woff') format('woff');
}


input[type=text]{
  background-color: #ffffff !important;
}

.theme--light.v-sheet{
  background-color: transparent !important;
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

</style>


<script>
  export default {
    data () {
      return {
        fields: {},
        errors: {},
        }
    },
    methods: {
      submit() {
        console.log(this.fields)
        this.errors = {};
        axios.post('/ctfSubmit', this.fields).then(response => {
            alert("Flag Capturat!!!");
            window.location.reload();
          }).catch(error => {
            if (error.response.status === 422) {
              console.log(error.response)
              this.errors = error.response.data.errors || {};
            }
        });

      },
    },
    props: {
      mostrar: {
        required: true
      }
    }
  }
</script>
