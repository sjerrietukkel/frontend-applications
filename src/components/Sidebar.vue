<template>
 <div class="risico-container">
   <div class="profile-container">
       <div class="tile profile-tile">
         <h1>Risico indicatie</h1>
         <div class="result">
           <h3>0.078%</h3>
         </div>

         <p><strong>Gebruiksaanwijzing</strong><p>
           <p>Vul alle vragen in door de juiste opties te selecteren en druk vervolgens op "Geef risico indicatie" om een risico indicatie te krijgen.</p>
           <a src="/" class="save-button button">
             Opslaan
           </a>
       </div>
   </div>
   <div class="question-container">
        <div v-for="data in filterCategories">
            <div @click="stateChange(data)" class="tile question-tile">
                <div class="upper-part">
                    <p>{{ data }}</p>
                    <div class="filled-in">
                        <p>0%</p>
                    </div>
                </div>
                <div class="lower-part">
                    <div v-if="data == currentCatagory" >
                        <select class="" name="">
                            <option value="">{{ data }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
   </div>
 </div>

</template>

<script>
import json from "../data.json";
export default {
  data() {
    return {
      myJson: json,
      currentCatagory: "",
      currentOption: []
    };
  },

  computed: {
    filterCategories: function() {
      let categoryNames = [];
      const categories = this.myJson
        .map(category => category.Categorie)
        .filter((categorie, index, all) => {
          if (all.indexOf(categorie) == index) {
            categoryNames.push(categorie);
          } else {
          }
        });
      return categoryNames;
    }
  },

  methods: {
    stateChange: function(categorie) {
      this.currentCatagory = categorie;
      this.addItemsToCategories(this.currentCatagory);

      console.log(this.currentCatagory);
    },

    // find index by change
    addItemsToCategories: function(subject) {
      const categories = this.filterCategories;
      let newArray = [];
      const filteredItems = this.myJson
        .map(category => category)
        .filter(item => item.Categorie == subject);

      console.log(filteredItems);
      return filteredItems;
    }
  }
};
</script>





<style>
</style>
