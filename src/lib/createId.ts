let id: number = parseInt( window.localStorage.getItem('_idMax')!);
function createId(){
   id++;
   window.localStorage.setItem('_idMax',id.toString());
   return id;
}
export default createId;