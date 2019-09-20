export class login{
    public email: String = "";
    public password: String = "";    
    constructor(public loginData: any){
        this.email = loginData.agency_email;
        this.password = loginData.agency_password;
    }
}