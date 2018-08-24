<template>
    <div class="home">
        <mt-header fixed
                   title="test">
            {{msg}}sdfsdfasdf
        </mt-header>
        <HelloWorld :msg="msg" />
        <Test :m="111212121212" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Test from '@/components/test' // @ is an alias to /src
import { Toast, Header } from 'mint-ui'

@Component({
    components: {
        HelloWorld,
        Test
    }
})
export default class Home extends Vue {
    private msg: number = 121212
}
</script>
