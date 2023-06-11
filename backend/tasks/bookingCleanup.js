const Booking = require("../models/bookingModel");
const cron = require("node-cron");

// Delete past bookings task
cron.schedule("0 0 * * *", async () => {
    try {
        const currentDate = new Date();
        const result = await Booking.deleteMany({ date: { $lt: currentDate } });
        console.log(`${result.deletedCount} past bookings deleted.`);
    } catch (error) {
        console.error("Error deleting past bookings:", error);
    }
});
