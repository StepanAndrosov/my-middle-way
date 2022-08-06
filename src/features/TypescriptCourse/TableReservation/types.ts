export interface ApiError<TData> {
    // define error interface
  }

  export interface ApiSuccess<TData> {}

  //example interface to demonstrate usage
export interface TableReservation {
    id: string;
    dateRequested: string;
    guestsCount: number;
    dateEvent: string;
    options: string[];
  }

  // define response type
export type ApiResponse<T> = unknown;


export interface Api {
  (form: Partial<TableReservation>): Promise<ApiResponse<TableReservation>>;
}