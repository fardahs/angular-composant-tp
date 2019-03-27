import {Formation} from '../model/Formation'

export default class FormationService {

  getFormation(): Array<Formation> {
    return[
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript'),
    ];
  }
}
