function Profile () {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
    const name ="Sharad Adhikari";
    return (

<div>
<img className="rounded-full border-2 border-blue-500" src={url} alt={name} />
</div>

    );
}

export default Profile