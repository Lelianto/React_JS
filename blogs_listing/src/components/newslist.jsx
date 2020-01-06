import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'

let title_list = [
    'Gabung ALpha Tech Academy Sekarang!',
    'Ada apa antara Kobar dan Hasan?',
    'Mengenal Arafat sang Master Pyhton',
    'Belajar reactJs itu seru. Kamu setuju?',
    'Sudahkah kamu sehat mental?'
]

class NewsList extends React.Component {
    render (){
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box_list">Berita Terkini</div>
                    <a className="see_all" href="">Lihat Semua</a>
                    </div>
                </div>
            </div>
            <div className="container">
            { title_list.map((element, i) =>
                <div className="row">
                    <div className="col-md-12">
                        <div className="box_list1">
                            <div className="col-12">
                                <div className=" no_news">#{i+1}</div>
                            </div>
                            <p></p>
                            <div className="col-12">
                                <p className="news_title">{title_list[i]} </p> 
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
            </div>
        )
    }
}

export default NewsList;