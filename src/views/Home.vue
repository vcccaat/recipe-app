<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-4">
        <LeftPanel />
      </div>
      <div class="col-sm-8">
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import LeftPanel from '@/views/LeftPanel.vue'

export default {
  name: 'Home',
  components: {
    LeftPanel
  }
}

</script>