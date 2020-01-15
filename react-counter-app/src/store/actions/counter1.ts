import * as TYPES from '../actionsTypes';
export default {
    increment1(){
        return {
            type: TYPES.INCREMENT1
        }
    },
    decrement1(){
        return {
            type: TYPES.DECREMENT1
        }
    },
    // 异步增加方法
    asyncIncrement1(){
        return function(dispatch, getState){
            setTimeout(() => {
                dispatch({
                    type: TYPES.INCREMENT1
                })
            }, 1000)
        }
    }
}