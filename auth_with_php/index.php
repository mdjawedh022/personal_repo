<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User | Login & Register</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h2>Bageri</h2>
        <nav>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
        <div class="sign-in-up">
            <button type="button" onclick="popup('login-popup')">Login</button>
            <button type="button" onclick="popup('register-popup')">Register</button>
        </div>
    </header>
    <!-- ----------------------form------------------------ -->
    <div class="popup-container" id="login-popup">
        <div class="popup">
            <form action="">
                <h2><span>User Login</span>
                    <button type="reset" onclick="popup('login-popup')">X</button>
                </h2>
                <input type="text" placeholder="e-mail or Username" />
                <input type="password" placeholder="password" />
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    </div>
    <!-- --------------register------------------ -->
    <div class="popup-container" id="register-popup">
        <div class="register popup">
            <form action="">
                <h2><span>User  Register</span>
                    <button type="reset" onclick="popup('register-popup')">X</button>
                </h2>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Password" />
                <button type="submit" class="register-btn">Register</button>
            </form>
        </div>
    </div>
</body>
<script>
    function popup(popup_name){
     get_popup=document.getElementById(popup_name);
     if(get_popup.style.display=="flex"){
        get_popup.style.display="none"
     }else{
        get_popup.style.display="flex"
     }
    }
</script>
</html>