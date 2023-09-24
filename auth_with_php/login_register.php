<?php

require('connect.php');

if (isset($_POST['register'])) {
    $user_exist_query = "SELECT * FROM `register_users` WHERE `username`='$_POST[username]'OR `email`='$_POST[email]'";
    //(username,email) VALUES('$_POST[username]','$_POST[email]')";

    $result=mysqli_query($con, $user_exist_query);

    // $user_exist_query = "SELECT * FROM `register_users` WHERE `username`=? OR `email`=?";
    // $stmt = mysqli_prepare($con, $user_exist_query);
    // mysqli_stmt_bind_param($stmt, "ss", $_POST['username'], $_POST['email']);
    // mysqli_stmt_execute($stmt);
    // $result = mysqli_stmt_get_result($stmt);

    if ($result) {
        if (mysqli_num_rows($result) > 0) //it will be executed if username or email is already taken
        {
            //if any user has already taken username or email
            $result_fetch = mysqli_fetch_assoc($result);
            if ($result_fetch['username'] == $_POST['username']) {
                //error for username already registered
                echo "<script>alert('$result_fetch[username] - username already taken');
                window.location.href='index.php';
                </script>";
            } else {
                //error for email already registered
                echo "<script>alert('$result_fetch[email] - e-mail already taken');
                 window.location.href='index.php';
                 </script>";
            }
        } else //it will be exceuted if no one has taken username or email before
        {
            $query = "INSERT INTO `register_users`(`full_name`, `username`, `email`, `password`) VALUES ('$_POST[fullname]','$_POST[username]','$_POST[email]','$_POST[password]')";
            if (mysqli_query($con, $query)) {
                //if data inserted successfully
                echo "<script>alert('Registeration successfully');
                window.location.href='index.php';
                </script>";
            } else {
                //if data not inserted 
                echo "<script>alert('Registeration failed!');
                window.location.href='index.php';
                </script>";
            }
        }
    } else {
        echo "<script>alert('cannot Run query');
        window.location.href='index.php';
        </script>";
    }
}
