export class Username{
    _user:string;
    _password:string;

    constructor(
       obj?:any
        ){

            this._user = obj && obj._user || null;
            this._user = obj && obj._password || null;
        }
}


