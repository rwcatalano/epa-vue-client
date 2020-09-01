<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <Area />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Area from '@/components/Area.vue';

export default {
  name: 'AreaCalculator',
  components: {
    Area,
  },
};
</script>
