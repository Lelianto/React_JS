import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css';
import '../App.css';
import logo from '../images/logo.svg';
import tool1 from '../images/love.png'
import tool2 from '../images/share.png'
import tool3 from '../images/dislike.png'

class NewsDetail extends React.Component {

    render (){
            const { listTitles, isLoading } = this.props;
            console.warn('cek', listTitles)
            const topEverythings = listTitles.filter(item => {
                if (item.urlToImage!== null && item.title !== null && item.description !== null) {
                    return item;
                }
                return false
            });
            
            const allEverythings = topEverythings.filter((element,i)=>(i<=4)).map((item, key) => {
                console.log(item.urlToImage)
                return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 box_detail">
                            <img src={item.urlToImage} className="image_article"></img>
                            <a style={{ textDecoration:"none", color:'black'}} href={item.url}>
                            <h4 className="title">{item.title}</h4>
                            </a>
                            <p className="paragraph">{item.description}</p>
                            <p className="updated">Published At {item.publishedAt}</p>
                            <div className="container-fluid">
                                <div className="row toolset">
                                    <div className="col-md-4">
                                        <img className="tools" src={tool1}></img>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="tools" src={tool2}></img>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="tools" src={tool3}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            )
            return (
                <div className="everythingNews">
                  {isLoading ? <div style={{ textAlign:'center'}}> 
                  
                  <div className="App">
                    <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    </div>
    
                  </div> 
                  : allEverythings
                  }
                </div>
            )
    }
}

export default NewsDetail;