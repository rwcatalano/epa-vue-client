<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <Seconds />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Seconds from '@/components/Seconds.vue';

export default {
  name: 'SecondsCalculator',
  components: {
    Seconds,
  },
};
</script>
