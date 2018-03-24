<?php
$data = json_decode($_GET['json'],true);
$keys = array_keys($data);
$count_keys = count($keys);
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$html = '<html><head><title>Order</title></head><body><table>';

for($i=0;$i<$count_keys;$i++){
	if($keys[$i] == 'order') continue;
	$html .= '<tr>'.'<th align="left">'.$keys[$i].'</th>'.'<td align="left">'.$data[$keys[$i]].'</td>'.'</tr>';
}
$html .= '</table></body></html>';
mail("wection.team@gmail.com",'WECTION_ORDER',$html,$headers);
echo('1');
?>