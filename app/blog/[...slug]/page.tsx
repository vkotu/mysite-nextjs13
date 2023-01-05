const delay = (time) => new Promise((resolve) => {
    setTimeout(() => { resolve() }, time);
})

export default  async function Post({params}) {
    console.log(params)
    await delay(5000);
    // throw new Error('yikes');
    return (
        <p>POST SLUG</p>
    )
}

