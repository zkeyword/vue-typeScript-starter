<template>
    <div class="home">
        <mt-header fixed
                   title="test">
            test
        </mt-header>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Toast, Header } from 'mint-ui'

export default Vue.extend({
    name: 'home',
    components: {
        HelloWorld
    }
})
</script>
