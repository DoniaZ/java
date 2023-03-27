class Grid {


  constructor() {

      const __ROW__ = 10;
      const __COL__ = 10;
      //this._bus = bus;
      this._gridContainer = document.getElementById("gridContainer");
      //gridModel=[];
      this._grid = document.createElement("DIV");
      this._grid.classList.add("grid");

      for (let i = 0; i < __ROW__; i++) {
        const col = document.createElement("DIV");
        col.classList.add("column");
        col.style.display = "table-column";
        col.style.display = "block";
       // rowModel = [];
        //gridModelcol.appendChild(caze);
       //gridModel.push(colModel);
  

        for (let j = 0; j < __COL__; j++) {
          const caze = document.createElement("DIV");
          caze.classList.add("case");
          caze.style.border = "solid black 2px";
          caze.style.display = "table-cell";
          caze.style.width = "40px";
          caze.style.height = "40px";
          caze.style.backgroundColor = "red";   
          //colModel = [];
         //gridModel.push(rowModel);
          //grid.appendChild(col);
          col.appendChild(caze);				
          this._grid.appendChild(col);	
          this._gridContainer.appendChild(this._grid);
          }
      }
      //gridModel.push(rowModel);	
             

            }
    }