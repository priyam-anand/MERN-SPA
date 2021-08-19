import { Button } from 'bootstrap';
import React, { useState, useEffect,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../App';

const MainPage = () => {

    const { state, dispatch } = useContext(userContext);
    const [bState, setState] = useState([]);
    
    console.log(state.id);

    useEffect(() => {
        getData();
    }, [])
    
    const BlogEntries = bState.map((curr) => {
        console.log(curr.authorId)
        if(state.id === curr.authorId)
        {   
            console.log("true once")
            return (
                <>
                    <div id={curr._id} key={curr.userId} className="my-container blog-container mx-auto my-4 pt-3 pb-1 blog-body">
                        <div className="col-md-10 mx-auto">
                            <h3 className="blog-heading">
                                {curr.topic}
                            </h3>
                            <button>
                                delete
                            </button>
                        </div>
                        <div className="col-md-10 mx-auto">
                            <p className="blog-content">
                                {curr.message}
                            </p>
                        </div>
                        <div className="col-md-10 mx-auto">
                            <p className="author-sec">
                                by ~ <span className="author-name">{curr.name}</span>
                            </p>
                        </div>
                    </div>
                </>
            )
        }
        else{
            return (
                <>
                    <div id={curr._id} key={curr.userId} className="my-container blog-container mx-auto my-4 pt-3 pb-1 blog-body">
                        <div className="col-md-10 mx-auto">
                            <h3 className="blog-heading">
                                {curr.topic}
                            </h3>
                        </div>
                        <div className="col-md-10 mx-auto">
                            <p className="blog-content">
                                {curr.message}
                            </p>
                        </div>
                        <div className="col-md-10 mx-auto">
                            <p className="author-sec">
                                by ~ <span className="author-name">{curr.name}</span>
                            </p>
                        </div>
                    </div>
                </>
            )
        }
    })

    const getData = async () => {
        const res = await fetch('/getblog');
        const data = await res.json();

        setState(data);
    }
    if (state.length === 0) {
        return (
            <div className="loading-spinner">
                <div className="spinner-border">
                <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="main-page-body p-5">
                    {BlogEntries}
                </div>
                <NavLink className="btn btn-primary add-blog-btn btn-lg" to="/addblog">Add your Blog</NavLink>
            </>
        )
    }

}

export default MainPage
