function login(){
    user1 = document.getElementById("player1_name").value;
    user2 = document.getElementById("player2_name").value;
    localStorage.setItem("player1_name",user1);
    localStorage.setItem("player1_name",user2);
    window.location="quiz_game_page.html"
}