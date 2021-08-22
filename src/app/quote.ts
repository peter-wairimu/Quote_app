export class Quote {
    showDescription:boolean;
  id: any;
    constructor(public author:string,public quote:string,public description: string, public completeDate: Date){
        this.showDescription=false
    }
}
