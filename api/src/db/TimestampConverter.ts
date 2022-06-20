export class TimestampConverter {

    /**
     * Sequelize stores timestamps as Dates, but we want to store these as seconds since unix epoch when we 
     * send responses.
     * 
     * This function converts the Sequelize timestamps from Dates to seconds since unix epoch
     */
    public static convertTimestamps(data: {createdAt: Date, updatedAt: Date | null}): {createdAt: number, updatedAt: number | null} {
        return {
            createdAt: this.convertDateToSecondsSinceEpoch(data.createdAt),
            updatedAt: data.updatedAt ? this.convertDateToSecondsSinceEpoch(data.updatedAt) : null
        }
    }

    private static convertDateToSecondsSinceEpoch(date: Date ): number {
        return Math.floor(date.getTime() / 1000)
    }
}