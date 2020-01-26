import React from 'react';
// import bgImage from '../../../assets/images/mertvmore.jpg';
import avatar from './../../../assets/images/samurai-08.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*<div>*/}
                {/*    <img src={bgImage} alt="" style={{width: 80 + '%'}}/>*/}
                {/*</div>*/}
                <div>
                    <img src={!props.profile || !props.profile.photos.large ? avatar : props.profile.photos.large}
                         alt="" style={{width: 80 + '%'}}/>
                    <ProfileStatus status={'Hello, my friends!'}/>
                </div>
            </div>
        );
    }
};

export default ProfileInfo;