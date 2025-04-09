export class Tools {
    static massiveRequire(req) {
        const files = [];

        req.keys().forEach(key => {
            files.push({
                key, data: req(key)
            });
        });

        return files;
    }

    static randomNumber(min, max) {
        if (!max) {
            max = min;
            min = 0;
        }

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
