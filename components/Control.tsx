"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Router from "next/router";

export default function Control(){
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    async function deleteHandler() {
        await fetch('http://localhost:9999/page/' + id, {
            method: 'DELETE'
        });

        router.push('/');
        router.refresh();
    }

    return (
    <ul>
        <li><Link href="/create">create</Link></li>
        {id === undefined ? null : 
        <>
            <li><Link href={`/update/${id}`}>update</Link></li>
            <li><button onClick={deleteHandler}>delete</button></li>
        </>}
    </ul>
    )
}