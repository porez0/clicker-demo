export function formate(num) {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
        return num;
    }
    let si = [
      {v: 1E3, s: "K"},
      {v: 1E6, s: "M"},
      {v: 1E9, s: "B"},
      {v: 1E12, s: "T"},
      {v: 1E15, s: "q"},
      {v: 1E18, s: "Q"},
      {v: 1E21, s: "s"},
      {v: 1E24, s: "S"},
      {v: 1E27, s: "o"},
      {v: 1E30, s: "n"},
      {v: 1E33, s: "d"},
      {v: 1E36, s: "U"},
      {v: 1E39, s: "D"},
      {v: 1E42, s: "T"},
      {v: 1E45, s: "Qt"},
      {v: 1E48, s: "Qd"},
      {v: 1E51, s: "Sd"},
      {v: 1E54, s: "St"},
      {v: 1E57, s: "O"},
      {v: 1E60, s: "N"},
      {v: 1E63, s: "v"},
      {v: 1E66, s: "c"}
      ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (num >= si[index].v) {
            break;
        }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}