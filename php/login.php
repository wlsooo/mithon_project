<?php
include "./db_conn.php";

if ($conn->connect_error) {
    echo("데이터베이스 연결 실패: " . $conn->connect_error);
}

$idtext = $_POST['userId'];
$pwtext = $_POST['userPass'];

$sql = "select * from user us, user_data udb where us.id=udb.id and us.id='$idtext'";
$login = mysqli_query($conn, $sql);

if($login){
    if(mysqli_num_rows($login) > 0){
        echo "로그인 성공!";
    }else{
        echo "<meta http-equiv='refresh' content='0;url=../login_warning.html'>";
    }   
}else{
    echo "쿼리 실행 오류 : " . mysqli_error($login);
}

mysqli_Close($conn);
?>