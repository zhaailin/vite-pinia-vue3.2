import data from "./json/premission.json"
import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/permission',
        
        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: data
            }
        }
    }
]

export default mock