export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase})=>{
        // make asyn call to db
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Safnas',
            authorLastName : 'Oc',
            authorId: 12345,
            createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
        
    }
}
