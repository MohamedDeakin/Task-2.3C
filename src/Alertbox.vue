<template>
  <div class="alert-box">
    <strong>This is an Error for 10.C Slots Purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  /* Add your styles for the alert box here */
  background-color: red;
  color: white;
  padding: 10px;
  border: 1px solid darkred;
}
</style>
