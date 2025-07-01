export interface ISampleService {
  insert(): Promise<string>;

  select(): Promise<string>;

  selectAll(): Promise<string>;
}
