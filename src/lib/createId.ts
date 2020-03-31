let tagId: number = parseInt(window.localStorage.getItem('_idMax')||'0')||0;
function createId(){
   tagId++;
   window.localStorage.setItem('_idMax',tagId.toString());
   return tagId;
}
let recordId: number=parseInt(window.localStorage.getItem('_RMax')||'0')||0;
function createIdRecord(){
   recordId++;
   window.localStorage.setItem('_RMax',recordId.toString());
   return  recordId;
}
export {createId,createIdRecord};