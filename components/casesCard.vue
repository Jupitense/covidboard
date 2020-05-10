<template>
  <div class="max-w-sm rounded overflow-hidden" :class="type">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <div class="flex items-center justify-between">
        <span class="text-4xl font-bold">{{ count }}</span>
        <font-awesome-icon :icon="icon" class=" text-5xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
svg {
  opacity: 0.5;
}

.confirmed {
  background: #0072ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 5px 7px -3px #0072ff, 0 4px 6px -2px #00c6ff;
}

.recovered {
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #11998e,
    #38ef7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #11998e,
    #38ef7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 5px 7px -3px #11998e, 0 4px 6px -2px #38ef7d;
}

.deaths {
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 5px 7px -3px #93291e, 0 4px 6px -2px #ed213a;
}

.actives {
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f12711,
    #f5af19
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f12711,
    #f5af19
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 5px 7px -3px #f12711, 0 4px 6px -2px #f5af19;
}
</style>
