<template>
    <div class="row">
        <div class="col-md-12">
            <base-input addon-left-icon="ni ni-calendar-grid-58">
                <flat-picker slot-scope="{focus, blur}"
                             @on-open="focus"
                             @on-close="blur"
                             @eventParent
                             :config="{allowInput: true}"
                             class="form-control datepicker"
                             v-model="dates.simple">
                </flat-picker>
            </base-input>
        </div>
    </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPicker
  },
  data() {
    return {
      dates: {
        simple: "2020-01-1",
        range: "2018-07-17 to 2018-07-19"
      }
    };
  },
  props: {
    msg: String
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsg", this.dates.simple);
      console.log('message emit from child component'+ this.dates.simple)
    }
  }
};
</script>
