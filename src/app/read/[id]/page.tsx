"use client"

// @ts-ignore
export default async function Read(props) {
    const id = props.params.id;
    const resp = await fetch('http://localhost:9999/page/' + id);
    const result = await resp.json();

    return (
    <div>
        <h2>Read {result.title}</h2>
        <div>{result.body}</div>
    </div>)
}