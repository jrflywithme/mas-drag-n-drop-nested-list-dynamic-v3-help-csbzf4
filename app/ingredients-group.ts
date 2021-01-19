import { IngredientListItem } from './ingredient-list-item';

export class IngredientsGroup {
  constructor(
    public id: number, 
    public title: string, 
    public items?: IngredientListItem[]){
    if(items == null)
      this.items = [];
   } 
}