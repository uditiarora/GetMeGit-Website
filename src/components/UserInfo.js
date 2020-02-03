import React from 'react';
import Octicon, { Briefcase, Calendar, Location } from '@primer/octicons-react';
import '../css/userinfo.css';
const UserInfo = ({userData}) => {
    return(
        <div className="outer_div">
            {userData && (
            <div className="inner_div">
                {userData.avatar_url && (
                <div className="avatar">
                    <img src={userData.avatar_url} alt="avatar" />
                </div>
                )}

                {userData.name && <h1>{userData.name}</h1>}

                {userData.login && (
                <h2 >
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="user_url">
                    @{userData.login}
                    </a>
                </h2>
                )}

                <div className="info">
                {userData.company && (
                    <span className="info__item">
                    <Octicon icon={Briefcase} size="small" className="logo" />
                    {userData.company}
                    </span>
                )}

                {userData.location && (
                    <span className="info__item">
                    <Octicon icon={Location} size="small" className="logo"/>
                    {userData.location}
                    </span>
                )}

                {userData.created_at && (
                    <span className="info__item">
                    <Octicon icon={Calendar} size="small" className="logo"/>
                    Joined{' '}
                    {new Date(userData.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                    </span>
                )}
                </div>

                <div className="stats">
                    <div className="stats__item">
                        <span className="num">{userData.public_repos.toLocaleString()}</span>
                        <span className="num-label">Repositories</span>
                    </div>
                    <div className="stats__item">
                        <span className="num">{userData.followers.toLocaleString()}</span>
                        <span className="num-label">Followers</span>
                    </div>
                    <div className="stats__item">
                        <span className="num">{userData.following.toLocaleString()}</span>
                        <span className="num-label">Following</span>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default UserInfo;