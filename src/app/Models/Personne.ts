
export class Personne {
  id: number;
  name: string;
  path: string;
  age: number;
  Job : string


  constructor(id:number, name:string, path:string, age:number,job : string)
  {
    this.id = id;
    this.name = name;
    this.path = path;
    this.age = age;
    this.Job=job ;
  }

}
export class Cv {
  constructor
  (
    public id = 0,
    public name = "",
    public firstname = "",
    public path = "",
    public cin = 0,
    public job ="",
    public age = 0,
  )

  {   }


}
