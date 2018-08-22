import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class AppComponent extends Vue {
    public render() {
        return (
            <template>
                <div id='app'>
                    <div id='nav'>
                        <router-link to='/'>Home</router-link> |
                        <router-link to='/about'>About</router-link>
                    </div>
                    <router-view />
                </div>
            </template>
        )
    }
}
