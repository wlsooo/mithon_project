<?php
include "./db_conn.php";
if ($conn->connect_error) {
    echo("데이터베이스 연결 실패: " . $conn->connect_error);
}

$idtext = $_POST['userId'];
$pwtext = $_POST['userPass'];
$i = 5;

$sql = "insert into service_user(id,pw) values('$idtext','$pwtext')";
$sql1 = "insert into user_data(users, id, user_days, user_memo) values($i++, '$idtext','20231021', '안녕하세용')";
mysqli_query($conn, $sql);
mysqli_query($conn, $sql1);
$sql2 = "select svu.id from service_user svu, user_data udb where svu.id=udb.id and svu.id='$idtext'";
$join = mysqli_query($conn, $sql2);

if ($join) {    
    if (mysqli_num_rows($join) > 0) {
        echo "이미 등록된 아이디입니다.";
    } else {
        echo "회원가입 성공";
    }
} else {
    echo "쿼리 실행 오류 : " . mysqli_error($conn);
}

mysqli_Close($conn);

?>