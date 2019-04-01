export class User{

  private _nom:string;
  private _prenom:string;
  private _telephone:number;
  private _email:string;
  private _skills:string;

  constructor(_nom:string, _prenom:string, _telephone:number, _email:string, _skills:string){
        this._nom = _nom;
        this._prenom = _prenom;
        this._telephone =_telephone;
        this._email = _email;
        this._skills = _skills;

  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get telephone(): number {
    return this._telephone;
  }

  set telephone(value: number) {
    this._telephone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }


  get skills(): string {
    return this._skills;
  }
  set skills(value:string){
    this._skills = value;
  }

}
