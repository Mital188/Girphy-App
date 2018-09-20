import React,{Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            searchVal : ''
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }
    inputChangeHandler = (e) =>{
        this.setState({
            searchVal:e
        });
        this.props.newSearchRequest(e);
    }
    render(){
        return(
            <div>
                <input placeholder="What are you looking for?" onChange= {e => this.inputChangeHandler(e.target.value)}/>
                <div className='Sort'>
                    <div onClick={this.props.ascend} className="arrow-up"></div>
                    <div onClick={this.props.decend} className="arrow-down"></div>
                </div>
            </div>
        );
    }
}

export default SearchBar;