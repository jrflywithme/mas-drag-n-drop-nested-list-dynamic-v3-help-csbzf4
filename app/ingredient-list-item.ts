export class IngredientListItem {
   constructor(
     public id?: number, 
     public title?: string,      
     public children?: IngredientListItem[]){
        if(children == null)
      this.children = [];
   }   
}