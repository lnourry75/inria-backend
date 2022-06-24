<template>
<b-container>
    <label for="pet-select">Sélection du quartier:</label><br>
<select v-model="utilisateur.quartier" name="pets" id="pet-select">
    <option value="">--Choisisser votre quartier--</option>
    <option value="Paris V - Saint-Victor/Jussieu">Paris V - Saint-Victor/Jussieu</option>
</select>
<br><br>
 <label for="n_days">Probabilité de transmission <b-icon  v-b-modal.transmi icon="exclamation-circle-fill" variant="info"></b-icon> : </label>
                  <b-form-input id="ptransmi" v-model="utilisateur.probabilité" type="range" min="0.005" max="0.9" step="0.005"></b-form-input>
    <br><br>
    <label for="pet-select">Choix des indicateurs épidémiologiques</label><br>
<select v-model="utilisateur.choix" name="pets" id="pet-select">
    <option value="Nombre de nouvelles contaminations(biais)">Nombre de nouvelles contaminations(biais)</option>
    <option value="Nombre total de contaminations">Nombre total de contaminations</option>
        <option value="Nombre total d'individus sains">Nombre total d'individus sains</option>
            <option value="Nombre de nouvelles contaminations">Nombre de nouvelles contaminations</option>
                <option value="Nombre d'individus contagieux">Nombre d'individus contagieux</option>
                    <option value="Nombre d'individus guéris">Nombre d'individus guéris</option>
</select>
<br><br>

 <label for="pet-select">Population</label><br>
<select v-model="utilisateur.population" name="pets" id="pet-select">
    <option value="Quartier">Quartier</option>
    <option value="Flux entrant">Flux entrant</option>
        <option value="Flux sortant">Flux sortant</option>
            <option value="Ecolier">Ecolier</option>
                <option value="Etudiant">Etudiant</option>
                    <option value="Actif">Actif</option>
                    <option value="Retraité">Retraité</option>
</select>
  <br><br>
<!-- <b-form-input placeholder="Nom" v-model="utilisateur.nom"/>
    <b-form-input placeholder="Prenom" v-model="utilisateur.prenom"/>
  <b-form-input placeholder="Email" type="email" v-model="utilisateur.email"/>
   <b-form-textarea
      id="textarea"
      v-model="utilisateur.description"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea> -->

    <b-button @click="enregistrer">Valider</b-button>

</b-container>
</template>

<script>
export default {
  name: 'MyFormulaire',
  data () {
    return {
      utilisateur: {}
    }
  },
  methods: {
    enregistrer () {
      console.log(this.utilisateur)

      this.utilisateur = {}
    }
  }
}
</script>

<style scoped>

</style>
