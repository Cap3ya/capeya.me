const MySkills = {
  root: document.getElementById('mySkills'),

  set(arr) {
    arr.forEach(key => {
      if (key === undefined) return;
      this[key] ? this[key]++ : this[key] = 1;
    });
  },

  get() {
    const sortable = [];
    for (let [key, value] of Object.entries(this)) {
      if (typeof value === 'number') {
        sortable.push([key, this[key]])
      }
    }
    return sortable.sort((a, b) => b[1] - a[1]);
  },

  append() {
    for (let mySkill of this.get()) {
      const p = document.createElement('p')
      p.classList = "mySkill"
      p.innerHTML = mySkill[0] + " <span>" + mySkill[1] + "</span>"
      this.root.append(p)
    }
  }
}

export default MySkills;