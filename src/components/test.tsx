import Vue, { CreateElement } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
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

    @Model('input', {
        default: '2323232'
    })
    public value!: string

    private msg: string = 'init msg'

    public testClick() {
        this.msg = 'click img'
        this.$emit('click')
        this.click()
    }

    public onChange(v: any) {
        console.log(v)
    }

    public beforeUpdate() {
        console.log('TestComponent beforeUpdate')
    }

    public render(h: CreateElement) {
        return (
            <div>
                <div onClick={this.testClick}>
                    {this.m} {this.msg}
                    <input
                        type='text'
                        v-model={this.value}
                        value={this.value}
                        onChange={this.onChange}
                    />
                    {this.value}
                </div>
            </div>
        )
    }
}
