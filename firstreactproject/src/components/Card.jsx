import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Card = ({ props }) => {


    const [state, setstate] = useState()
    // int state=1
    async function getTodos() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(result => console.log('res',result.json()))
        //     .catch(err => console.log(err))

        // get,post,put,delete,patch
        // get -> display
        // post -> send data 
        // put -> update
        // delete -> delete data

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => setstate(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <>
            <h1>hello ali subhani {props}</h1>
            {/* <button onClick={getTodos}>get api</button> */}

            <br />
            {

                // if(state){
                //     <div>
                //     <h2>title:</h2>{state.title}
                //     <h2>body:</h2>{state.body}
                // </div>
                // }
                // else
                // {
                //     'no data found' 
                // }

                state ? (
                    <div>
                        <h2>title:</h2>{state.title}
                        <h2>body:</h2>{state.body}
                    </div>
                ) : 'loading...'
            }
        </>
    );
}

export default Card