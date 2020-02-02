/**
 * 深拷贝
 * @param {*} p 父
 * @param {*} c 子
 */
export const deepCopy = (p, c) => {
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === "object") {
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      if (p[i] === undefined) {
        c[i] = null;
      } else {
        c[i] = p[i];
      }
    }
  }
  return c;
}

/**
 * 判断是否为空对象
 * @param {*} e 
 */
export const isEmptyObject = (e) => {
  for (let t in e) {
    return !1;
  }
  return !0;
}
