<?php
$data = json_decode($_POST['json'],true);
$keys = array_keys($data);
$count_keys = count($keys);
if($count_keys < 8){ die(); }
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$html = '<html><head><title>Hello</title></head><body><table>';

for($i=0;$i<$count_keys;$i++){
	if($keys[$i] == 'order') continue;
	$html .= '<tr>'.'<th align="left">'.$data[$keys[$i]]['title'].'</th>'.'<td align="left">'.$data[$keys[$i]]['value'].'</td>'.'</tr>';
}
$html .= '</table>';
$html .= '<br><br><h3>Заказ</h3>';
$html .= $data['order'].'</body></html>';
//file_put_contents('file.txt',' '.$_POST['json']);
mail("dveri123.work@gmail.com",'dveri123order',$html,$headers);
mail("dveriprosto123@gmail.com",'dveri123order',$html,$headers);
?>
