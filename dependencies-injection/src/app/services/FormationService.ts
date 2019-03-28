import {Formation} from '../model/Formation'
import {Injectable} from "@angular/core";
import FormationApi from "./FormationApi";

@Injectable()
export default class FormationService {

  constructor(private formationApi:FormationApi)
  {
  }

  getFormation(): Promise<Array<Formation>> {
    return this.formationApi.fetchFormation();
  }
}
