// Count skill # of occurences from projects
const skillStr = document.querySelectorAll(".skills")

const skillArr = new Array
skillStr.forEach( 
    str => str.textContent.split(' ').forEach(
            arr => skillArr.push( arr ) 
    )
)

const skillObj = {};
for (let skill of skillArr) {
        !skillObj[skill] ?
            skillObj[skill] = 1 :
            skillObj[skill] += 1
} 

// Append skill + # of occurences to #mySkills
const mySkills = document.getElementById('mySkills')
for (let skill in skillObj) {
    const p = document.createElement('p')
    p.classList = "skill"
    p.innerHTML = skill + " <span>" + skillObj[skill] + "</span>"
    mySkills.append(p)
}
