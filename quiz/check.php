<?php
session_start();
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "userinfo";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
echo "<head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      
        padding: 10px;
        width:80%;
        margin: auto;
        font-size: 1.3em;
    }
  
    mark {
        background-color: #4CAF50;
        color: white;
        padding: 5px;
        text-align:center;
        font-size:30px;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
    }
    .question {
        background-color: white;
        padding: 20px;
        margin: 20px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
</style>
</head>";

$questions = [
    1 => [
        'question' => 'What is the time complexity of the Bubble Sort algorithm in the worst-case scenario?',
        'options' => [
            'a' => 'O(n)',
            'b' => 'O(n log n)',
            'c' => 'O(n^2)',
            'd' => 'O(1)'
        ]
    ],
    2 => [
        'question' => 'How does the Insertion Sort algorithm work?',
        'options' => [
            'a' => 'Divide and conquer',
            'b' => 'Swapping adjacent elements',
            'c' => 'Building a binary tree',
            'd' => 'Building a sorted subarray'
        ]
    ],
    3 => [
        'question' => 'Which sorting algorithm is based on the divide-and-conquer strategy?',
        'options' => [
            'a' => 'Bubble Sort',
            'b' => 'Insertion Sort',
            'c' => 'Quick Sort',
            'd' => 'Selection Sort'
        ]
    ],
    4 => [
        'question' => 'Counting Sort is most efficient when sorting:',
        'options' => [
            'a' => 'Floating-point numbers',
            'b' => 'Negative integers',
            'c' => 'Integers within a known range',
            'd' => 'Randomly shuffled elements'
        ]
    ],
    5 => [
        'question' => 'How does the Selection Sort algorithm work?',
        'options' => [
            'a' => 'Recursively dividing the array',
            'b' => 'Repeatedly selecting the minimum element',
            'c' => 'Swapping adjacent elements',
            'd' => 'Building a binary tree'
        ]
    ],
    6 => [
        'question' => 'How is the main drawback of bubble sort?',
        'options' => [
            'a' => 'Inefficient for large data sets',
            'b' => 'Requires additional memory',
            'c' => 'Unstable sorting',
            'd' => 'No drawback; it\'s always efficient'
        ]
    ],
    7 => [
        'question' => 'Which sorting algorithm is considered as not an in-place sorting algorithm?',
        'options' => [
            'a' => 'Counting Sort',
            'b' => 'Quick Sort',
            'c' => 'Selection Sort',
            'd' => 'Bubble Sort'
        ]
    ],
    8 => [
        'question' => 'In Counting Sort, what is the range of input values it can handle?',
        'options' => [
            'a' => 'Any range of values',
            'b' => 'Positive integers only',
            'c' => 'Negative integers only',
            'd' => 'Non-integer values only'
        ]
    ],
    9 => [
        'question' => 'Which sorting algorithm is known for its simplicity and ease of implementation?',
        'options' => [
            'a' => 'Counting Sort',
            'b' => 'Quick Sort',
            'c' => 'Insertion Sort',
            'd' => 'Bubble Sort'
        ]
    ],
    10 => [
        'question' => 'What is the primary characteristic of stable sorting algorithms?',
        'options' => [
            'a' => 'They sort elements in a stable, predictable pattern',
            'b' => 'They work well with large datasets',
            'c' => 'The relative order of equal elements is preserved',
            'd' => 'They have a time complexity of O(1)'
        ]
    ],
];



$correctAnswers = ['q1' => 'c', 'q2' => 'd', 'q3' => 'c', 'q4' => 'c', 'q5' => 'b', 'q6' => 'a', 'q7' => 'a', 'q8' => 'c', 'q9' => 'd', 'q10' => 'c'];

$score = 0;
$attempted = [];
$notAttempted = [];

if ($conn->connect_error) {
    die('Could not connect to the database.');
} else {
    if (isset($_SESSION['email'])) {
       
        $email = $_SESSION['email'];
        

        // Check if the user has already attempted the quiz
        $checkAttemptedQuery = "SELECT * FROM data WHERE email = ?";
        $stmt = $conn->prepare($checkAttemptedQuery);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // User has attempted the quiz, retrieve and display their previous score and answers
            $row = $result->fetch_assoc();

            $score = $row['score'];

            echo "<h2>You have already given test ...Take a look at your assessment!<h2>";
            echo "<h3><mark>Score: $score/10</mark></h3>";

            echo "<h3>Questions Attempted:</h3>";
            echo "<ol>";
            
            for ($i = 1; $i <= 10; $i++) {
                $question = 'q' . $i;
               
                $userAnswer = $row[$question];
                if (!is_null($userAnswer)) {
                    echo "<li>";
                    echo $questions[$i]['question'];
                    echo "<ul>";
                    echo "<br>";
                    foreach ($questions[$i]['options'] as $option => $text) {
                        echo "<li>";
                      
                        $color = ($userAnswer === $option) ? ($option === $correctAnswers[$question] ? 'green' : 'red') : ($option === $correctAnswers[$question] ? 'green' : 'black');

                        echo "<label style='color: $color;'>";
                        echo $text;
                        echo "</label>";
                        echo "</li>";
                    }
                    echo "</ul>";
                    echo "</li>";
                    echo "<br>";
                    echo "<br>";
                }
            }
            echo "</ol>";

            echo "<h3>Questions Not Attempted:</h3>";
            echo "<ol>";
            for ($i = 1; $i <= 10; $i++) {
                $question = 'q' . $i;
               
                $userAnswer = $row[$question];
                if (is_null($userAnswer)) {
                    echo "<li>";
                    echo $questions[$i]['question'];
                    echo "<ul>";
                    echo "<br>";
                    foreach ($questions[$i]['options'] as $option => $text) {
                        echo "<li>";
                        $color = ($option === $correctAnswers[$question]) ? 'green' : 'black';
                        echo "<label style='color: $color;'>";
                        echo $text;
                        echo "</label>";
                        echo "</li>";
                    }
                    echo "</ul>";
                    echo "</li>";
                    echo "<br>";
                    echo "<br>";
                }
            }
            echo "</ol>";
        } else {
            // User is taking the quiz for the first time, calculate their score and insert answers into the database
            $email = $_SESSION['email'];
            $username = $_SESSION['username'];

            // Loop through the submitted answers and calculate the score
            for ($i = 1; $i <= 10; $i++) {
                $question = 'q' . $i;
                if (isset($_POST[$question])) {
                    $userAnswer = $_POST[$question];
                    if ($userAnswer === $correctAnswers[$question]) {
                        $score++;
                    }
                    $attempted[$question] = $userAnswer;
                } else {
                    $notAttempted[] = $i;
                }
            }

            // Insert user's answers and score into the database as a new row
            $insertQuery = "INSERT INTO data (username,email, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, score) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($insertQuery);
            $stmt->bind_param("sssssssssssss",$username, $email, $attempted['q1'], $attempted['q2'], $attempted['q3'], $attempted['q4'], $attempted['q5'], $attempted['q6'], $attempted['q7'], $attempted['q8'], $attempted['q9'], $attempted['q10'], $score);
            $stmt->execute();

            // Display the user's score and attempted/missing questions
            echo "<h3><mark>Score: $score/10</mark></h3>";

            echo "<h3>Questions Attempted:</h3>";
            echo "<ol>";
            for ($i = 1; $i <= 10; $i++) {
                $question = 'q' . $i;
                $userAnswer = $attempted[$question] ?? null;
                if (!is_null($userAnswer)) {
                    echo "<li>";
                    echo $questions[$i]['question'];
                    echo "<ul>";
                    echo "<br>";
                    foreach ($questions[$i]['options'] as $option => $text) {
                        echo "<li>";
                        $color = ($userAnswer === $option) ? ($option === $correctAnswers[$question] ? 'green' : 'red') : ($option === $correctAnswers[$question] ? 'green' : 'black');
                        echo "<label style='color: $color;'>";
                        echo $text;
                        echo "</label>";
                        echo "</li>";
                    }
                    echo "</ul>";
                    echo "</li>";
                    echo "<br>";
                    echo "<br>";
                }
            }
            echo "</ol>";

            echo "<h3>Questions Not Attempted:</h3>";
            echo "<ol>";
            foreach ($notAttempted as $questionNumber) {
                $question = 'q' . $questionNumber;
                echo "<li>";
                echo $questions[$questionNumber]['question'];
                echo "<ul>";
                echo "<br>";
                foreach ($questions[$questionNumber]['options'] as $option => $text) {
                    echo "<li>";
                    $color = ($option === $correctAnswers[$question]) ? 'green' : 'black';
                    echo "<label style='color: $color;'>";
                    echo $text;
                    echo "</label>";
                    echo "</li>";
                }
                echo "</ul>";
                echo "</li>";
                echo "<br>";
                echo "<br>";
            }
            echo "</ol>";
        }
    } else {
       
        echo "Session data not found. Please log in to view your results.";
    }
    $conn->close();
}
?>
