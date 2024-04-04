import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../utils/apiServices';
import './Animation.scss';
import TopProgressBars from './TopProgressBar/TopProgressBar';
import PauseAnimation from '../../components/PauseAnimation/PauseAnimation';
import AnimationInfo from '../Animation/AnimationInfo/AnimationInfo'

const Animation = () => {
    const [users, setUsers] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [remainingTime, setRemainingTime] = useState(5000);
    const [lastPausedTimestamp, setLastPausedTimestamp] = useState(null);

    useEffect(() => {
        const headers = {
            Authorization: 'Bearer YourAuthTokenHere',
        };
        const fetchData = async () => {
            try {
                const usersData = await fetchUsers(headers);
                setUsers(usersData?.result?.[0]);
                setProgress(Array(usersData?.result?.[0]?.backgroundImages?.length).fill(0));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    
    useEffect(() => {
        let intervalIndex;

        if (!paused) {
            intervalIndex = setInterval(() => {
                setRemainingTime(prevRemainingTime => {
                    const nextRemainingTime = prevRemainingTime - 1000; 
                    if (nextRemainingTime <= 0) {
                        const nextIndex = (activeIndex + 1) % users?.backgroundImages?.length;
                        setActiveIndex(nextIndex);
                        setCurrentImageIndex(nextIndex);
                        updateProgress(nextIndex);
                        return 5000;
                    }
                    return nextRemainingTime;
                });
            }, 1000); 
        } else {
            clearInterval(intervalIndex);

            if (lastPausedTimestamp !== null) {
                const now = Date.now();
                const pausedTime = now - lastPausedTimestamp;
                console.log(now, pausedTime)
                setLastPausedTimestamp(null);
                setRemainingTime(prevRemainingTime => Math.max(prevRemainingTime - pausedTime, 0));
            }
        }

        return () => clearInterval(intervalIndex);
    }, [paused, activeIndex, lastPausedTimestamp, users]);


    // const handlePause = () => {
    //     if (paused) {
    //         setPaused(false);
    //     } else {
    //         setPaused(true);
    //         setLastPausedTimestamp(Date.now());
    //     }
    // };


    const handlePreviousImage = () => {
        const prevIndex = (activeIndex - 1 + users?.backgroundImages?.length) % users?.backgroundImages?.length;
        setActiveIndex(prevIndex);
        setCurrentImageIndex(prevIndex);
        updateProgress(prevIndex);
    };

    const handleNextImage = () => {
        const nextIndex = (activeIndex + 1) % users?.backgroundImages?.length;
        setActiveIndex(nextIndex);
        setCurrentImageIndex(nextIndex);
        updateProgress(nextIndex);
    };

    const updateProgress = (index) => {
        const updatedProgress = [];
        updatedProgress[index] = 1;
        setProgress(updatedProgress);
    };

    return (
        <div className="animation-container">
            {users[0]?.backgroundImages?.length !== 0 && <PauseAnimation setIsPaused={setPaused} />}
            <div
                className="content-container"
                style={{
                    backgroundImage: users && users.backgroundImages ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${users.backgroundImages[currentImageIndex]})` : 'none',
                    animationPlayState: `${paused ? "paused" : ""}`
                }}
            >
                <TopProgressBars
                    totalImages={users?.backgroundImages?.length}
                    totalDuration={5}
                    activeIndex={activeIndex}
                    progress={progress}
                    setProgress={setProgress}
                    paused={paused}
                    data={users}
                    remainingTime={remainingTime}
                    setActiveIndex={(index) => {
                        setActiveIndex(index);
                        setCurrentImageIndex(index);
                    }}
                />
                <div className="left-container" onClick={handlePreviousImage} />
                <div className="right-container" onClick={handleNextImage} />
                <AnimationInfo data={users} />
            </div>
        </div>
    );
};

export default Animation;
