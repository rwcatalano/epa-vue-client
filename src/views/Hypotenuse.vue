<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <Hypotenuse />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Hypotenuse from '@/components/Hypotenuse.vue';

export default {
  name: 'HypotenuseCalculator',
  components: {
    Hypotenuse,
  },
};
</script>
