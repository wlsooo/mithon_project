<?php
include "./db_conn.php";
if ($conn->connect_error) {
    echo("데이터베이스 연결 실패: " . $conn->connect_error);
}

$idtext = $_POST['idtext'];
$pwtext = $_POST['pwtext'];

$sql = "insert into user(id,pw) values('$idtext','$pwtext')";
mysqli_query($conn, $sql);
$sql2 = "select id from user us, user_data udb where us.id=udb.id and us.id='$idtext'";
$join = mysqli_query($conn, $sql2);

if($join){    
    if(mysqli_num_rows($join) > 0){
        echo "이미 등록된 아이디입니다.";
    }else{
        echo "회원가입 성공";
}   

}else{
    
    echo "쿼리 실행 오류 : " . mysqli_error($login);
}

mysqli_Close($conn);

?>