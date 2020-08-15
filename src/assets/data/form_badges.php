<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" sizes="128x128" href="../img/favicon.ico" />
  <link rel="apple-touch-icon" href="../img/icon-iphone.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="../img/icon-ipad.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="../img/icon-iphone4.png" />
  <title>Puntos</title>

  <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <style media="screen">
    *{
      font-size: 0.9rem;
    }
    input{
      width: 30px;
      margin-right: 5px;
      text-align: center;
      border: 1px solid #CCC;
      border-radius: 5px;
    }
    img{
      float: left;
      height: 20px;
    }

    @media (min-width: 576px) {
      p{
        margin-bottom: 20px;
        float: left;
        margin: 5px 0px;
        padding: 5px;
        border: 1px solid;
        border-radius: 5px;
      }
    }

    @media (min-width: 768px) {
      p{
        margin-bottom: 20px;
        float: left;
        margin: 5px 3px;
        padding: 5px;
        border: 1px solid;
        border-radius: 5px;
        width: 49%;
      }
    }
  </style>
</head>
<body>
    <?php
    // var_dump($_POST);
      if(isset($_POST["0-avg"])){
        //SAVING INFO

        // var_dump($_POST);

        //Read JSON
        $jsonString = file_get_contents('data.json');
        $data = json_decode($jsonString, true);

        // Update JSON
        foreach ($data as $index => $player) {
          foreach ($player["badges"] as $key => $kpi) {
            if ($data[$index]["badges"][$key] != $_POST[$player["id"]."-".$key] || $data[$index]["badges"][$key] == "-"){
              if ($_POST[$player["id"]."-".$key] != ""){
                $data[$index]["badges"][$key] = intval($_POST[$player["id"]."-".$key]);
              }else{
                $data[$index]["badges"][$key] = null;
              }
            }
          }
        }
        // var_dump($data);

        //Save to JSON
        // $newJsonString = json_encode($data);
        // file_put_contents('data.json', $newJsonString);
        $fichero = fopen("data_badges.json", 'w')
             or die("Error al abrir fichero de salida");
        fwrite($fichero, json_encode($data, JSON_UNESCAPED_UNICODE));
        fclose($fichero);
        echo "<div class='h4 text-center'>CAMBIOS GUARDADOS</div>";
        echo "<div class='text-center'><a href='../views/table.html'>VER CLASIFICACIÓN</a></div>";
        echo "<div class='text-center'><a href='form.php'>VER FORMULARIO</a></div>";
      }else{

        // INPUT DATA
        echo "<div class='h4 text-center mt-3'>INSIGNIAS - XII OPIUM LEAGUE</div>";
        echo "<hr>";
        echo "<form action='".$_SERVER['PHP_SELF']."' method='post'>";
        echo "<div class='container'>";
        $myfile = fopen("data.json", "r") or die("Unable to open file!");
        $data = json_decode(fread($myfile,filesize("data.json")), true);
        foreach ($data as $player) {
          echo "<p><img src='../img/shields/150/".$player["images"]["shield"]."'> ".$player["team"]."<br><br>";
          foreach ($player["badges"] as $key => $kpi) {
            echo "<span><label>".strtoupper($key)."</label> <input type='text' name='".$player["id"]."-".$key."' value='".$kpi."'></span><br>";
          }
          echo "</p>";
        }

        fclose($myfile);
        echo "<div class='clearfix'></div>";
        echo "<button class='btn btn-primary text-center w-100 mb-5' type='submit' name='submit'>GUARDAR</button>";
        echo "</div>";
        echo "</form>";
      }
    ?>


</body>
</html>
