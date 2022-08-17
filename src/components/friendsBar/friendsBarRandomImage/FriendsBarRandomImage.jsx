import './friendsBarRandomImage.css'


const FriendsBarRandomImage = ({ randomPost }) => {


    return (
        <>
            {/** Random Post Image */}
            <img src={randomPost?.image_url} alt="Random Friends Post" className="friendsBarRandomPostImage" />
        </>
    )
}

export default FriendsBarRandomImage;