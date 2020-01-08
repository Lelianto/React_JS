import React, { Component } from 'react';
import Header from '../components/header'
import NewsList from '../components/newslist'
import NewsDetail from '../components/newsdetail'
import axios from 'axios'

const apiKey = '5df2d02cbdb648bb8853f14401e283ab';
const baseUrl = 'https://newsapi.org/v2/'
const urlEverything = baseUrl + 'everything?q=bitcoin&apiKey=' + apiKey;

class FirstPage extends Component {
  state = {
      listTitles: [],
      keyword:"",
      isLoading: true,
      category: ''
  };

  componentDidMount = () => {
      const self = this
      axios
          .get(urlEverything)
          .then(function (response) {
              self.setState({ listTitles: response.data.articles, isLoading:false})
          })
          .catch(function (error){
              self.setState({ isLoading: false})
          })
  };

  handleCategory = async (event) => {
      console.warn('event', event)
      await this.setState({category: event, isLoading: true})
      await this.getNewsByCategory(this.state.category);
      await this.props.history.replace('/category/'+event)
  }

  getNewsByCategory = async(keyword) => {
    const self = this
    await axios
      .get(`https://newsapi.org/v2/top-headlines?category=${keyword}&apiKey=5df2d02cbdb648bb8853f14401e283ab`)
      .then(function (response) {
        self.setState({ listTitles: response.data.articles, isLoading:false})
        console.warn('isi this', self.state.listTitles)
      })
      .catch(function (error){
        self.setState({ isLoading: false})
      })
  }

      render() {
          return (
            <div>
                <Header {...this.props} handleCategory={this.handleCategory}/>
                <div className="container">
                  <div className="row">
                  <div className="col-md-4">
                    <NewsList/>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-7">
                    <NewsDetail listTitles={this.state.listTitles}/>
                  </div>
                  </div>
                </div>
              </div>
            )
            };
      }

export default FirstPage;
