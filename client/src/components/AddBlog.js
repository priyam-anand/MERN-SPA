import React, { useState ,useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const AddBlog = () => {

    const history = useHistory();

    const [blog, setBlog] = useState({
        name: "",
        topic: "",
        message: "",
        autorId:""
    })

    const getAuthentication = async () =>{
        try{
            const resp = await fetch('/about',{
                method:"GET",
                credentials: 'include',
                headers:{
                    Accept:"Application/json",
                    "Content-Type":"Application/json",
                }, 
            });

            const data = await resp.json();
            console.log(data);
            setBlog({...blog, name:data.name,autorId:data._id});

            if(resp.status !== 200)
            {
                const err=new Error(resp.err);
                throw err;
            }
        }catch(err){
            console.log(err);
            history.push('/login');
        }

    }

    useEffect(() => {
        getAuthentication();
    },[])

    const addPost = async (event) => {
        event.preventDefault();

        const { name, topic, message,autorId } = blog

        const res=await fetch('/addBlog',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,topic,autorId,message
            })
        })
        const data = await res.json();
        if(res.status!=201 || !data)
        {
            window.alert("Blog could not get added. Please try again")
        }
        else
        {
            window.alert("Blog added successfully");
            history.push('/mainpage');
        }
    }
    let eventName, eventValue;

    const handleInput = (event) => {
        eventName = event.target.name;
        eventValue = event.target.value;

        setBlog({ ...blog, [eventName]: eventValue });
    }

    return (
        <>
            <h2 className="mb-2">
                Fill your Blog Entries
            </h2>
            <div className="container py-4 mb-5 border my-container">
                <div className="row my-3">
                    <h3 className="col-md-3 mx-auto">
                        Enter your details here
                    </h3>
                    <div className="col-md-3 mx-auto"></div>
                    <div className="col-md-3 mx-auto"></div>
                </div>
                <form>
                    <div className="row">
                        <div className="form-group col-md-11 my-2 mx-auto">
                            <div className="input-group">
                                <input type="text" name="name" className="form-control my-input form-text" id="contact_form_name"
                                    value={blog.name}
                                    onChange={handleInput}
                                    placeholder="Your Name" required="required" />
                            </div>
                        </div>
                        <div className="form-group col-md-11 my-2 mx-auto">
                            <div className="input-group">
                                <input type="text" name="topic" value={blog.topic}
                                    onChange={handleInput} className="form-control my-input form-text" id="contact_form_name" placeholder="Topic of Blog" required="required" />
                            </div>
                        </div>
                        <textarea id="contact_form_message" className="col-md-11 my-5 mx-auto my-input form-text"
                            rows="7" placeholder="Your message here" name="message" value={blog.message}
                            onChange={handleInput}>
                        </textarea>

                        <button className="btn btn-success col-md-2 mx-auto" type="submit" onClick={addPost} >Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddBlog
