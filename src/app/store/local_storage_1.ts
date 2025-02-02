import { User } from '../models/users';
import { Page2Component } from '../page-2/page-2.component';
import { UserService } from '../services/user.service';

export class storage
{

    public nameInput='';
    constructor(private service:UserService){}

    public store = this.service.convertUsersToArray(this.service.GetAllUsers());



   
}