import * as TYPES from '../actionsTypes';
export default {
    increment2(){
        return {
            type: TYPES.INCREMENT2
        }
    },
    decrement2(){
        return {
            type: TYPES.DECREMENT2
        }
    },
    // 异步增加方法
    asyncIncrement2(){
        return function(dispatch, getState){
            setTimeout(() => {
                dispatch({
                    type: TYPES.INCREMENT2
                })
            }, 1000)
        }
    }
}