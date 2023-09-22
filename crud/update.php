<?php
include 'connect.php';
$id=$_GET['updateid'];
// --------show the data in input field----------
$sql="Select * from `crud` where id=$id";
$result=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($result);
$name=$row['name'];
$email=$row['email'];
$mobile=$row['mobile'];
$password=$row['password'];

// ------------------
if(isset($_POST['submit'])){
  $name=$_POST['name'];
  $email=$_POST['email'];
  $mobile=$_POST['mobile'];
  $password=$_POST['password'];

  $sql="update `crud` set id='$id',name='$name',email='$email',mobile='$mobile',password='$password' where id=$id";
  $result=mysqli_query($con,$sql);

  if($result){
    header('location:display.php');
    // echo"update successfully!";
  } else{
    die(mysqli_error($con));
  }

}
?>


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>crud operation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
  <form method="post">
 <div class="container my-5">
 <div class="mb-3">
    <label>Name</label>
    <input type="text" class="form-control" name="name" placeholder="Enter your name*" value=<?php echo $name?>>
</div>

<div class="mb-3">
    <label>Email</label>
    <input type="text" class="form-control" name="email" placeholder="Enter your email*" value=<?php echo $email?>>
</div>

<div class="mb-3">
    <label>Mobile</label>
    <input type="text" class="form-control" name="mobile" placeholder="Enter your mobile no*" autocomplete="off" value=<?php echo $mobile?>>
</div>

<div class="mb-3">
    <label>password</label>
    <input type="text" class="form-control" name="password" placeholder="Enter your password*" value=<?php echo $password?>>
</div>
  <button type="submit" class="btn btn-primary" name="submit" >Update</button>
</form> 
 </div>
</body>
</html>