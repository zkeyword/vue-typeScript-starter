/**
 * 判断微信浏览器
 */
export function isWeiXin() {
    const ua = window.navigator.userAgent.toLowerCase()
    if (/micromessenger/i.test(ua)) {
        return true
    }
    return false
}

/**
 * 判断QQ浏览器
 */
export function isQQ() {
    const ua = window.navigator.userAgent.toLowerCase()
    if (/qq/i.test(ua)) {
        return true
    }
    return false
}

/**
 * 判断是否支持localStorage
 */
export function isLocalStorageSupported() {
    const testKey = 'test'
    const storage = window.sessionStorage
    try {
        storage.setItem(testKey, 'testValue')
        storage.removeItem(testKey)
        return true
    } catch (error) {
        return false
    }
}

/**
 * 判断是否支持iOs 11
 */
export function isIOS11StorageSupported() {
    try {
        window.openDatabase(null, null, null, null)
        return true
    } catch (_) {
        return false
    }
}

/**
 * 去除首尾空格
 */
export function trim(str: string) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 手机号验证
 */
export function isPhoneNumber(str: string) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!reg.test(str)) {
        return false
    } else {
        return true
    }
}

/**
 * 中文名验证
 */
export function isChineseName(str: string) {
    const reg = /^[\u4E00-\u9FA5]{2,5}$/
    if (!reg.test(str)) {
        return false
    } else {
        return true
    }
}

/**
 * 身份证验证
 */
export function isCardId(str: string) {
    const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
    if (!reg.test(str)) {
        return false
    }
    return true
}
