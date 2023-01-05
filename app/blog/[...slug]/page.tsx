export default function Post ({params}){
    console.log(params)
    return (
        <div>{params.slug[0]}</div>
    )
}