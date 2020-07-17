<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view />
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Navbar from './components/Navbar.vue'
    import $ from 'jquery'
    export default {
        name: 'App',
        components: {
            //HelloWorld,
            Navbar
        }
    }
    $(function () {
        console.log("start");
    })
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
