export class LeagueModel {
    id: number;
    typeId: number;
    typeName: string;
    iteration: number;
    startDate: Date;
    startDatePersian: string;
    endDate: Date;
    endDatePersian: string;
    isCompleted: boolean;
    title: string;
    playerCount: number;
    winnerPlayerId: number;
    winnerPlayerFullName: string;
}
