<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-4">
        <LeftPanel />
      </div>
      <div class="col-sm-8">
        <RightPanel />
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import LeftPanel from '@/views/LeftPanel.vue'
import RightPanel from '@/views/CardView.vue'

export default {
  name: 'Home',
  components: {
    LeftPanel,
    RightPanel
  }
}

</script>