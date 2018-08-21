import dayjs from 'dayjs'

/*
    如果是ios_fast或者ios_callback就是都是需要下载应用的标准任务，需要搜索关键词来下载由is_search决定的。
    如果type是ios_comment就是好评任务，如果type是ios_rich就是高额任务。
 */
export function taskType(item: any) {
    if (item.type === 'ios_comment') {
        return '好评'
    } else if (item.type === 'ios_fast' || item.type === 'ios_callback') {
        if (item.is_search) {
            return '搜索'
        }
        return '下载'
    }
}

export function monthDay(value: string, format: string = 'MM/DD') {
    return dayjs(value).format(format)
}

export function hourMin(value: string, format: string = 'HH:mm') {
    return dayjs(value).format(format)
}

export function standardDate(
    value: string,
    format: string = 'YYYY-MM-DD HH:mm:ss',
) {
    return dayjs(value).format(format)
}
