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
    password:'',
    keyword:'',
    category:'',
    stateToChangeFromPage: "belum berubah",
    is_login: false
}

export const store = createStore(initialState)

export const actions = store => ({
    handleSearch : async (state, event) => {
        console.warn('event', event.target.value)
        let keyword = event.target.value
        await axios
            .get(baseUrl + 'everything?q=' + keyword +'&apiKey=' + apiKey)
            .then(function (response) {
                store.setState({ listTitles: response.data.articles, isLoading:false})
                // const cobagetstate = store.getState().listTitles
                // console.warn('isi', cobagetstate)
                
                console.warn('keyword', baseUrl + 'everything?q=' + keyword +'&apiKey=' + apiKey)
            })
            .catch(function (error){
                store.setState({ isLoading: false})
            })
    },

    changeInput : e => {
        store.setState({ [e.target.name]: e.target.value });
    }

    // handleSignOut : () => {
    //     localStorage.removeItem("is_login");
    //     this.props.history.push("/");
    //   }
  
  });