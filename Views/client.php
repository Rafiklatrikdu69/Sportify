<?php
require_once (PATH_ENT."Task.php");

class infoTaskView{
    public function setInfo (Task $task){
        echo '<style>
table,td,tr{
border-collapse: collapse;
border-style: solid;
}
</style>
<table>
            <td>Id</td>
            <td>Nom</td>
            <td>Description</td>
            <td>Date</td>
            <tr>
            <td>'.$task->getId().'</td>
            <td>'.$task->getNom().'</td>
            <td>'.$task->getDescription().'</td>
            <td>'.$task->getDateEcheance().'</td>
            </tr>
            


</table>';


    }
}