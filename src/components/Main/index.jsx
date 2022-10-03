import React, { Component } from "react";
import './style.scss'
export default class Main extends Component {

    state = {
        newTask: ''
    }

    handleChange = e => {
        this.setState({
            newTask: e.target.value
        })
    }
    render() {
        const { newTask } = this.state
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>
                <form action="#">
                    <input onChange={this.handleChange} type="text" />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        )
    }
}

