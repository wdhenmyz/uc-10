import { celsiusParaFahrenheit } from "../temp_conversao";

describe("celsiusParaFahrenheit", () => {
    it("deve converter 0°C para 32°F", () => {
        const celsius = 0;
        const fahrenheit = celsiusParaFahrenheit(celsius);
        expect(fahrenheit).toBe(32);

        if (fahrenheit === 32) {
            console.log(fahrenheit);
            console.log("Teste passou");
        }
    });

    it("deve converter 100°C para 212°F", () => {
        const celsius = 100;
        const fahrenheit = celsiusParaFahrenheit(celsius);
        expect(fahrenheit).toBe(212);

        if (fahrenheit === 212) {
            console.log(fahrenheit);
            console.log("Teste passou");
        }
    })

    it("deve converter -10°C para F", () => {
        const celsius = -10;
        const fahrenheit = celsiusParaFahrenheit(celsius);
        expect(fahrenheit).toBe(14);

        if (fahrenheit === 14) {
            console.log(fahrenheit);
            console.log("Teste passou");
        }
    })

})