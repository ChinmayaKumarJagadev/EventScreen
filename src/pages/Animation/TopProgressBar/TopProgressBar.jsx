import React, { useEffect, useState } from "react";
import ProgressBarComponent from "../../../components/ProgressBar/ProgressBar";

const TopProgressBars = ({
    data,
    paused,
    activeIndex,
    setProgress,
    progress,
    totalDuration,
    remainingTime
}) => {
    useEffect(() => {
        if (activeIndex === 0 && !paused) {
            setProgress(Array(data?.backgroundImages?.length).fill(0));
        }

        const intervalProgress = setInterval(() => {
            if (!document.hidden && !paused) {
                setProgress((prevProgress) =>
                    prevProgress.map((value, i) =>
                        i === activeIndex || (i === 0 && activeIndex === 0)
                            ? value + 1
                            : value
                    )
                );
            }
        }, 50);

        return () => clearInterval(intervalProgress);
    }, [activeIndex, data?.backgroundImages?.length, paused]);

    return (
        <div>
            {data?.backgroundImages?.length === 0 ? (
                <ProgressBarComponent data={null} progress={null} index={null} />
            ) : (
                <div className="progress-bars-row">
                    {data?.backgroundImages?.map((_, index) => (
                        <ProgressBarComponent key={index} data={data} progress={progress} index={index} totalDuration={totalDuration} remainingTime={remainingTime}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopProgressBars;
