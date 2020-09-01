<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <h1>Calculate the seconds from hours and minutes</h1>
                <hr>

                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group id="form-hours-group" label="Hours:" label-for="form-hours-input">
                        <b-form-input id="form-hours-input" type="number" v-model="calcSecondsForm.hours" required placeholder="Enter Hours">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="form-minutes-group" label="Minutes:" label-for="form-minutes-input">
                        <b-form-input id="form-minutes-input" type="number" v-model="calcSecondsForm.minutes" required placeholder="Enter Minutes">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Calculate</b-button> &nbsp;
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                <hr/>
                <h1 v-if="calcSecondsForm.seconds > 0">Seconds: {{ calcSecondsForm.seconds }}</h1>
                <h1 v-else>{{ calcSecondsForm.message }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      calcSecondsForm: {
        hours: '',
        minutes: '',
        seconds: 0,
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getArea(payload) {
      const path = `http://localhost:5000/time/seconds/hours/${payload.hours}/minutes/${payload.minutes}`;
      axios.get(path)
        .then((res) => {
          this.calcSecondsForm = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    initForm() {
      this.calcSecondsForm.hours = '';
      this.calcSecondsForm.minutes = '';
      this.calcSecondsForm.seconds = 0;
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        hours: this.calcSecondsForm.hours,
        minutes: this.calcSecondsForm.minutes,
      };
      this.getArea(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.initForm();
    },
  },
  created() {
    this.initForm();
  },
};

</script>
