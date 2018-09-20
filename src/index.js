import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import SearchBar from './components/searchbar/SearchBar';
import Gifs from './components/gifs/Gifs';
import Modal from './components/UI/Modal/Modal';
import GifDetails from './components/gifs/gifDetail/GifDetail';
import logo from '../src/img/logo.png';

import './index.css';

class App extends Component{
    constructor(props){
        super(props );
        this.state = {
            gifs: [],
            seletedGif:{},
            viewingGif:false,
            ascend:false,
            decend:false,
            limit:25,
            url:''
        }
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
        this.onGifClickHandler = this.onGifClickHandler.bind(this);

        var url = `http://api.giphy.com/v1/gifs/trending?api_key=h5sG5S0QvQq7AXTBGXaXYZ6sSDGLP5U4`;

        request.get(url,(err,res) =>{
            this.setState({
                gifs:res.body.data
            })  
        })
    }
    searchChangeHandler(newSearch){
        newSearch = newSearch.replace(/\s/g, '+');
        var url;
        if(newSearch === ''){
            url = `http://api.giphy.com/v1/gifs/trending?api_key=h5sG5S0QvQq7AXTBGXaXYZ6sSDGLP5U4`;
        }else{
            url = `http://api.giphy.com/v1/gifs/search?q=${newSearch}&api_key=h5sG5S0QvQq7AXTBGXaXYZ6sSDGLP5U4`
        }

        request.get(url,(err,res) =>{
            this.setState({
                url:url,
                gifs:res.body.data
            })
        })
    }

    onGifClickHandler(Gif){
        
        this.setState({
            seletedGif:Gif,
            viewingGif:true
        })
    }
    modalHandler =()=>{
        this.setState({
            viewingGif:false
        })
    }
    setAscendHandler =() =>{
        var gifs = this.state.gifs;
        gifs.sort(function(a,b) { 
            return new Date(a.import_datetime).getTime() - new Date(b.import_datetime).getTime() 
        });

        this.setState({
            gifs:gifs
        })
    }

    setDescendHandler =() =>{
        var gifs = this.state.gifs;
        gifs.sort(function(a,b) { 
            return new Date(b.import_datetime).getTime() - new Date(a.import_datetime).getTime() 
        });

        this.setState({
            gifs:gifs
        })
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

      handleScroll = () =>{
          var d = document.documentElement;
          var offset = d.scrollTop + window.innerHeight;
          var height = d.offsetHeight;

          if(height - offset <= 1){
            var url = this.state.url;
            if(url === ''){
                url = `http://api.giphy.com/v1/gifs/trending?api_key=h5sG5S0QvQq7AXTBGXaXYZ6sSDGLP5U4`;
            }
            url = url.concat(`&limit=${this.state.limit + 10}`);
  
              request.get(url,(err,res) =>{
                  this.setState({
                      gifs:res.body.data,
                      limit:this.state.limit + 10
                  })
              })
  
              
          }
      }

    render(){
        return(
            <div>
                <Modal show={this.state.viewingGif} modalClosed={this.modalHandler}>
                    <GifDetails gif = {this.state.seletedGif}/>
                </Modal>
                <img className='Logo' src = {logo} width='50px' alt="logo"/>
                <SearchBar ascend = {this.setAscendHandler} decend={this.setDescendHandler} newSearchRequest = {this.searchChangeHandler}/>
                <Gifs onClick={this.onGifClickHandler} gifs = {this.state.gifs}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('App'));