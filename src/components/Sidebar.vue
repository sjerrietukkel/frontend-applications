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
        <div v-for="categorie in filterCategories">
            <div @click="stateChange(categorie)">
                <div class="upper-part">
                    <p>{{ categorie }}</p>
                    <div class="filled-in">
                      0%
                    </div>
                </div>
                <div class="lower-part">
                    <div v-if="categorie == currentCategory" >
                        <select class="" name="">
                            <option value="">{{ categorie }}</option>
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
      currentCategory: "",
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
      this.currentCategory = categorie;
      this.addItemsToCategories(this.currentCategory);

      console.log(this.currentCategory);
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

<style scoped>
a {
  background-color: #293546;
  border-radius: 3px;
  padding: 10px;
  color: white;
  font-weight: bold;
}

select {
  border: 1px solid #293546;
  padding: 5px;
}

p {
  color: #1f1f1f;
  font-size: 16px;
}

.risico-container {
  background-color: rgb(242, 242, 242);
  padding: 20px;
  border-radius: 3px;
  border-top: 4px solid #ff5d5d;
}
</style>
