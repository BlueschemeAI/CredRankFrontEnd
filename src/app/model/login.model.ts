export class login{
    public agency_Email: String;
    public agency_Password: String;    
    constructor(public loginData: any){
        this.agency_Email = loginData.agency_email;
        this.agency_Password = loginData.agency_password;
    }
}