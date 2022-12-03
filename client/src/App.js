import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={5} className="container">
                    <div className="heading">TO-DO LIST</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "45px" ,fontSize: "15px", fontWeight:"bold", color: "#00008b", border:"1px solid #00008b"}}
                            color="primary"
                            type="submit"
                        >
                            ADD tASK
                        </Button>
                    </form>
                    <div>
                        {tasks.map((e) => (
                            <Paper
                                key={e._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={e.completed}
                                    onClick={() => this.handleUpdate(e._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        e.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {e.task}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(e._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
