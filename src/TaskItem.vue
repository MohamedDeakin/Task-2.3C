<template>
  <div class="task-item">
    <p>{{ item.name }}</p>
    <p>Status: {{ item.isComplete ? 'Complete' : 'Incomplete' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object, 
  },
};
</script>

<style scoped>
.task-item {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
