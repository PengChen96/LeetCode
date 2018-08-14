/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  var allRes = [];
  var temp = '';
  for(var i=0;i<len;i++){
    var t = temp.indexOf(s[i]);
    if(t==-1){
      temp += s[i];
      if(s[i+1]==undefined){
        allRes[temp.length] = temp.length;
      }
    }
    if(t!=-1){
      allRes[temp.length] = temp.length;
      temp = temp.slice(t+1) + s[i];
    }
  }
  var result = allRes[allRes.length-1]===undefined?0:allRes[allRes.length-1];
  return result;
};