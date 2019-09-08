<?php
error_reporting(0);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Loading Composer's autoloader
require 'vendor/autoload.php';

function is_connected() {

    $connected = fopen("http://www.google.com:80/","r");
    if($connected) {
        return true;
    } else {
        return false; 
    }
} 
function send_mail($name, $email, $phone, $company, $message){

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $data['sent'] = 0;
    
    try {
        if (is_connected() == false) {
            $data['sent'] = 0;
            $data['error'] = "It seems you are currently offline.";
        }
        else {
            //Server settings
            $mail->IsSMTP();
            // $mail->SMTPDebug = 2;
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'soliuomogbolahan01@gmail.com';
            $mail->Password   = 'omogbolahan';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;
        
            //Recipients
            $mail->setFrom($email, $company);
            $mail->addAddress('soliuomogbolahan01@gmail.com');     // Add a recipient


            $mail->isHTML(true);
            $mail->Subject = $name.' '.$phone;
            $mail->Body    ="Hello Uthman, a user ".$name.
                            " has contacted you with the following message\n 
                            <pre>".$message."</pre>";
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            $data['sent'] = 1;
            $data['success'] = 'Thanks for contacting us, your message has been sent.';
        }
    }
     catch (phpmailerException $e) {
        $data['sent'] = 0;
        $data['error'] = $e->errorMessage(); //Pretty error messages from PHPMailer
    }

    return $data;
}

if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['message'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $company = $_POST['company'];


    $data = send_mail($name, $email, $phone, $company, $message);
    header('Content-Type: application/json');
    echo json_encode($data, JSON_PRETTY_PRINT);

}
?>