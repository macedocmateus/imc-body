export function notANumber(value: number | string) {
    return isNaN(value as number) || value == '';
}

export function calculateIMC(weight: number, height: number) {
    return (weight / (height / 100) ** 2).toFixed(2);
}
