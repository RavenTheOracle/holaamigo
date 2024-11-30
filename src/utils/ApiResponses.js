class ApiResponse {
    constructor(statusCode,data,messege= "Success"){
        this.statusCode = statusCode
        this.messege = messege
        this.success = statusCode
    }
}