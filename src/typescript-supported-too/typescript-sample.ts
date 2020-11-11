interface MyStructure {
    mood: 'happy',
    temperature: 'warm'
}

const doSomething = <T extends MyStructure>(foo: number, bar: T[]): T[] => {
    if (foo < 42) {
        return [];
    }

    return bar.map((b) => {
        return {
            ...b,
            qux: true,
        }
    })
}