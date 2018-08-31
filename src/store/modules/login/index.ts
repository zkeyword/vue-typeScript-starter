// import { Commit, Action, ActionTree } from 'vuex'
const GET_TASK_LIST = 'GET_TASK_LIST'

const state = {
    taskListData: null,
    tipsInfo: null,
    downloadInfo: null,
    isUpdate: false
}

// Mutation 必须是同步函数
const mutations = {
    [GET_TASK_LIST](s: any, data: any) {
        state.taskListData = data
    }
}

const actions = {
    /* 获取列表 */
    async getTaskList(context: any, payload: any) {
        context.commit(GET_TASK_LIST, payload)
    }
}

const getters = {
    /* 任务列表数据 */
    taskListData: (s: any) => s.taskListData
}

export default {
    state,
    getters,
    mutations,
    actions
}
