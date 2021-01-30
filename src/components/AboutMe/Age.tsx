import {useCallback, useEffect, useState} from "react";

export function Age() {
    // Accounts for leap years and stuff
    function milliseconds_year() {
        const dateObj = new Date();
        const dateInit = Math.round(
            new Date(dateObj.getFullYear(), 0, 1).getTime()
        );
        const dateEnd = Math.round(
            new Date(dateObj.getFullYear(), 11, 31, 23, 59, 59, 999).getTime()
        );
        return dateEnd - dateInit;
    }

    // This will recursively calculate the closest fractional value to the given target, until it recuses 25 times or
    //  the value is within 0.001 of the target
    function searchSternBorcotTree(
        target: number,
        left_n: number,
        left_d: number,
        right_n: number,
        right_d: number,
        count: number = 0
    ): [number, number] {
        count++;
        const center_n: number = left_n + right_n;
        const center_d: number = left_d + right_d;
        // Check to see if we've gone too deep
        if (count > 25) return [center_n, center_d];
        // Check to see if we're close enough to the target
        if (Math.abs(target - center_n / center_d) > 0.001) {
            // Look right down the tree
            if (target > center_n / center_d)
                return searchSternBorcotTree(
                    target,
                    center_n,
                    center_d,
                    right_n,
                    right_d,
                    count
                );
            // Ok now look left
            return searchSternBorcotTree(
                target,
                left_n,
                left_d,
                center_n,
                center_d,
                count
            );
        }
        return [center_n, center_d];
    }

    function CalcAge() {
        let ageMs = new Date().getTime() - 1021004428000;
        const yearMs = milliseconds_year();
        const ageYearsComponent = Math.floor(ageMs / yearMs);
        const ageSecondsComponent = Math.floor((ageMs % yearMs) / 1000);
        const [target_n, target_d] = searchSternBorcotTree(
            ageSecondsComponent / (yearMs / 1000),
            0,
            1,
            1,
            1
        );
        return `${ageYearsComponent} and ${target_n}/${target_d}`;
    }

    const millisecondsYear = milliseconds_year();
    const time = new Date().getTime();
    // eslint-disable-next-line
    const memoizedCallbackCalcAge = useCallback(CalcAge, [
        millisecondsYear,
        time,
    ]);

    const [age, setAge] = useState(memoizedCallbackCalcAge());

    function UpdateAge() {
        setAge(memoizedCallbackCalcAge());
    }

    const memoizedCallbackUpdateAge = useCallback(UpdateAge, [
        memoizedCallbackCalcAge,
    ]);

    useEffect(() => {
        memoizedCallbackUpdateAge();

        const interval = setInterval(memoizedCallbackUpdateAge, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [memoizedCallbackUpdateAge]);

    return <li>{age} years old</li>;
}
