exports.buildResponse = (code, response = {}) =>{
    return {success:true, code, response}
}