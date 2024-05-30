<?php
session_start();
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "userinfo";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die('Could not connect to the database.');
    } else {
        $Select = "SELECT email FROM data WHERE email = ? LIMIT 1";

        $stmt = $conn->prepare($Select);
        if (!$stmt) {
            echo "Error preparing SELECT query: " . $conn->error;
        } else {
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                // Email doesn't exist in the database, you can perform any desired action
                // For example, redirect to questions.html for the quiz:
                $_SESSION['email'] = $email; // Set the user's email
                $_SESSION['username'] = $username;
                header('Location: questions.html');
                exit();
            } else {
                // Email already exists in the database, you can redirect to check.php or perform any other action
                $_SESSION['email'] = $email; // Set the user's email
                $_SESSION['username'] = $username;
                header('Location: check.php');
                exit();
            }
            $stmt->close();
            $conn->close();
        }
    }
} else {
    echo "Submit button is not set";
}
?>
