export class TimestampConverter {

    /**
     * Sequelize stores timestamps as Dates, but we want to store these as seconds since unix epoch when we 
     * send responses.
     * 
     * This function converts the Sequelize timestamps from Dates to seconds since unix epoch
     */
    public static convertTimestampsToSecondsSinceEpoch(data: {createdAt: Date, updatedAt: Date | null}): {createdAt: number, updatedAt: number | null} {
        return {
            createdAt: data.createdAt.getTime() / 1000,
            updatedAt: data.updatedAt ? data.updatedAt.getTime() / 1000 : null
        }
    }
}