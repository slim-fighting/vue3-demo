<template>
  <div>
    <div class="box">
      <div class="box-lef"></div>
      <div class="box-main"></div>
      <div class="box-right"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getApiList } from './api';
import { useStore } from './stores'
const list = useStore().getList()

console.log(getApiList());

</script>

<style lang="scss" >
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

.box {
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-image: url('/src/assets/imgs/girl.png');
  background-repeat: no-repeat;
  background-size: cover;

  &-left {
    width: 400px;

  }
  &-main {
    flex: 1;
  }
  &-right {
    width: 400px;
  }
}
</style>
