<?php
    $toEmail = "sushil@codepixelzmedia.com.np";
    $mailHeaders = "From: " . $_POST["first_name"] . "<". $_POST["user_email"] .">\r\n";

    if(mail($toEmail, $_POST["userEmail"], $_POST["comments"], $mailHeaders)) {
        print "<p class='success'>Congratulation, Your mail has been sent.</p>";
    }
    else {
        print "<p class='error'>Problem in Sending Mail.</p>";
    }
?>
