const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof(members)==='object'){
  let teamName='';
  let t='';
    for (let i=0;i<members.length;i++){
      let type =typeof(members[i]);
      if (type==='string'){
        t=members[i].substr(0,1).toUpperCase();
        teamName=teamName+t;
      }else{
        ;
      }
    }return teamName.split('').sort().join('');}else{
    return false;
  }
}


module.exports = {
  createDreamTeam
};
