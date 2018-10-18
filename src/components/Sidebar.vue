<template>
 <div class="totalcontainer">
  <div class="risico-container">
   <div class="question-container">
        <div v-for="categorie in filterCategories">
            <div @click="stateChange(categorie)">
                <div class="upper-part">
                    <p>{{ categorie }}</p>
                    <div class="filled-in">

                    </div>
                </div>
                <div class="lower-part">
                    <div v-if="categorie == currentCategory" >
                      <label v-for="item in currentOption">{{ item.Vraag }}
                        <select class="" name="">
                            <option value="">{{ categorie }}</option>
                            <option v-for="option in item.Opties" value="">{{ option.Antwoord }}</option>
                        </select>
                      </label>
                    </div>
                </div>
            </div>
        </div>
   </div>
      <button class="save-button">Geef indicatie</button>
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
  /* wordt gerendert voor de pagina wordt geladen */
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
      this.currentOption = Object.values(
        this.addItemsToCategories(this.currentCategory)
      );
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
    },

    logThis: function() {
      json.forEach(question => {
        // let questionSet = [];
        questionSet.push(question.Vraag);
        questionSet.push(question.Categorie);

        question.Opties.forEach(answer => {
          questionSet.push(answer.Antwoord);
        });

        console.log(questionSet);
      });
    }
  }
};
</script>

<style scoped>
.save-button {
  background-color: #293546;
  border-radius: 3px;
  padding: 10px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

select {
  border: 1px solid #293546;
  padding: 5px 15px;
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
  width: 60%;
  margin-left: 15%;
}

.upper-part {
  margin: 10px;
  font-weight: bold;
  text-align: center;
}

.lower-part {
  text-align: center;
  margin: 20px;
}
</style>
