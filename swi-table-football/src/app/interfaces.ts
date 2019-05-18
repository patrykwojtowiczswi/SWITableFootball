export interface ITeam {
  id: number,
  name: string,
  playerOneId: number,
  playerTwoId: number,
  playerOne: IPlayer,
  playerTwo: IPlayer,
  rating: number
}

export interface IPlayer {
  id: number,
  name: string,
  surname: string
}

export interface IMatch {
  id: number,
  teamOneId: number,
  teamTwoId: number,
  teamOne: ITeam,
  teamTwo: ITeam,
  winner: number,
  date: Date
}

export interface IAddPlayer {
  name: string,
  surname: string
}

export interface IAddTeam {
  name: string,
  playerOneId: number,
  playerTwoId: number,
}

export interface IAddMatch {
  teamOneId: number,
  teamTwoId: number,
  winner: number,
}


