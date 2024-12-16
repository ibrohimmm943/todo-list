var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_URL = "http://localhost:5000/todos"; // Backend API URL
// Fetch all todos
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function () {
        var response, todos, todoList_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    todos = _a.sent();
                    todoList_1 = document.getElementById("todo-list");
                    todoList_1.innerHTML = ""; // Clear existing list
                    todos.forEach(function (todo, index) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(index + 1, "</td>\n        <td>").concat(todo.name, "</td>\n        <td class=\"actions\">\n          <button class=\"edit\" onclick=\"editTodo('").concat(todo.id, "', '").concat(todo.name, "')\">\u270F\uFE0F</button>\n          <button class=\"delete\" onclick=\"deleteTodo('").concat(todo.id, "')\">\uD83D\uDDD1\uFE0F</button>\n        </td>\n      ");
                        todoList_1.appendChild(row);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching todos:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Add a new todo
function addTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var taskInput, name, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskInput = document.getElementById("task-input");
                    name = taskInput.value.trim();
                    if (!name)
                        return [2 /*return*/, alert("Name cannot be empty")];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(API_URL, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: name }),
                        })];
                case 2:
                    _a.sent();
                    taskInput.value = ""; // Reset input field
                    fetchTodos(); // Refresh list
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error adding todo:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Edit a todo
function editTodo(id, oldName) {
    return __awaiter(this, void 0, void 0, function () {
        var newName, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newName = prompt("Edit Name:", oldName);
                    if (!newName) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: newName }),
                        })];
                case 2:
                    _a.sent();
                    fetchTodos(); // Refresh list
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error editing todo:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Delete a todo
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), {
                            method: "DELETE",
                        })];
                case 1:
                    _a.sent();
                    fetchTodos(); // Refresh list
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error deleting todo:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Initialize app
fetchTodos();
