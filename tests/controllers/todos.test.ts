import { expect } from "chai";
import TodoController from "../../src/controllers/todo.controller";
import Todo from "../../src/models/todo.model";

describe("Todos Controller test suite", () => {
  let ctrl: TodoController;

  beforeEach(() => {
    ctrl = new TodoController();
    ctrl.add("test", "test", "test");
  });

  it("should give a list of todo's", () => {
    expect(ctrl)
      .to.have.property("todos")
      .that.is.a("array")
      .that.have.lengthOf(1);
  });

  it("should have a method for adding a todo", () => {
    expect(ctrl.todos[0]).to.be.instanceof(Todo);
  });

  it("should have a method for remove a todo", () => {
    ctrl.remove("test");
    expect(ctrl.todos).to.be.a("array").that.have.lengthOf(0);
  });

  it("should have a method for updating a todo", () => {
    ctrl.update({
      id: "test",
      name: "updated",
    });
    expect(ctrl.todos[0]).to.have.property("name").to.be.equal("updated");
  });

  it("should throw an error if the id is not defined in the dto", () => {
    expect(() =>
      ctrl.update({
        name: "updated",
      })
    ).to.throw(Error);
  });

  it("should throw an error if wrong id", () => {
    expect(() =>
      ctrl.update({
        id: "testtest",
        name: "updated",
      })
    ).to.throw(Error);
  });
});
