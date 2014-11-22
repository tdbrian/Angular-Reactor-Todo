
// Import Angular Reactor
import AR                 from 'angularReactor';

// Import Models
import TodoModel          from 'models/TodoModel';

// Import Controllers
import TodoController     from 'controllers/TodoController';

// Import Views
import TodoListView       from 'views/todo/TodoListView';
import TodoCreateView     from 'views/todo/TodoCreateView';
import TodoEditView       from 'views/todo/TodoEditView';
import TodoDeleteView     from 'views/todo/TodoDeleteView';

/**
 * @class TodoApp is where the main application is setup and kicked off.
 */
class TodoApp extends AR.Application {

  // Initals application controller setup. This is where all application logic
  // is setup and lives.
  initControllers() {
    super([
      TodoController
    ]);
  } 
 
  // Initates application data models / with model service connection. This is
  // where the application data is stored.
  initModels() {
    super([
      TodoModel
    ]);
  }

  // Initiate application routing handles url routes and matches route path
  // with the correct application view.
  initRoutes() {
    super({
      'todo': {
        'list':           ['/', TodoListView],
        'create':         ['/create', TodoCreateView],
        'edit':           ['/edit/:todoId', TodoEditView],
        'delete':         ['/delete/:todoId', TodoDeleteView],
      }
    });
  }

}

// Kicks off the application
var todoApp = new TodoApp('Todo Application');