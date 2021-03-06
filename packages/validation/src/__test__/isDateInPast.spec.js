import isDateInPast from '../isDateInPast';

const getRandomInt = (min, max) => {
    return min + Math.floor(Math.random() * Math.floor(max));
};

describe('isDateInPast', () => {
    it('should return true', () => {
        const values = Array.from(Array(5), () => {
            const date = new Date();
            date.setMonth(date.getMonth() - getRandomInt(1, 12));
            date.setYear(date.getFullYear() - getRandomInt(1, 5));
            return date;
        });
        values.forEach((value) => {
            expect(isDateInPast(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = Array.from(Array(5), () => {
            const date = new Date();
            date.setMonth(date.getMonth() + getRandomInt(1, 12));
            date.setYear(date.getFullYear() + getRandomInt(1, 5));
            return date;
        });
        values.push('sfsdf', 0, { foo: 'bar' }, []);
        values.forEach((value) => {
            expect(isDateInPast(value)).toBe(false);
        });
    });
});
