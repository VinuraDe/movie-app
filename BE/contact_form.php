<?php
header("Access-Control-Allow-Origin: https://movie-app-ebeyonds.netlify.app");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json');

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$adminEmails = [
    "vinuradesilva1@gmail.com",
    "vinuradesilva1@gmail.com"
];

$rawData = file_get_contents("php://input");
$input = json_decode($rawData, true);

$firstName = trim($input['firstName'] ?? '');
$lastName = trim($input['lastName'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$comments = trim($input['comments'] ?? '');

$errors = [];
if ($firstName === '') $errors[] = 'First Name is required.';
if ($lastName === '') $errors[] = 'Last Name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid Email is required.';
if ($comments === '') $errors[] = 'Comments are required.';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["success" => false, "errors" => $errors]);
    exit;
}

$data = [
    "firstName" => $firstName,
    "lastName" => $lastName,
    "email" => $email,
    "phone" => $phone,
    "comments" => $comments,
    "submittedAt" => date('Y-m-d H:i:s')
];

$file = 'conatactData.json';
$existingData = [];

if (file_exists($file)) {
    $json = file_get_contents($file);
    $existingData = json_decode($json, true) ?? [];
}

$existingData[] = $data;
file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT));

function sendMail($to, $subject, $body) {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'e6ce2596710899';    
        $mail->Password   = '0c14f4f74c6738';     
        $mail->Port       = 2525;
        $mail->SMTPSecure = 'tls';

        $mail->setFrom('no-reply@movie-app.com', 'Movie App');
        $mail->addAddress($to);

        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
    } catch (Exception $e) {
        error_log("Mail error: " . $mail->ErrorInfo);
    }
}

$userSubject = "Thank you for contacting us!";
$userBody = "Dear $firstName,\n\nWe received your message:\n\n\"$comments\"\n\nWe'll get back to you soon.\n\neBeyonds Team";

$adminSubject = "New Form Submission from $firstName $lastName";
$adminBody = "New submission received:\n\n"
    . "First Name: $firstName\n"
    . "Last Name: $lastName\n"
    . "Email: $email\n"
    . "Phone: $phone\n"
    . "Comments: $comments\n\n"
    . "Submitted at: " . $data['submittedAt'];

sendMail($email, $userSubject, $userBody);

foreach ($adminEmails as $adminEmail) {
    sendMail($adminEmail, $adminSubject, $adminBody);
}

echo json_encode(["success" => true, "message" => "Form submitted successfully."]);
