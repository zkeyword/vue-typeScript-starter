import request from '../utils/request'

export function list(value: any) {
    return request(`/api_v1/task/get_list`, {
        method: 'GET',
        body: JSON.stringify(value),
    })
}

export function getUpTask(id: string, from: string) {
    return request(`/api_v1/task/give_up_task`, {
        body: {
            id,
            from,
        },
    })
}
