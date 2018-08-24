import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'
import Test from '@/components/test'

@Component({
    components: {
        Test
    }
})
export default class TestComponent extends Vue {
    private msg: number = 11111

    public testClick() {
        this.msg = 11212121212121212121
    }

    public beforeUpdate() {
        console.log('beforeUpdate')
    }

    public render(h: CreateElement) {
        return (
            <div class='s'>
                <div onClick={this.testClick}>{this.msg}</div>
                <Test m={2} />
            </div>
        )
    }
}
