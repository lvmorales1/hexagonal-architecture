export default interface UseCase<IN, OUT> {
    run(params: IN): Promise<OUT>;
}