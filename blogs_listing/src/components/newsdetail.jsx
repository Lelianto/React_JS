import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css';
import photo from '../images/foto1.jpg'
import tool1 from '../images/love.png'
import tool2 from '../images/share.png'
import tool3 from '../images/dislike.png'

class NewsDetail extends React.Component {
    render (){
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 box_detail">
                    <img src={photo} className="image_article"></img>
                    <h4 className="title">Naruto dan Sasuke akan Menggelar Pertandingan Terakhir Mereka</h4>
                    <p className="paragraph">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className="updated">Last updated 3 mins ago</p>
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
}

export default NewsDetail;