import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
      return {
          backgroundColor: '#ccc',
          padding: '10px',
          borderBottom: '1px #f4f4f4 dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }

    render() {
        const { id, title } = this.props.todo;
        
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                </p>
            </div>
        )
    }
}

// PropTypes - it checks types passed.
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;
