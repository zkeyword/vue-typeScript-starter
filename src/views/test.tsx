import Vue, { CreateElement } from 'vue'
import { Component, Emit } from 'vue-property-decorator'
import Test from '../components/test'
import TestVue from '../components/testvue.vue'

@Component
export default class TestComponent extends Vue {
    private msg: string = 'test click'

    public testClick() {
        this.msg = 'test click2'
    }

    public click() {
        console.log('test click')
    }

    public beforeUpdate() {
        console.log('beforeUpdate')
    }

    public render(h: CreateElement) {
        return (
            <div class='s'>
                <div onClick={this.testClick}>{this.msg}</div>
                <Test m={this.msg} click={this.click} />
                <TestVue />
            </div>
        )
    }
}
