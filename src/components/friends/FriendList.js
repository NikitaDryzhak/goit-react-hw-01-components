import FriendListItem from './FriendListItem'

function FriendList({ friends }) {
return (<ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
               
                <FriendListItem
                    key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
              
            )
        )
  }
</ul>
)}
    

export default FriendList