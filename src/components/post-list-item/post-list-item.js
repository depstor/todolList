import React, {Component} from 'react';
import './post-list-item.css';
import EditForm from '../edit-form';

export default class PostListItem extends Component {
    state = {
        important: false,
        like: false,
        edit: false,
    }
    

    onImportant = () => {
        this.setState(state => ({
            important: !state.important,
        }))
    }


    onLike = () => {
        this.setState(state => ({
            like: !state.like,
        }))
    }
    onEdit = () => {
        this.setState(state => ({
            like: !state.edit,
        }))
    }


    render() {
    const {label} = this.props;  
    const {important, like, edit} = this.state;  
    let classNames = 'app-list-item d-flex justify-content-between';
    if(important) {
        classNames += ' important';
    }
    if(edit) {
        classNames += ' edit';
    }
    if(like) {
        classNames += ' like';
    }


        return(
            <>
            <div className={classNames}>
            <EditForm/>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                <text className="date">{new Date().toLocaleDateString()}</text>
                <button 
                    type="button" 
                    className="btn-edit btn-sm">
                        <i className="fa fa-pencil-square-o"
                        onClick={this.onEdit}></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-star btn-sm">
                        <i className="fa fa-star"
                        onClick={this.onImportant}></i>
                    </button>
                    <button type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
            </>
        )
    }
}

