import { autorun, title, Scenario, Given, When, Then, Step } from 'crius-test';

@autorun(it)
@title('Test user add todo item')
class TestTodoList extends Step {
  run() {
    return (
      <Scenario desc='user login website' action={Login}>
        <Given desc='user navigate to list page' action={Navigate} />
        <When desc='user type "read book" in input field and click "add" button' action={AddTodo} />
        <Then desc='user should see "read book" todo item in todo list' action={CheckTodo} />
      </Scenario>
    )
  }
}

const Login = () => console.log('Login');
const Navigate = () => console.log('Navigate');
const AddTodo = () => console.log('AddTodo');
const CheckTodo = () => console.log('CheckTodo');
