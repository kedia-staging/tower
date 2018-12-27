export const convertToUTCTime = (date: string) => {
    var d = new Date(date);
    return d.toUTCString();
}
