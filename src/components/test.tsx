import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

// const Props = Vue.extend({
//     props: {
//         m: {
//             type: Number,
//             default: () => []
//         }
//     }
// })
// export interface IProps {
//     m?: number
// }

@Component
export default class TestComponent extends Vue {
    @Prop()
    public m!: number

    private msg: number = 1111

    public testClick() {
        this.msg = 12121212
    }

    public beforeUpdate() {
        console.log('beforeUpdate')
    }

    public render(h: CreateElement) {
        console.log(this)
        return (
            <div>
                <div onClick={this.testClick}>
                    sssss {this.msg} ssss {this.m} 2323
                </div>
            </div>
        )
    }
}
