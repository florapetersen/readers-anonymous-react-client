import React from "react";
import UserBookClubListItem from './UserBookClubListItem';

const UserBookClubsList = ({ userBookClubs }) => {
    return (
        <>
            <p><h1>My Book Clubs:</h1></p>
            <ul>
                {userBookClubs.map(userBookClub => <UserBookClubListItem key={userBookClub.id} userBookClub={userBookClub}/>)} 
            </ul>
        </>
    )
}

export default UserBookClubsList;