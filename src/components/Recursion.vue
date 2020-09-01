<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <h1>Recursively concatentate a label by specifiying the lable and the iteration count.</h1>
                <hr>

                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group id="form-label-group" label="Label:" label-for="form-label-input">
                        <b-form-input id="form-label-input" type="text" v-model="doRecursionForm.label" required placeholder="Enter Label">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="form-iterations-group" label="Iterations:" label-for="form-iterations-input">
                        <b-form-input id="form-iterations-input" type="number" v-model="doRecursionForm.iterations" required placeholder="Enter Iterations">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Run</b-button> &nbsp;
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                <hr/>
                <h1 v-if="doRecursionForm.result != ''">Result: {{ doRecursionForm.result }}</h1>
                <h1 v-else>{{ doRecursionForm.message }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      doRecursionForm: {
        label: '',
        iterations: '',
        result: '',
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getArea(payload) {
      const path = `http://localhost:5000/recursion/label/${payload.label}/count/${payload.iterations}`;
      axios.get(path)
        .then((res) => {
          this.doRecursionForm = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    initForm() {
      this.doRecursionForm.label = '';
      this.doRecursionForm.iterations = '';
      this.doRecursionForm.result = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        label: this.doRecursionForm.label,
        iterations: this.doRecursionForm.iterations,
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
