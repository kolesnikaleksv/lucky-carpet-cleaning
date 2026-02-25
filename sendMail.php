<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars($_POST['user_name']);
  $subject = htmlspecialchars($_POST['subject']);
  $email   = htmlspecialchars($_POST['email']);
  $phone   = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['Message']);

  $mail = new PHPMailer(true);

  try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'luckycarpetcleaning.orders@gmail.com';
    $mail->Password   = 'ylklqfvuqeophuot';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('luckycarpetcleaning.orders@gmail.com', 'Contact Form - Lucky Carpet Cleaning website');

    $mail->addAddress('luckycarpetcleaning.orders@gmail.com');

    $mail->Subject = "New Quote Request: " . $subject;

    $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    $mail->send();
    echo "Thank you! Your message has been sent.";
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}
