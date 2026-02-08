$(function () {
    const RATE_PER_HOUR = 35.0;

    function showError(show) {
        $("#hoursError").toggleClass("d-none", !show);
    }

    function formatMoney(amount) {
        return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }

    $("#calcBtn").on("click", function () {
        const hoursRaw = $("#hours").val();
        const hours = parseFloat(hoursRaw);

        if (isNaN(hours) || hours <= 0) {
            showError(true);
            $("#total").val("");
            return;
        }

        showError(false);

        const total = hours * RATE_PER_HOUR;
        $("#total").val(formatMoney(total));
    });
});