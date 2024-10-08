export interface Artist {
  _id: string,
  name: string,
  image: string | null,
  info: string,
}

export interface Album {
  _id: string,
  name: string,
  artist: Artist,
  date: number,
  image: string | null,
}

export interface Track {
  _id: string,
  name: string,
  album: string,
  artist: string;
  duration: string,
  number: number,
}

export interface TrackHistoryMutation {
  track: string;
}

export interface TracksHistory {
  _id: string;
  trackName: string;
  artist: {
    name: string;
    _id: string;
  };
  date: string;
}

export interface RegisterMutation {
  username: string,
  password: string,
}

export interface User {
  _id: string,
  username: string,
  token: string,
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string,
      message: string,
    }
  },
  message: string,
  name: string,
  _message: string,
}

export interface RegisterResponse {
  message: string,
  user: User,
}

export interface LoginMutation {
  username: string,
  password: string,
}

export class GlobalError {
  error?: string
}