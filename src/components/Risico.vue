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
                        <select class="" name="" @change="handleValue" :data-id="item.id">
                            <option value="">{{ categorie }}</option>
                            <option :value="option.Gewicht" v-for="option in item.Opties">{{ option.Antwoord }}</option>
                        </select>
                      </label>
                    </div>
                </div>
            </div>
        </div>
   </div>
  </div> 
  <div class="percentage-container">
      <h1>Risico Indicatie</h1>
       <h2 id="percentage">0%</h2>
       <p>0 - 2%: Laag risico</p>
       <p>2 - 5%: Middelmatig risico</p>
       <p>5% en hoger: Hoog risico</p>
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
      currentOption: [],
      weight: new Object() /* maakt een numerieke waarde */
    };
  },
  /* wordt gerendered voor de pagina wordt geladen */
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

    handleValue: function(element) {
      var targetID = element.target.getAttribute("data-id");
      this.weight[targetID] = element.target.value;
      var valueArrays = Object.values(this.weight);
      console.log(this.weight);

      var calc = calculated(valueArrays);

      var calculatedResult = document.querySelector("#percentage");
      percentage.textContent = calc + "%";

      function calculated(valueArrays) {
        var sum = valueArrays.reduce(function(totaal, currentValue) {
          return Number(totaal) + Number(currentValue);
        }, 0);
        return Number(
          ((1 / (1 + Math.exp(-1 * (-8.57219 + sum)))) * 100).toFixed(2)
        );
      }
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
select {
  border: 1px solid #293546;
  padding: 5px 15px;
}

p {
  color: #1f1f1f;
  font-size: 16px;
}

.totalcontainer {
  display: flex;
}

.risico-container {
  background-color: rgb(242, 242, 242);
  padding: 20px;
  border-radius: 3px;
  border-top: 4px solid #ff5d5d;
  width: 400px;
  margin-left: 250px;
}

.upper-part {
  margin: 10px;
  font-weight: bold;
}

.lower-part {
  margin-left: 10px;
  margin-top: 10px;
}
select {
  display: block;
  width: 20em;
  text-align: center;
  margin-left: 0;
}

label {
  display: block;
  margin: 5px;
  margin-left: 0;
}

h1 {
  text-align: center;
}

h2 {
  font-size: 8em;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 0.5em;
}

.percentage-container {
  margin-left: 30px;
  background-color: rgb(242, 242, 242);
  padding: 20px;
  border-radius: 3px;
  border-top: 4px solid #ff5d5d;
  width: 400px;
  height: 400px;
}

.percentage-container p {
  text-align: center;
}
</style>
