import './friends.css'
import PropTypes from 'prop-types'

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="item">
            <span className={isOnline ? "statusOnline" : "statusOffline" }></span>
  <img className="avatar" src={avatar} alt="User avatar" width="10" />
            <p className="name">{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem