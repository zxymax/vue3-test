<template>
  <div class="layout_container">
    <div class="layout_side">1</div>
    <div class="layout_tabbar">2</div>
    <div class="layout_main">3</div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_side {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: cyan;
  }
  .layout_main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background-color: green;
    padding: 20px;
  }
}
</style>
