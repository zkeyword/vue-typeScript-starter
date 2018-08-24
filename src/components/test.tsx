import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { VueComponent } from 'vue-tsx-helper'

export interface IProps {
    m?: number
}

@Component
export default class TestComponent extends VueComponent<IProps> {
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
