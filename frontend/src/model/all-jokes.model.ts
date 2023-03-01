export interface AllJokesModel {
  item: JokesItemModel[];
  total: number;
}
export interface JokesItemModel {
  _id: string;
  title: string;
  content: string;
  like: number;
  dislike: number;
}
