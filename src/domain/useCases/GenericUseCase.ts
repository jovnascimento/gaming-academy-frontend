export interface GenericUseCase<R, T> {
  execute(request: T): Promise<R> | R;
}
