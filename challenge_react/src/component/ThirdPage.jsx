import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css'
import photo from '../assets/img/page2/photo.jpg'
import line from '../assets/img/page2/line.png'

class ThirdPage extends React.Component {
    render (){
        return (
            <html className='page2'>
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="kedua">
                        <nav>
                            <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce<br />sites and internal frameworks. Specializes in Angular JS<br />and responsive design.</p>
                        </nav>
                        <h3>Education</h3>
                        <ul className="list-study">
                            <li>
                                <div>
                                    <p>2014</p>
                                    <p>DIPLOMA</p>
                                </div>
                                <p>Computer Engineering - University of Chocago</p>
                            </li>
                            <li>
                                <div>
                                    <p>2018</p>
                                    <p>BACHELOR DEGREE</p>
                                </div>
                                <p>Computer Engineering - University of Chocago</p>
                            </li>
                        </ul>
                        <div className="start-table">
                            <p>Here's few technologies I've been working with recently :</p>
                        </div>
                        <table>
                            <tr>
                                <th className="one">HTML & CSS</th>
                                <th className="two">Serverless</th>
                                <th className="three">Scrum</th>
                            </tr>
                            <tr className="tr2">
                                <td className="one">Programming</td>
                                <td className="two">Restful API</td>
                                <td>Test-Driven Dev</td>
                            </tr>
                            <tr className="tr3">
                                <td>Database</td>
                                <td>Javascript</td>
                                <td>Software Testing</td>
                            </tr>
                            <tr>
                                <td>Git & Github</td>
                                <td>Single Page App</td>
                                <td>UX/UI Designer</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="ketiga">
                        <img src={photo} alt="" />
                    </div>
                    <div className="keempat">
                        <img src={line} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </html>
        )
    }
}

export default ThirdPage;