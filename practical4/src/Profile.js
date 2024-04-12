import Test from "./Test";

function Profile(props) {
    return(
        <div>
           <Test name = {props.name} count = {props.count}/>
        </div>
    );
}

export default Profile;