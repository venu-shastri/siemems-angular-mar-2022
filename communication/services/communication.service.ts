import { Subject } from "rxjs";
export  class CommunicationService{

  private subject=new Subject<string>();

  publish(data:string){
    //push
    this.subject.next(data);
  }
getObservableRef(){
  return this.subject.asObservable();
}


}
