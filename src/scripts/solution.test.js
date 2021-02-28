import {Solution} from './solution';

describe('Solution', () => {
    it('exists', () => {
        expect(typeof Solution).not.toBe('undefined');
    });

    it('compares equal length versions', () => {
        expect(Solution('1.0.3', '1.0.7')).toEqual(-1);
        expect(Solution('1.0.7', '1.0.3')).toEqual(1);
        expect(Solution('1.0.3', '1.0.3')).toEqual(0);
    });

    it('compares different length versions', () => {
        expect(Solution('1.2', '1.2.9.9.9.9')).toEqual(-1);
        expect(Solution('1.3', '1.2.9.9.9.9')).toEqual(1);
        expect(Solution('1.3.4', '1.10')).toEqual(-1);
        expect(Solution('1.3', '1.3.0')).toEqual(0);
    });

    it('compares leading zero versions', () => {
        expect(Solution('0.1', '1.1')).toEqual(-1);
        expect(Solution('0.2', '0.1')).toEqual(1);
        expect(Solution('0.1', '0.1')).toEqual(0);
    });
});
