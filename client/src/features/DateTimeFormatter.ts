export class DateTimeFormatter {
    public static secondsToDate(seconds: number) {
        return new Date(seconds * 1000).toLocaleDateString()
    }
}
