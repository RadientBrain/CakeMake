<?php

if($_POST['button']) 
{ 
  
$from_email         = 'maheshwarichetan00@gmail.com'; //from mail, sender email addrress 
$recipient_email    = 'maheshwarichetan00@gmail.com'; //recipient email addrress 
  
//Load POST data from HTML form 
$sender_name    = $_POST["sender_name"] //sender name 
$reply_to_email = $_POST["sender_email"] //sender email, it will be used in "reply-to" header
$count          = $_POST["submit"] 
$subject        = "Cake Make Bill"//subject for the email 
$message        = '<table style="width:100%">
<tr><td>'.$sender_name.'  '.$subject.'</td></tr>
<tr><td>Email : '.$reply_to_email.'</td></tr>
<tr><td>Phone No. : '.$subject.'</td></tr>
<tr><td>Total Price is:'. $count.'</td></tr>
</table>'//body of the email 
  

//Validate the form fields  
if(strlen($sender_name)<1) 
{ 
    die('Name is too short or empty!'); 
}  

$boundary = md5("random"); // define boundary with a md5 hashed value 

//header 

$headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version 
$headers .= "From:".$from_email."\r\n"; // Sender Email 
$headers .= "Reply-To: ".$reply_to_email."\r\n"; // Email addrress to reach back 
$headers .= "Content-Type: multipart/mixed;\r\n"; // Defining Content-Type 
$headers .= "boundary = $boundary\r\n"; //Defining the Boundary 
//plain text  
$body = "--$boundary\r\n"; 
$body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n"; 
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";  
$body .= chunk_split(base64_encode($message));  

$sentMailResult = mail($recipient_email, $subject, $body, $headers); 

if($sentMailResult )  
{ 
   echo "File Sent Successfully."; 
   unlink($name); // delete the file after attachment sent. 
} 
else
{ 
   die("Sorry but the email could not be sent. 
                Please go back and try again!"); 
} 
}

?>
