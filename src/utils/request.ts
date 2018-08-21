import axios from 'axios'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = url
axios.defaults.validateStatus = () => false

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    const error = new Error(response.statusText)
    // error.response = response
    throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(
    url: string,
    options?: any,
): Promise<any> {
    // axios.defaults.headers.common.Authorization = authorization
    const response = await axios(url, options).then(checkStatus)
    return response
}
