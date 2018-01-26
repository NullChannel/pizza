
<template>

  <div
    class="container-progress-bar"
    v-show="show_progress_bar">
    <v-progress-circular
      indeterminate
      :size="150"
      :width="6"
      color="blue"
    />
  </div>

</template>

<script>
export default {
  name: "ProgressBarCtrl",
  props: {
    show_progress_bar: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.container-progress-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
