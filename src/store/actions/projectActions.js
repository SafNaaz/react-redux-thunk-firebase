export const createProject = (project) =>{
    return (dispatch, getState)=>{
        // make asyn call to db
        dispatch({type:'CREATE_PROJECT', project})
    }
}
