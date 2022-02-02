module.exports = function check(str, bracketsConfig) {
    let bset = bracketsConfig.reduce((a,v)=>a+= v[0]+v[1], '');
    let st = [];
    for (let i in str) {
        let idx = bset.indexOf(str[i]);
        let clone = JSON.parse(JSON.stringify(idx))
        if (bset[idx]===bset[idx+1]){  //check if it is non-paired
            if (st[st.length-1]!==idx) st.push(clone) 
            else st.pop()    
        }
        else if (idx%2 === 0) {
            st.push(clone);
        }
            else 
                if (st.pop() !== (idx-1)) {
                    return false
                }
    }
    return !st.length
}
