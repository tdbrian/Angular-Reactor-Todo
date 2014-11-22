
import ARView from 'ARView';
import TodoController from 'TodoController';

export default class TodoView extends ARView {

  set states() {
    super({
      list: {
        portalList: {
          visible: true,
          class: ''
        },
        portalNew: {
          visible: false,
          class: ''
        }
      },
      create: {},
      edit: {},
      remove: {}
    });
  }

}