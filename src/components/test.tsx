import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { VueComponent } from 'vue-tsx-helper'

export interface IProps {
    m?: number
    click?: any
}

@Component
export default class TestComponent extends VueComponent<IProps> {
    @Prop()
    public m!: number

    @Prop()
    public click: any

    private msg: string = 'init msg'

    public testClick() {
        this.msg = 'click img'
        this.$emit('click')
        this.click()
    }

    public beforeUpdate() {
        console.log('TestComponent beforeUpdate')
    }

    public render(h: CreateElement) {
        return (
            <div>
                <div onClick={this.testClick}>
                    {this.m} {this.msg}
                </div>
            </div>
        )
    }
}
