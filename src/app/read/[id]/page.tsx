// @ts-ignore
export default async function Read(props) {
    const id = String(props.params.id);
    const resp = await fetch('http://localhost:9999/page/' + String(id), {next: {revalidate: 0}});
    const result = await resp.json();

    return (
    <div>
        <h2>{result.title}</h2>
        <div>{result.body}</div>
    </div>)
}