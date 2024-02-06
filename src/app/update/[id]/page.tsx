'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UpdateProps = {
    params: {
        id: string
    }
}

export default function Update(props:UpdateProps) {
    const router = useRouter();
    const id = props.params.id;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        fetch(`http://localhost:9999/page/${id}`)
        .then(resp => resp.json())
        .then(data => { 
            setTitle(data.title)
            setBody(data.body)
        });
    }, []);

    // @ts-ignore
    async function submitHandler(e) {
        e.preventDefault();
        const resp = await fetch(`http://localhost:9999/page/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'applicaton/json'
            },
            body: JSON.stringify({title, body})
        });

        const result = await resp.json();
        router.push('/read/' + id);
        router.refresh();
    }

    return <>
    <h2>Update</h2>
    <form>
        <p>
            <input 
            type="text" 
            name="title" 
            placeholder="title" 
            value={title} 
            onChange={v => setTitle(v.target.value)}/>
        </p>
        <p>
            <textarea 
            name="body" 
            placeholder="body" 
            value={body} 
            onChange={v => setBody(v.target.value)}></textarea>
        </p>
        <p><input type="submit" value="update" onClick={submitHandler}></input></p>
    </form>
    </>
}