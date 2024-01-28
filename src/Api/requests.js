const getRoster = (TeamKey) => {
    return(`/teams/${TeamKey}/roster/depthChart`);
}

const getTeam = (TeamKey) => {
    return (`/teams/${TeamKey}`);
}

const getSchedule = (dateString) => {
    const date = new Date(dateString);
    const MM = date.getMonth() + 1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    return(`schedule?sportId=1&date=${MM}/${dd}/${yyyy}`)
}

const getPlayer = (PlayerKey) => {
    return (`people?personIds=${PlayerKey}`)
}

const requests = {
    fetchSchedule : getSchedule,
    fetchTeam : getTeam,
    fetchRoster : getRoster,
    fetchPlayer : getPlayer,
}

export default requests