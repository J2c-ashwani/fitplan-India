
export function paymentNumberFormat(amount: number, currency: string): string {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
        }).format(amount);
    } catch (e) {
        return `${currency} ${amount}`;
    }
}
