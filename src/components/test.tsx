import Vue, { CreateElement } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { VueComponent } from 'vue-tsx-helper'

export interface IProps {
    m?: string
    click?: any
}

@Component
export default class TestComponent extends VueComponent<IProps> {
    @Prop()
    public m!: number

    @Prop()
    public click: any

    @Model('input', {
        default: 'input value'
    })
    public value!: string

    private msg: string = 'init msg'

    private get text(): string {
        return this.value
    }

    private set text(value: string) {
        this.$emit('input', value)
    }

    public testClick() {
        this.msg = 'click img'
        this.$emit('click')
        this.click()
    }

    public onChange(v: any) {
        console.log(v.value)
    }

    public beforeUpdate() {
        console.log('TestComponent beforeUpdate')
    }

    public render(h: CreateElement) {
        console.log(this.m)
        return (
            <div>
                <div onClick={this.testClick}>
                    {this.m} {this.msg}
                    <input
                        type='text'
                        v-model={this.text}
                        // value={this.value}
                        onChange={this.onChange}
                        style='border: 1px solid #ddd'
                    />
                    {this.value}
                </div>
            </div>
        )
    }
}
