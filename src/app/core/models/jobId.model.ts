export class JobId{
    
    name:string;
    mandant:string;
    grafana_user:string;
    constructor(name:string,mandant:string,grafana_user:string){
        this.name=name;
        this.mandant=mandant;
        this.grafana_user=grafana_user;
    }

    costructor(){
        this.name="";

        this.mandant="";

        this.grafana_user="";
    }
}