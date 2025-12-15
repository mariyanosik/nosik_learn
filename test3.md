## hmtl
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Последнее испытание</title>
    <link rel="stylesheet" href="setting-3.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="column">
      <strong>Базовые</strong><br>
      block<br>
      inline<br>
      list-item<br>
      none
    </div>
    <div class="column">
      <strong>Сложные</strong><br>
      inline-block<br>
      inline-table
    </div>
    <div class="table">
      <div class="row">
        <div class="cell col-1">
          <strong>Табличные</strong>
        </div>
        <div class="cell col-2"></div>
        <div class="cell col-3"></div>
      </div>
      <div class="row">
        <div class="cell col-1">
          table
        </div>
        <div class="cell col-2">
          -row<br>
          -cell<br>
          -column<br>
          -caption<br>
        </div>
        <div class="cell col-3">
          строка<br>
          ячейка<br>
          колонка<br>
          заголовок<br>
        </div>
      </div>
    </div>
  </body>
</html>
```

## css
```
.column {
  margin-bottom: 20px;
  margin-right: 16px;
  padding: 10px;

  background-color: rgba(0, 255, 255, 0.2);
}

.table {
  border-collapse: collapse;
}

.cell {
  padding: 5px 9px;

  background-color: rgba(0, 255, 255, 0.2);
  border: 2px solid white;
}

/* Стили, которые нужно изменять */
.column {
display: inline-block;
  vertical-align: top;
  width: 80px;
}

.table {
display: table;
border-collapse: collapse;
}

.row {
 display: table-row;
}

.cell {
display: table-cell;
width: 100px;
}

.col-3 {
  display: none;
}
