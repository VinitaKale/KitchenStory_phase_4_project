import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"praveen@gmail.com",
            password:"Praveen@123"
        },
        {
            email:"Shreyas@gmail.com",
            password:"Shreyas@123"
        },
        {
            email:"vinita@gmail.com",
            password:"Vinita@123"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}