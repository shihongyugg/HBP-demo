<template>
    <div id="app">
      <router-view></router-view>
        <!-- <footer>
          <p>HYUNDAI</p>
          <p>MOTORSTUDIO</p>
          <p>BEIJING</p>
        </footer> -->
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    #app{
      width: 100%;
      padding: 0 .5rem;
      position: relative;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li, a {
        text-decoration: none;
        list-style: none;
    }

    // footer {
    //     width: 100%;
    //     height: 1.5rem;
    //     overflow: hidden;
    //     background-color: #dfd;
    //     position: absolute;
    //     bottom: 0;
    //     left: 0;
    // }
</style>
