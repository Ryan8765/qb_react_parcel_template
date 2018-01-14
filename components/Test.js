import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.js';

class Test extends Component {


    constructor(props) {
        super(props);

        console.log(config);

        this.quickbase = new QuickBase({
            realm: config.QB_REALM,
            userToken: config.QB_USER_TOKEN
        });
    }

    componentWillMount() {

        this.quickbase.api('API_DoQuery', {
            dbid: 'bkcdrryt2',
            includeRids: true
        }).then((results)=>{
            alert("results in Quick Base " + JSON.stringify(results));
        }).catch((err)=>{
            console.log(err);
        });

    }

  render() {
    return (
        <div>
            <h1>Hello World!!!!!!!</h1>
        </div>
    );
  }
}

export default Test;
