import { data } from 'nba.js';
import nba from 'nba';

const teamRoster = async (year, team) => {
    try {
        let res = await data.teamRoster({ year: year, teamName: team });
        let players = res.league.standard.players;
        console.log(players);
        return res;
    } catch (err) {
        console.log(err);
    }
};

const playerStats = async (year, personId) => {
    try {
        let res = await data.playerProfile({ year: year, personId: personId });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

const findName = (name) => nba.findPlayer(name);

export { teamRoster, playerStats, findName };
