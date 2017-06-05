export class BE {
    constructor(
        public id: Date, 
        public author: string, 
        public text:string,
        public user: string, 
        public password: string, 
        public lob:string,
        public region:string,
        public serviceLine: string, 
        public sow:string,
        public sfdcid:string,
        public projectdesc: string, 
        public ponumber:string[],
        public poExpiration:string,
        public projectManager:string,
        public status:string
        ){}
}