import Vue, { CreateElement } from 'vue'
import { Component, Emit } from 'vue-property-decorator'
import Test from '@/components/test'

@Component
export default class TestComponent extends Vue {
    private msg: number = 11111

    public testClick() {
        this.msg = 11212121212121212121
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
            </div>
        )
    }
}
