export interface Position {
  x: number;
  y: number;
}

export interface GridSize {
  width: number;
  height: number;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface GameState {
  grid: GridSize;
  snake: Position[];
  food: Position;
  direction: Direction;
  nextDirection: Direction;
}