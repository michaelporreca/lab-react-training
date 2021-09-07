function Random({min, max}) {
    let numbers = Math.floor(Math.random() * max)+min;
    return (
        <div class="box">Random value between {min} and {max} = {numbers}</div>
    )
}

export default Random