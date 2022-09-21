interface IQUrlBuilder {
    param(key: string, value: any): IQUrlBuilder;
    build(): string;
}
export default function QUrlBuilder(basePath: string): IQUrlBuilder;
export {};
