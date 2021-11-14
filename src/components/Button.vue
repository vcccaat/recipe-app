<template>
  <div class="button">
    <input type="checkbox" class="btn-check" :id=id autocomplete="off">
    <label class="btn btn-outline-secondary" :for=id>{{name}}</label>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    id: String
  }
}
</script>