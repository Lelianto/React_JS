import createStore from 'unistore';
import axios from 'axios';

const apiKey = '5df2d02cbdb648bb8853f14401e283ab';
const baseUrl = 'https://newsapi.org/v2/'
const urlEverything = baseUrl + 'everything?q=bitcoin&apiKey=' + apiKey;
const urlHeadline = baseUrl + 'top-headlines?country=id&apiKey=' + apiKey;

const initialState = {
    listNews:[],
    listTitles:[],
    isLoading:true,
    username:'',
    email:'',
    password:'',
    keyword:'',
    accKey:'',
    category:'',
    stateToChangeFromPage: "belum berubah",
    is_login: false
}

export const store = createStore(initialState)

export const actions = store => ({
    handleSearch : async (state, event) => {
        let keyword = event.target.value
        await axios
            .get(baseUrl + 'everything?q=' + keyword +'&apiKey=' + apiKey)
            .then(function (response) {
                store.setState({ listTitles: response.data.articles, isLoading:false})
            })
            .catch(function (error){
                store.setState({ isLoading: false})
            })
    },

    changeInput : (state,e) => {
        store.setState({ [e.target.name]: e.target.value });
    },

    postLogin : async (state) => {
        const username = store.getState('username')
        const password = store.getState('password')
        const mydata = {
            username: username,
            password: password
        };
        const test = await axios
            .post("https://mynewpoint.free.beeceptor.com/login", mydata)
            .then(response => {
                return response
            })
            .catch(error => {
                return false
        })
        console.warn('isi test', test)
        if (test) {
            store.setState({
                "accKey": test.data.accKey,
                "is_login": true,
                "email": test.data.email,
                "username": test.data.username
            });
            console.warn('cel status login', initialState.is_login)
        }
    },
    checkCategory : async (state, word) => {
        let category = word.toLowerCase()
        await store.setState({'category': category, 'isLoading': true})
        await axios
            .get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=5df2d02cbdb648bb8853f14401e283ab`)
            .then(response => {
                store.setState({ listTitles: response.data.articles, isLoading:false})
            })
            .catch(error => {
                return false
        })
    }
  
  });