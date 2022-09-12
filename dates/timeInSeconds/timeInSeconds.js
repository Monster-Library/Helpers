const timeInSeconds = (time, format) => {
    const hour = 60 * 60, day = hour * 24, week = day * 7, month = week * 4;
    switch (format) {
        case "m":
            return month * time;
        case "w":
            return week * time;
        case "d":
            return day * time;
        case "h":
            return hour * time;
    }
};
export default timeInSeconds;
