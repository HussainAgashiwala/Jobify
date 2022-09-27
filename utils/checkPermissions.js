import { UnAuthenticatedError } from "../errors/index.js"


const checkPermissions = (requestUser,responseUserId) => {
    if(requestUser.userId===responseUserId.toString()){
        return
    }
    throw new UnAuthenticatedError('Not authorize to access this route')
}

export default checkPermissions