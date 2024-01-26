const skills = {
    set(key) {
        if (key === undefined) return;
        this[key] ? this[key]++ : this[key] = 1;
    },

    get() {
        const sortable = [];
        for (let [key, value] of Object.entries(this)) {
            if (typeof value === 'number') {
                sortable.push([key, this[key]])
            }
        }
        return sortable.sort((a, b) => b[1] - a[1]);
    }
}

export default skills;