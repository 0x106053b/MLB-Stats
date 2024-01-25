const getTeam = (TeamKey) => {
    return(`/teams/${TeamKey}/roster/depthChart`);
}

const getSchedule = (MM, dd, yyyy) => {
    return(`schedule?sportId=1&date=${MM}/${dd}/${yyyy}`)
}

const getPlayer = (PlayerKey) => {
    return (`people?personIds=${PlayerKey}`)
}

const requests = {
    fetchSchedule : getSchedule,
    fetchTeam : getTeam,
    fetchPlayer : getPlayer,
}
export default requests