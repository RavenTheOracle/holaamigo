class ApiEroor extends Error {
    constructor(
        statusCode,
        messege = "something went wrong",
        error = [],
        stack = ""
    ){
        super(messege)
            this.statusCode = statusCode
            this.data = null
            this.message = messege
            this.success = false
            this.error = errors

            if(stack){
                this.stack = stack
            }else{
                Error.captureStackTrace(this,this.constructor)
            }
        
    }
}