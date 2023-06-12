const Booking = require("../models/bookingModel");
const cron = require("node-cron");

// Delete past bookings task
cron.schedule("0 0 * * *", async () => {
    try {
        const localDate = new Date();
        const localOffset = localDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        const utcDate = new Date(
            localDate.getTime() - localOffset
        ).toISOString();
        const result = await Booking.deleteMany({ date: { $lt: utcDate } });
        console.log(`${result.deletedCount} past bookings deleted.`);
    } catch (error) {
        console.error("Error deleting past bookings:", error);
    }
});
