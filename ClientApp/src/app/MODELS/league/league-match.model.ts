export class LeagueMatchModel {
    leagueId: number;
    leagueMatchId: number;
    firstPlayerId: number;
    firstPlayerFullName: string;
    secondPlayerId: number;
    secondPlayerFullName: string;
    firstPlayerScore?: number;
    secondPlayerScore?: number;
    winnerPlayerId?: number;
    winnerPlayerFullName: number;
    matchDate?: Date;
    matchDatePersian: string;
}