<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <Recursion />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Recursion from '@/components/Recursion.vue';

export default {
  name: 'RecursionCalculator',
  components: {
    Recursion,
  },
};
</script>
