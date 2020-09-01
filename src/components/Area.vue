<template>
    <div>
        <h1>Calculate the area of a triangle</h1>
        <hr>

        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="form-base-group" label="Base:" label-for="form-base-input">
                <b-form-input id="form-base-input" type="number" v-model="calcAreaForm.base" required placeholder="Enter Base">
                </b-form-input>
            </b-form-group>
            <b-form-group id="form-height-group" label="Height:" label-for="form-height-input">
                <b-form-input id="form-height-input" type="number" v-model="calcAreaForm.height" required placeholder="Enter Height">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Calculate</b-button> &nbsp;
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <hr/>
        <h1 v-if="calcAreaForm.area > 0">Area: {{ calcAreaForm.area }}</h1>
        <h1 v-else>{{ calcAreaForm.message }}</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      calcAreaForm: {
        base: '',
        height: '',
        area: 0,
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getArea(payload) {
      const path = `http://localhost:5000/triangle/area/height/${payload.height}/base/${payload.base}`;
      axios.get(path)
        .then((res) => {
          this.calcAreaForm = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    initForm() {
      this.calcAreaForm.base = '';
      this.calcAreaForm.height = '';
      this.calcAreaForm.area = 0;
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        base: this.calcAreaForm.base,
        height: this.calcAreaForm.height,
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
