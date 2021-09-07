function IdCard(props) {
    return (
        <div class="App">
            <div class="IdCard box">
                    <img src={props.picture} alt="profile pic"></img><br></br>
                    <div class="right">
                    <b>First Name</b>: {props.firstName}<br></br>
                    <b>Last Name</b>: {props.lastName}<br></br>
                    <b>Gender</b>: {props.gender}<br></br>
                    <b>Height</b>: {props.height}<br></br>
                    <b>Birth</b>: {props.birth.toDateString()}<br></br>
                </div>
            </div>
        </div>
    )
}

export default IdCard