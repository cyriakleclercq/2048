
// init the variable

$calc_ordi = 0;

$table = [2,2,"",2,2,2,"",2,2,2,"",2,2,2,"",2];

console.log($table);

// start the game

$('#bouton').click(function () {

    Start;
    AleaStart();

});

//AleaStart();

$(".nb0").text($table[0]);
$(".nb1").text($table[1]);
$(".nb2").text($table[2]);
$(".nb3").text($table[3]);
$(".nb4").text($table[4]);
$(".nb5").text($table[5]);
$(".nb6").text($table[6]);
$(".nb7").text($table[7]);
$(".nb8").text($table[8]);
$(".nb9").text($table[9]);
$(".nb10").text($table[10]);
$(".nb11").text($table[11]);
$(".nb12").text($table[12]);
$(".nb13").text($table[13]);
$(".nb14").text($table[14]);
$(".nb15").text($table[15]);

// Clean the game

function Start() {

    for (let $i = 0; $i < 16; $i++) {

        $(".nb"+ $i).text("");
        $table[$i] = "";
    }
}

// choice case random when game is started


function AleaStart() {


    $calc_ordi1 = Math.floor(Math.random()*16);
    $calc_ordi2 = Math.floor(Math.random()*16);

    if ($calc_ordi1 == $calc_ordi2) {

        $calc_ordi2 = Math.floor(Math.random()*16);

    }

    $table[$calc_ordi1] = 2;
    $table[$calc_ordi2] = 2;

    $(".nb"+$calc_ordi1).text($table[$calc_ordi1]);
    $(".nb"+$calc_ordi2).text($table[$calc_ordi2]);

}

// move left

$(document).keydown(function(e){

    switch (e.which){

        case 37: // fleche gauche

            MoveLeft();
            break;

        case 38: // fleche haut

            MoveTop();
            break;

        case 39: // fleche droite

            MoveRight();
            break;

        case 40: // fleche bas

            MoveBottom(); break;
    }
});

$(document).keyup(function(e){

    switch (e.which){

        case 37: // fleche gauche

            MoveLeft();
            break;

        case 38: // fleche haut

            MoveTop();
            break;

        case 39: // fleche droite

            MoveRight();
            break;

        case 40: // fleche bas

            MoveBottom(); break;
    }
});


// move left

function MoveLeft() {

    // line 1

    // vide toutes les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text("");
    }

    // mouvement 1 bloc

    if ($table[0] === "" && $table[1] === "" && $table[2] === ""){
            $table[0] = $table[3];
            $table[3] = "";
    }

    if ($table[0] === "" && $table[1] === "" && $table[3] === "") {
            $table[0] = $table[2];
            $table[2] = "";
    }

    if ($table[0] === "" && $table[2] === "" && $table[3] === "") {
            $table[0] = $table[1];
            $table[1] = "";
    }

    // mouvement de 2 blocs

    if ($table[0] === "" && $table[1] === "" && $table[2] !== $table[3]) {
            $table[0] = $table[2];
            $table[1] = $table[3];
            $table[2] = "";
            $table[3] = "";
    }

    if ($table[0] === "" && $table[1] !== $table[2] && $table[3] === "") {
        $table[0] = $table[1];
        $table[1] = $table[2];
        $table[2] = "";
    }

    if ($table[0] === "" && $table[1] !== $table[3] && $table[2] === "") {
        $table[0] = $table[1];
        $table[1] = $table[3];
        $table[3] = "";
    }

    if ($table[0] !== $table[3] && $table[1] === "" && $table[2] === "") {
        $table[1] = $table[3];
        $table[3] = "";
    }

    if ($table[0] !== $table[2] && $table[1] === "" && $table[3] === "") {
        $table[1] = $table[2];
        $table[2] = "";
    }

    // mouvement de 3 blocs

    if ($table[0] === "" && $table[1] !== $table[2] !== $table[3]) {
        $table[0] = $table[1];
        $table[1] = $table[2];
        $table[2] = $table[3];
        $table[3] = "";
    }

    if ($table[0] !== $table[2] !== $table[3] && $table[1] === "") {
        $table[1] = $table[2];
        $table[2] = $table[3];
        $table[3] = "";
    }

    if ($table[0] !== $table[1] !== $table[3] && $table[2] === "") {
        $table[2] = $table[3];
        $table[3] = "";
    }

    // fusion de 2 blocs

    for (let $i = 0; $i < 3; $i++) {

        if ($table[0] !== "") {
            if ($table[0] === $table[3] && $table[1] === "" && $table[2] === "") {
                $table[0] += $table[3];
                $table[3] = "";
            }

            if ($table[0] === $table[2] && $table[1] === "" && $table[3] === "") {
                $table[0] += $table[2];
                $table[2] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }

        if ($table[0] === "") {

            if ($table[0] === "" && $table[1] === "" && $table[2] === $table[3]) {
                $table[0] = $table[2] + $table[3];
                $table[2] = "";
                $table[3] = "";
            }

            if ($table[0] === "" && $table[1] === $table[2] && $table[3] === "") {
                $table[0] = $table[1] + $table[2];
                $table[1] = "";
                $table[2] = "";
            }

            if ($table[0] === "" && $table[1] === $table[3] && $table[2] === "") {
                $table[0] = $table[1] + $table[3];
                $table[1] = "";
                $table[3] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[0] === "" && $table[1] === $table[2] === $table[3]) {
        $table[0] = $table[1] + $table[2];
        $table[1] = $table[3];
        $table[2] = "";
        $table[3] = "";
    }

    if ($table[0] === $table[2] === $table[3] && $table[1] === "") {
        $table[0] += $table[2];
        $table[1] = $table[3];
        $table[2] = "";
        $table[3] = "";
    }

    if ($table[0] === $table[1] === $table[3] && $table[2] === "") {
        $table[0] += $table[1];
        $table[1] = $table[3];
        $table[2] = "";
        $table[3] = "";
    }

    if ($table[0] === $table[1] === $table[2] && $table[3] === "" ) {
        $table[0] += $table[1];
        $table[1] = $table[2];
        $table[2] = "";
        $table[3] = "";
    }

// line 2

    // mouvement 1 bloc

    if ($table[4] === "" && $table[5] === "" && $table[6] === ""){
        $table[4] = $table[7];
        $table[7] = "";
    }

    if ($table[4] === "" && $table[5] === "" && $table[7] === "") {
        $table[4] = $table[6];
        $table[6] = "";
    }

    if ($table[4] === "" && $table[6] === "" && $table[7] === "") {
        $table[4] = $table[5];
        $table[5] = "";
    }

    // mouvement de 2 blocs

    if ($table[4] === "" && $table[5] === "" && $table[6] !== $table[7]) {
        $table[4] = $table[6];
        $table[5] = $table[7];
        $table[6] = "";
        $table[7] = "";
    }

    if ($table[4] === "" && $table[5] !== $table[6] && $table[7] === "") {
        $table[4] = $table[5];
        $table[5] = $table[6];
        $table[6] = "";
    }

    if ($table[4] === "" && $table[5] !== $table[7] && $table[6] === "") {
        $table[4] = $table[5];
        $table[5] = $table[7];
        $table[7] = "";
    }

    if ($table[4] !== $table[7] && $table[5] === "" && $table[6] === "") {
        $table[5] = $table[7];
        $table[7] = "";
    }

    if ($table[4] !== $table[6] && $table[5] === "" && $table[7] === "") {
        $table[5] = $table[6];
        $table[6] = "";
    }

    // mouvement de 3 blocs

    if ($table[4] === "" && $table[5] !== $table[6] !== $table[7]) {
        $table[4] = $table[5];
        $table[5] = $table[6];
        $table[6] = $table[7];
        $table[7] = "";
    }

    if ($table[4] !== $table[6] !== $table[7] && $table[5] === "") {
        $table[5] = $table[6];
        $table[6] = $table[7];
        $table[7] = "";
    }

    if ($table[4] !== $table[5] !== $table[7] && $table[6] === "") {
        $table[6] = $table[7];
        $table[7] = "";
    }

    // fusion de 2 blocs

    for (let $i = 4; $i < 7; $i++) {

        if ($table[4] !== "") {
            if ($table[4] === $table[7] && $table[5] === "" && $table[6] === "") {
                $table[4] += $table[7];
                $table[7] = "";
            }

            if ($table[4] === $table[6] && $table[5] === "" && $table[7] === "") {
                $table[4] += $table[6];
                $table[6] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }

        if ($table[4] === "") {

            if ($table[4] === "" && $table[5] === "" && $table[6] === $table[7]) {
                $table[4] = $table[6] + $table[7];
                $table[6] = "";
                $table[7] = "";
            }

            if ($table[4] === "" && $table[5] === $table[6] && $table[7] === "") {
                $table[4] = $table[5] + $table[6];
                $table[5] = "";
                $table[6] = "";
            }

            if ($table[4] === "" && $table[5] === $table[7] && $table[6] === "") {
                $table[4] = $table[5] + $table[7];
                $table[5] = "";
                $table[7] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[4] === "" && $table[5] === $table[6] === $table[7]) {
        $table[4] = $table[5] + $table[6];
        $table[5] = $table[7];
        $table[6] = "";
        $table[7] = "";
    }

    if ($table[4] === $table[6] === $table[7] && $table[5] === "") {
        $table[4] += $table[6];
        $table[5] = $table[7];
        $table[6] = "";
        $table[7] = "";
    }

    if ($table[4] === $table[5] === $table[7] && $table[6] === "") {
        $table[4] += $table[5];
        $table[5] = $table[7];
        $table[6] = "";
        $table[7] = "";
    }

    if ($table[4] === $table[5] === $table[6] && $table[7] === "" ) {
        $table[4] += $table[5];
        $table[5] = $table[6];
        $table[6] = "";
        $table[7] = "";
    }

// line 3

    // mouvement 1 bloc

    if ($table[8] === "" && $table[9] === "" && $table[10] === ""){
        $table[8] = $table[11];
        $table[11] = "";
    }

    if ($table[8] === "" && $table[9] === "" && $table[11] === "") {
        $table[8] = $table[10];
        $table[10] = "";
    }

    if ($table[8] === "" && $table[10] === "" && $table[11] === "") {
        $table[8] = $table[9];
        $table[9] = "";
    }

    // mouvement de 2 blocs

    if ($table[8] === "" && $table[9] === "" && $table[10] !== $table[11]) {
        $table[8] = $table[10];
        $table[9] = $table[11];
        $table[10] = "";
        $table[11] = "";
    }

    if ($table[8] === "" && $table[9] !== $table[10] && $table[11] === "") {
        $table[8] = $table[9];
        $table[9] = $table[10];
        $table[10] = "";
    }

    if ($table[8] === "" && $table[9] !== $table[11] && $table[10] === "") {
        $table[8] = $table[9];
        $table[9] = $table[11];
        $table[11] = "";
    }

    if ($table[8] !== $table[11] && $table[9] === "" && $table[10] === "") {
        $table[9] = $table[11];
        $table[11] = "";
    }

    if ($table[8] !== $table[10] && $table[9] === "" && $table[11] === "") {
        $table[9] = $table[10];
        $table[10] = "";
    }

    // mouvement de 3 blocs

    if ($table[8] === "" && $table[9] !== $table[10] !== $table[11]) {
        $table[8] = $table[9];
        $table[9] = $table[10];
        $table[10] = $table[11];
        $table[11] = "";
    }

    if ($table[8] !== $table[10] !== $table[11] && $table[9] === "") {
        $table[9] = $table[10];
        $table[10] = $table[11];
        $table[11] = "";
    }

    if ($table[8] !== $table[9] !== $table[11] && $table[10] === "") {
        $table[10] = $table[11];
        $table[11] = "";
    }

    // fusion de 2 blocs

    for (let $i = 8; $i < 11; $i++) {

        if ($table[8] !== "") {
            if ($table[8] === $table[11] && $table[9] === "" && $table[10] === "") {
                $table[8] += $table[11];
                $table[11] = "";
            }

            if ($table[8] === $table[10] && $table[9] === "" && $table[11] === "") {
                $table[8] += $table[10];
                $table[10] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }

        if ($table[8] === "") {

            if ($table[8] === "" && $table[9] === "" && $table[10] === $table[11]) {
                $table[8] = $table[10] + $table[11];
                $table[10] = "";
                $table[11] = "";
            }

            if ($table[8] === "" && $table[9] === $table[10] && $table[11] === "") {
                $table[8] = $table[9] + $table[10];
                $table[9] = "";
                $table[10] = "";
            }

            if ($table[8] === "" && $table[9] === $table[11] && $table[10] === "") {
                $table[8] = $table[9] + $table[11];
                $table[9] = "";
                $table[11] = "";
            }
        } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
            $table[$i] += $table[$i+1];
            $table[$i+1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[8] === "" && $table[9] === $table[10] === $table[11]) {
        $table[8] = $table[9] + $table[10];
        $table[9] = $table[11];
        $table[10] = "";
        $table[11] = "";
    }

    if ($table[8] === $table[10] === $table[11] && $table[9] === "") {
        $table[8] += $table[10];
        $table[9] = $table[11];
        $table[10] = "";
        $table[11] = "";
    }

    if ($table[8] === $table[9] === $table[11] && $table[10] === "") {
        $table[8] += $table[9];
        $table[9] = $table[11];
        $table[10] = "";
        $table[11] = "";
    }

    if ($table[8] === $table[9] === $table[10] && $table[11] === "" ) {
        $table[8] += $table[9];
        $table[9] = $table[10];
        $table[10] = "";
        $table[11] = "";
    }

// line 4

// mouvement 1 bloc

if ($table[12] === "" && $table[13] === "" && $table[14] === ""){
    $table[12] = $table[15];
    $table[15] = "";
}

if ($table[12] === "" && $table[13] === "" && $table[15] === "") {
    $table[12] = $table[14];
    $table[14] = "";
}

if ($table[12] === "" && $table[14] === "" && $table[15] === "") {
    $table[12] = $table[13];
    $table[13] = "";
}

// mouvement de 2 blocs

if ($table[12] === "" && $table[13] === "" && $table[14] !== $table[15]) {
    $table[12] = $table[14];
    $table[13] = $table[15];
    $table[14] = "";
    $table[15] = "";
}

if ($table[12] === "" && $table[13] !== $table[14] && $table[15] === "") {
    $table[12] = $table[13];
    $table[13] = $table[14];
    $table[14] = "";
}

if ($table[12] === "" && $table[13] !== $table[15] && $table[14] === "") {
    $table[12] = $table[13];
    $table[13] = $table[15];
    $table[15] = "";
}

if ($table[12] !== $table[15] && $table[13] === "" && $table[14] === "") {
    $table[13] = $table[15];
    $table[15] = "";
}

if ($table[12] !== $table[14] && $table[13] === "" && $table[15] === "") {
    $table[13] = $table[14];
    $table[14] = "";
}

// mouvement de 3 blocs

if ($table[12] === "" && $table[13] !== $table[14] !== $table[15]) {
    $table[12] = $table[13];
    $table[13] = $table[14];
    $table[14] = $table[15];
    $table[15] = "";
}

if ($table[12] !== $table[14] !== $table[15] && $table[13] === "") {
    $table[13] = $table[14];
    $table[14] = $table[15];
    $table[15] = "";
}

if ($table[12] !== $table[13] !== $table[15] && $table[14] === "") {
    $table[14] = $table[15];
    $table[15] = "";
}

// fusion de 2 blocs

for (let $i = 12; $i < 15; $i++) {

    if ($table[12] !== "") {
        if ($table[12] === $table[15] && $table[13] === "" && $table[14] === "") {
            $table[12] += $table[15];
            $table[15] = "";
        }

        if ($table[12] === $table[14] && $table[13] === "" && $table[15] === "") {
            $table[12] += $table[14];
            $table[14] = "";
        }
    } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
        $table[$i] += $table[$i+1];
        $table[$i+1] = "";
    }

    if ($table[12] === "") {

        if ($table[12] === "" && $table[13] === "" && $table[14] === $table[15]) {
            $table[12] = $table[14] + $table[15];
            $table[14] = "";
            $table[15] = "";
        }

        if ($table[12] === "" && $table[13] === $table[14] && $table[15] === "") {
            $table[12] = $table[13] + $table[14];
            $table[13] = "";
            $table[14] = "";
        }

        if ($table[12] === "" && $table[13] === $table[15] && $table[14] === "") {
            $table[12] = $table[13] + $table[15];
            $table[13] = "";
            $table[15] = "";
        }
    } else if ($table[$i] === $table[$i+1] && $table[$i+1] !== $table[$i+2]) {
        $table[$i] += $table[$i+1];
        $table[$i+1] = "";
    }
}

// fusion en cas de 3 blocs identiques

if ($table[12] === "" && $table[13] === $table[14] === $table[15]) {
    $table[12] = $table[13] + $table[14];
    $table[13] = $table[15];
    $table[14] = "";
    $table[15] = "";
}

if ($table[12] === $table[14] === $table[15] && $table[13] === "") {
    $table[12] += $table[14];
    $table[13] = $table[15];
    $table[14] = "";
    $table[15] = "";
}

if ($table[12] === $table[13] === $table[15] && $table[14] === "") {
    $table[12] += $table[13];
    $table[13] = $table[15];
    $table[14] = "";
    $table[15] = "";
}

if ($table[12] === $table[13] === $table[14] && $table[15] === "" ) {
    $table[12] += $table[13];
    $table[13] = $table[14];
    $table[14] = "";
    $table[15] = "";
}

// réécrit le tableau dans les cases

for (let $i = 0; $i < 16; $i ++) {

    $(".nb" + $i).text($table[$i]);

}

console.log($table);
}


function MoveRight() {

    // line 1

    // vide toutes les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text("");
    }

    // mouvement 1 bloc

    if ($table[3] === "" && $table[2] === "" && $table[1] === ""){
        $table[3] = $table[0];
        $table[0] = "";
    }

    if ($table[3] === "" && $table[2] === "" && $table[0] === "") {
        $table[3] = $table[1];
        $table[1] = "";
    }

    if ($table[0] === "" && $table[1] === "" && $table[3] === "") {
        $table[0] = $table[2];
        $table[2] = "";
    }

    // mouvement de 2 blocs

    if ($table[0] === "" && $table[2] === "" && $table[1] !== $table[3]) {
        $table[0] = $table[1];
        $table[2] = $table[3];
        $table[1] = "";
        $table[3] = "";
    }

    if ($table[3] === "" && $table[2] !== $table[1] && $table[0] === "") {
        $table[3] = $table[2];
        $table[2] = $table[1];
        $table[1] = "";
    }

    if ($table[0] === "" && $table[2] !== $table[0] && $table[1] === "") {
        $table[3] = $table[2];
        $table[2] = $table[0];
        $table[0] = "";
    }

    if ($table[3] !== $table[0] && $table[2] === "" && $table[1] === "") {
        $table[2] = $table[0];
        $table[0] = "";
    }

    if ($table[3] !== $table[1] && $table[2] === "" && $table[0] === "") {
        $table[2] = $table[1];
        $table[1] = "";
    }

    // mouvement de 3 blocs

    if ($table[3] === "" && $table[2] !== $table[1] !== $table[0]) {
        $table[3] = $table[2];
        $table[2] = $table[1];
        $table[1] = $table[0];
        $table[0] = "";
    }

    if ($table[3] !== $table[1] !== $table[0] && $table[2] === "") {
        $table[2] = $table[1];
        $table[1] = $table[0];
        $table[0] = "";
    }

    if ($table[3] !== $table[2] !== $table[0] && $table[1] === "") {
        $table[1] = $table[0];
        $table[0] = "";
    }

    // fusion de 2 blocs

    for (let $i = 3; $i > 0; $i--) {

        if ($table[3] !== "") {
            if ($table[3] === $table[0] && $table[2] === "" && $table[1] === "") {
                $table[3] += $table[0];
                $table[0] = "";
            }

            if ($table[3] === $table[1] && $table[2] === "" && $table[0] === "") {
                $table[3] += $table[1];
                $table[1] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }

        // a modif a partir d'ici

        if ($table[3] === "") {

            if ($table[3] === "" && $table[2] === "" && $table[1] === $table[0]) {
                $table[3] = $table[1] + $table[0];
                $table[1] = "";
                $table[0] = "";
            }

            if ($table[3] === "" && $table[2] === $table[1] && $table[0] === "") {
                $table[3] = $table[2] + $table[1];
                $table[2] = "";
                $table[1] = "";
            }

            if ($table[3] === "" && $table[2] === $table[0] && $table[1] === "") {
                $table[3] = $table[2] + $table[0];
                $table[2] = "";
                $table[0] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[3] === "" && $table[2] === $table[1] === $table[0]) {
        $table[3] = $table[2] + $table[1];
        $table[2] = $table[0];
        $table[1] = "";
        $table[0] = "";
    }

    if ($table[3] === $table[1] === $table[0] && $table[2] === "") {
        $table[3] += $table[1];
        $table[2] = $table[0];
        $table[1] = "";
        $table[3] = "";
    }

    if ($table[3] === $table[2] === $table[0] && $table[1] === "") {
        $table[3] += $table[2];
        $table[2] = $table[0];
        $table[1] = "";
        $table[0] = "";
    }

    if ($table[3] === $table[2] === $table[1] && $table[0] === "" ) {
        $table[3] += $table[2];
        $table[2] = $table[1];
        $table[1] = "";
        $table[0] = "";
    }

// line 2

    // mouvement 1 bloc

    if ($table[7] === "" && $table[6] === "" && $table[5] === ""){
        $table[7] = $table[4];
        $table[4] = "";
    }

    if ($table[7] === "" && $table[6] === "" && $table[4] === "") {
        $table[7] = $table[5];
        $table[5] = "";
    }

    if ($table[7] === "" && $table[5] === "" && $table[4] === "") {
        $table[7] = $table[6];
        $table[6] = "";
    }

    // mouvement de 2 blocs

    if ($table[7] === "" && $table[6] === "" && $table[5] !== $table[4]) {
        $table[7] = $table[5];
        $table[6] = $table[4];
        $table[5] = "";
        $table[4] = "";
    }

    if ($table[7] === "" && $table[6] !== $table[5] && $table[4] === "") {
        $table[7] = $table[6];
        $table[6] = $table[5];
        $table[5] = "";
    }

    if ($table[7] === "" && $table[6] !== $table[4] && $table[5] === "") {
        $table[7] = $table[6];
        $table[6] = $table[4];
        $table[4] = "";
    }

    if ($table[7] !== $table[4] && $table[6] === "" && $table[5] === "") {
        $table[6] = $table[4];
        $table[4] = "";
    }

    if ($table[7] !== $table[5] && $table[6] === "" && $table[4] === "") {
        $table[6] = $table[5];
        $table[5] = "";
    }

    // mouvement de 3 blocs

    if ($table[7] === "" && $table[6] !== $table[5] !== $table[4]) {
        $table[7] = $table[6];
        $table[6] = $table[5];
        $table[5] = $table[4];
        $table[4] = "";
    }

    if ($table[7] !== $table[5] !== $table[4] && $table[6] === "") {
        $table[6] = $table[5];
        $table[5] = $table[4];
        $table[4] = "";
    }

    if ($table[7] !== $table[6] !== $table[4] && $table[5] === "") {
        $table[5] = $table[4];
        $table[4] = "";
    }

    // fusion de 2 blocs

    for (let $i = 7; $i > 4; $i--) {

        if ($table[7] !== "") {
            if ($table[7] === $table[4] && $table[6] === "" && $table[5] === "") {
                $table[7] += $table[4];
                $table[4] = "";
            }

            if ($table[7] === $table[5] && $table[6] === "" && $table[4] === "") {
                $table[7] += $table[5];
                $table[5] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }

        if ($table[7] === "") {

            if ($table[7] === "" && $table[6] === "" && $table[5] === $table[4]) {
                $table[7] = $table[5] + $table[4];
                $table[5] = "";
                $table[4] = "";
            }

            if ($table[7] === "" && $table[6] === $table[5] && $table[4] === "") {
                $table[4] = $table[6] + $table[5];
                $table[6] = "";
                $table[5] = "";
            }

            if ($table[7] === "" && $table[6] === $table[4] && $table[5] === "") {
                $table[7] = $table[6] + $table[4];
                $table[6] = "";
                $table[4] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[7] === "" && $table[6] === $table[5] === $table[4]) {
        $table[7] = $table[6] + $table[5];
        $table[6] = $table[4];
        $table[5] = "";
        $table[4] = "";
    }

    if ($table[7] === $table[5] === $table[4] && $table[6] === "") {
        $table[7] += $table[5];
        $table[6] = $table[4];
        $table[5] = "";
        $table[4] = "";
    }

    if ($table[7] === $table[6] === $table[4] && $table[5] === "") {
        $table[7] += $table[6];
        $table[6] = $table[4];
        $table[5] = "";
        $table[4] = "";
    }

    if ($table[7] === $table[6] === $table[5] && $table[4] === "" ) {
        $table[7] += $table[6];
        $table[6] = $table[5];
        $table[5] = "";
        $table[4] = "";
    }

// line 3

    // mouvement 1 bloc

    if ($table[11] === "" && $table[10] === "" && $table[9] === ""){
        $table[11] = $table[8];
        $table[8] = "";
    }

    if ($table[11] === "" && $table[10] === "" && $table[8] === "") {
        $table[11] = $table[9];
        $table[9] = "";
    }

    if ($table[11] === "" && $table[9] === "" && $table[8] === "") {
        $table[11] = $table[10];
        $table[10] = "";
    }

    // mouvement de 2 blocs

    if ($table[11] === "" && $table[10] === "" && $table[9] !== $table[8]) {
        $table[11] = $table[9];
        $table[10] = $table[8];
        $table[9] = "";
        $table[8] = "";
    }

    if ($table[11] === "" && $table[10] !== $table[9] && $table[8] === "") {
        $table[11] = $table[10];
        $table[10] = $table[9];
        $table[9] = "";
    }

    if ($table[11] === "" && $table[10] !== $table[8] && $table[9] === "") {
        $table[11] = $table[10];
        $table[10] = $table[8];
        $table[8] = "";
    }

    if ($table[11] !== $table[8] && $table[10] === "" && $table[9] === "") {
        $table[10] = $table[8];
        $table[8] = "";
    }

    if ($table[11] !== $table[9] && $table[10] === "" && $table[8] === "") {
        $table[10] = $table[9];
        $table[9] = "";
    }

    // mouvement de 3 blocs

    if ($table[11] === "" && $table[10] !== $table[9] !== $table[8]) {
        $table[11] = $table[10];
        $table[10] = $table[9];
        $table[9] = $table[8];
        $table[8] = "";
    }

    if ($table[11] !== $table[9] !== $table[8] && $table[10] === "") {
        $table[10] = $table[9];
        $table[9] = $table[8];
        $table[8] = "";
    }

    if ($table[11] !== $table[10] !== $table[8] && $table[9] === "") {
        $table[9] = $table[8];
        $table[8] = "";
    }

    // fusion de 2 blocs

    for (let $i = 11; $i > 8; $i--) {

        if ($table[11] !== "") {
            if ($table[11] === $table[8] && $table[10] === "" && $table[9] === "") {
                $table[11] += $table[8];
                $table[8] = "";
            }

            if ($table[11] === $table[9] && $table[10] === "" && $table[8] === "") {
                $table[11] += $table[9];
                $table[9] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }

        if ($table[11] === "") {

            if ($table[11] === "" && $table[10] === "" && $table[9] === $table[8]) {
                $table[11] = $table[9] + $table[8];
                $table[9] = "";
                $table[8] = "";
            }

            if ($table[11] === "" && $table[10] === $table[9] && $table[8] === "") {
                $table[11] = $table[10] + $table[9];
                $table[10] = "";
                $table[9] = "";
            }

            if ($table[11] === "" && $table[10] === $table[8] && $table[9] === "") {
                $table[11] = $table[10] + $table[8];
                $table[10] = "";
                $table[8] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[11] === "" && $table[10] === $table[9] === $table[8]) {
        $table[11] = $table[10] + $table[9];
        $table[10] = $table[8];
        $table[9] = "";
        $table[8] = "";
    }

    if ($table[11] === $table[9] === $table[8] && $table[10] === "") {
        $table[11] += $table[9];
        $table[10] = $table[8];
        $table[9] = "";
        $table[8] = "";
    }

    if ($table[11] === $table[10] === $table[8] && $table[9] === "") {
        $table[11] += $table[10];
        $table[10] = $table[8];
        $table[9] = "";
        $table[8] = "";
    }

    if ($table[11] === $table[10] === $table[9] && $table[8] === "" ) {
        $table[11] += $table[10];
        $table[10] = $table[9];
        $table[9] = "";
        $table[8] = "";
    }

// line 4

// mouvement 1 bloc

    if ($table[15] === "" && $table[14] === "" && $table[13] === ""){
        $table[15] = $table[12];
        $table[12] = "";
    }

    if ($table[15] === "" && $table[14] === "" && $table[12] === "") {
        $table[15] = $table[13];
        $table[13] = "";
    }

    if ($table[15] === "" && $table[13] === "" && $table[12] === "") {
        $table[15] = $table[14];
        $table[14] = "";
    }

// mouvement de 2 blocs

    if ($table[15] === "" && $table[14] === "" && $table[13] !== $table[12]) {
        $table[15] = $table[13];
        $table[14] = $table[12];
        $table[13] = "";
        $table[12] = "";
    }

    if ($table[15] === "" && $table[14] !== $table[13] && $table[12] === "") {
        $table[15] = $table[14];
        $table[14] = $table[13];
        $table[13] = "";
    }

    if ($table[15] === "" && $table[14] !== $table[12] && $table[13] === "") {
        $table[15] = $table[14];
        $table[14] = $table[12];
        $table[12] = "";
    }

    if ($table[15] !== $table[12] && $table[14] === "" && $table[13] === "") {
        $table[14] = $table[12];
        $table[12] = "";
    }

    if ($table[15] !== $table[13] && $table[14] === "" && $table[12] === "") {
        $table[14] = $table[13];
        $table[13] = "";
    }

// mouvement de 3 blocs

    if ($table[15] === "" && $table[14] !== $table[13] !== $table[12]) {
        $table[15] = $table[14];
        $table[14] = $table[13];
        $table[13] = $table[12];
        $table[12] = "";
    }

    if ($table[15] !== $table[13] !== $table[12] && $table[14] === "") {
        $table[14] = $table[13];
        $table[13] = $table[12];
        $table[12] = "";
    }

    if ($table[15] !== $table[14] !== $table[12] && $table[13] === "") {
        $table[13] = $table[12];
        $table[12] = "";
    }

// fusion de 2 blocs

    for (let $i = 15; $i > 12; $i--) {

        if ($table[15] !== "") {
            if ($table[15] === $table[12] && $table[14] === "" && $table[13] === "") {
                $table[15] += $table[12];
                $table[12] = "";
            }

            if ($table[15] === $table[13] && $table[14] === "" && $table[12] === "") {
                $table[15] += $table[13];
                $table[13] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }

        if ($table[15] === "") {

            if ($table[15] === "" && $table[14] === "" && $table[13] === $table[12]) {
                $table[15] = $table[13] + $table[12];
                $table[13] = "";
                $table[12] = "";
            }

            if ($table[15] === "" && $table[14] === $table[13] && $table[12] === "") {
                $table[15] = $table[14] + $table[13];
                $table[14] = "";
                $table[13] = "";
            }

            if ($table[15] === "" && $table[14] === $table[12] && $table[13] === "") {
                $table[15] = $table[14] + $table[12];
                $table[14] = "";
                $table[12] = "";
            }
        } else if ($table[$i] === $table[$i-1] && $table[$i-1] !== $table[$i-2]) {
            $table[$i] += $table[$i-1];
            $table[$i-1] = "";
        }
    }

// fusion en cas de 3 blocs identiques

    if ($table[15] === "" && $table[14] === $table[13] === $table[12]) {
        $table[15] = $table[14] + $table[13];
        $table[14] = $table[12];
        $table[13] = "";
        $table[12] = "";
    }

    if ($table[15] === $table[13] === $table[12] && $table[14] === "") {
        $table[15] += $table[13];
        $table[14] = $table[12];
        $table[13] = "";
        $table[12] = "";
    }

    if ($table[15] === $table[14] === $table[12] && $table[13] === "") {
        $table[15] += $table[14];
        $table[14] = $table[12];
        $table[13] = "";
        $table[12] = "";
    }

    if ($table[15] === $table[14] === $table[13] && $table[12] === "" ) {
        $table[15] += $table[14];
        $table[14] = $table[13];
        $table[13] = "";
        $table[12] = "";
    }

// réécrit le tableau dans les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text($table[$i]);

    }

    console.log($table);
}


function MoveTop() {

    // line 1

    // vide toutes les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text("");
    }

    // mouvement 1 bloc

    if ($table[0] === "" && $table[4] === "" && $table[8] === ""){
        $table[0] = $table[12];
        $table[12] = "";
    }

    if ($table[0] === "" && $table[4] === "" && $table[12] === "") {
        $table[0] = $table[8];
        $table[8] = "";
    }

    if ($table[0] === "" && $table[8] === "" && $table[12] === "") {
        $table[0] = $table[4];
        $table[4] = "";
    }

    // mouvement de 2 blocs

    if ($table[0] === "" && $table[4] === "" && $table[8] !== $table[12]) {
        $table[0] = $table[8];
        $table[4] = $table[12];
        $table[8] = "";
        $table[12] = "";
    }

    if ($table[0] === "" && $table[4] !== $table[8] && $table[12] === "") {
        $table[0] = $table[4];
        $table[4] = $table[8];
        $table[8] = "";
    }

    if ($table[0] === "" && $table[4] !== $table[12] && $table[8] === "") {
        $table[0] = $table[4];
        $table[4] = $table[12];
        $table[12] = "";
    }

    if ($table[0] !== $table[12] && $table[4] === "" && $table[8] === "") {
        $table[4] = $table[12];
        $table[12] = "";
    }

    if ($table[0] !== $table[8] && $table[4] === "" && $table[12] === "") {
        $table[4] = $table[8];
        $table[8] = "";
    }

    // mouvement de 3 blocs

    if ($table[0] === "" && $table[4] !== $table[8] !== $table[12]) {
        $table[0] = $table[4];
        $table[4] = $table[8];
        $table[8] = $table[12];
        $table[12] = "";
    }

    if ($table[0] !== $table[8] !== $table[12] && $table[4] === "") {
        $table[4] = $table[8];
        $table[8] = $table[12];
        $table[12] = "";
    }

    if ($table[0] !== $table[4] !== $table[12] && $table[8] === "") {
        $table[8] = $table[12];
        $table[12] = "";
    }

    // fusion de 2 blocs

    for (let $i = 0; $i < 12; $i+4) {

        if ($table[0] !== "") {
            if ($table[0] === $table[12] && $table[4] === "" && $table[8] === "") {
                $table[0] += $table[12];
                $table[12] = "";
            }

            if ($table[0] === $table[8] && $table[4] === "" && $table[12] === "") {
                $table[0] += $table[8];
                $table[8] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }

        if ($table[0] === "") {

            if ($table[0] === "" && $table[4] === "" && $table[8] === $table[12]) {
                $table[0] = $table[8] + $table[12];
                $table[8] = "";
                $table[12] = "";
            }

            if ($table[0] === "" && $table[4] === $table[8] && $table[12] === "") {
                $table[0] = $table[4] + $table[8];
                $table[4] = "";
                $table[8] = "";
            }

            if ($table[0] === "" && $table[4] === $table[12] && $table[8] === "") {
                $table[0] = $table[4] + $table[12];
                $table[4] = "";
                $table[12] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[0] === "" && $table[4] === $table[8] === $table[12]) {
        $table[0] = $table[4] + $table[8];
        $table[4] = $table[12];
        $table[8] = "";
        $table[12] = "";
    }

    if ($table[0] === $table[8] === $table[12] && $table[4] === "") {
        $table[0] += $table[8];
        $table[4] = $table[12];
        $table[8] = "";
        $table[12] = "";
    }

    if ($table[0] === $table[4] === $table[12] && $table[8] === "") {
        $table[0] += $table[4];
        $table[4] = $table[12];
        $table[8] = "";
        $table[12] = "";
    }

    if ($table[0] === $table[4] === $table[8] && $table[12] === "" ) {
        $table[0] += $table[4];
        $table[4] = $table[8];
        $table[4] = "";
        $table[12] = "";
    }

// line 2

    // mouvement 1 bloc

    if ($table[1] === "" && $table[5] === "" && $table[9] === ""){
        $table[1] = $table[13];
        $table[13] = "";
    }

    if ($table[1] === "" && $table[5] === "" && $table[13] === "") {
        $table[1] = $table[9];
        $table[9] = "";
    }

    if ($table[1] === "" && $table[9] === "" && $table[13] === "") {
        $table[1] = $table[5];
        $table[5] = "";
    }

    // mouvement de 2 blocs

    if ($table[1] === "" && $table[5] === "" && $table[9] !== $table[13]) {
        $table[1] = $table[9];
        $table[5] = $table[13];
        $table[9] = "";
        $table[13] = "";
    }

    if ($table[1] === "" && $table[5] !== $table[9] && $table[13] === "") {
        $table[1] = $table[5];
        $table[5] = $table[9];
        $table[9] = "";
    }

    if ($table[1] === "" && $table[5] !== $table[13] && $table[9] === "") {
        $table[1] = $table[5];
        $table[5] = $table[13];
        $table[13] = "";
    }

    if ($table[1] !== $table[13] && $table[5] === "" && $table[9] === "") {
        $table[5] = $table[13];
        $table[13] = "";
    }

    if ($table[1] !== $table[9] && $table[5] === "" && $table[13] === "") {
        $table[5] = $table[9];
        $table[9] = "";
    }

    // mouvement de 3 blocs

    if ($table[1] === "" && $table[5] !== $table[9] !== $table[13]) {
        $table[1] = $table[5];
        $table[5] = $table[9];
        $table[9] = $table[13];
        $table[13] = "";
    }

    if ($table[1] !== $table[9] !== $table[13] && $table[5] === "") {
        $table[5] = $table[9];
        $table[9] = $table[13];
        $table[13] = "";
    }

    if ($table[1] !== $table[5] !== $table[13] && $table[9] === "") {
        $table[9] = $table[13];
        $table[13] = "";
    }

    // fusion de 2 blocs

    for (let $i = 1; $i < 13; $i+4) {

        if ($table[1] !== "") {
            if ($table[1] === $table[13] && $table[5] === "" && $table[9] === "") {
                $table[1] += $table[13];
                $table[13] = "";
            }

            if ($table[1] === $table[9] && $table[5] === "" && $table[13] === "") {
                $table[1] += $table[9];
                $table[9] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }

        if ($table[1] === "") {

            if ($table[1] === "" && $table[5] === "" && $table[9] === $table[13]) {
                $table[1] = $table[9] + $table[13];
                $table[9] = "";
                $table[13] = "";
            }

            if ($table[1] === "" && $table[5] === $table[9] && $table[13] === "") {
                $table[1] = $table[5] + $table[9];
                $table[5] = "";
                $table[9] = "";
            }

            if ($table[1] === "" && $table[5] === $table[13] && $table[9] === "") {
                $table[1] = $table[5] + $table[13];
                $table[5] = "";
                $table[13] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[1] === "" && $table[5] === $table[9] === $table[13]) {
        $table[1] = $table[5] + $table[9];
        $table[5] = $table[13];
        $table[9] = "";
        $table[13] = "";
    }

    if ($table[1] === $table[9] === $table[13] && $table[5] === "") {
        $table[1] += $table[9];
        $table[5] = $table[13];
        $table[9] = "";
        $table[13] = "";
    }

    if ($table[1] === $table[5] === $table[13] && $table[9] === "") {
        $table[1] += $table[5];
        $table[5] = $table[13];
        $table[9] = "";
        $table[13] = "";
    }

    if ($table[1] === $table[5] === $table[9] && $table[13] === "" ) {
        $table[1] += $table[5];
        $table[5] = $table[9];
        $table[9] = "";
        $table[13] = "";
    }

// line 3

    // mouvement 1 bloc

    if ($table[2] === "" && $table[6] === "" && $table[10] === ""){
        $table[2] = $table[14];
        $table[14] = "";
    }

    if ($table[2] === "" && $table[6] === "" && $table[14] === "") {
        $table[2] = $table[10];
        $table[10] = "";
    }

    if ($table[2] === "" && $table[10] === "" && $table[14] === "") {
        $table[2] = $table[6];
        $table[6] = "";
    }

    // mouvement de 2 blocs

    if ($table[2] === "" && $table[6] === "" && $table[10] !== $table[14]) {
        $table[2] = $table[10];
        $table[6] = $table[14];
        $table[10] = "";
        $table[14] = "";
    }

    if ($table[2] === "" && $table[6] !== $table[10] && $table[14] === "") {
        $table[2] = $table[6];
        $table[6] = $table[10];
        $table[10] = "";
    }

    if ($table[2] === "" && $table[6] !== $table[14] && $table[10] === "") {
        $table[2] = $table[6];
        $table[6] = $table[14];
        $table[14] = "";
    }

    if ($table[2] !== $table[14] && $table[6] === "" && $table[10] === "") {
        $table[6] = $table[14];
        $table[14] = "";
    }

    if ($table[2] !== $table[10] && $table[6] === "" && $table[14] === "") {
        $table[6] = $table[10];
        $table[10] = "";
    }

    // mouvement de 3 blocs

    if ($table[2] === "" && $table[6] !== $table[10] !== $table[14]) {
        $table[2] = $table[6];
        $table[6] = $table[10];
        $table[10] = $table[14];
        $table[14] = "";
    }

    if ($table[2] !== $table[10] !== $table[14] && $table[6] === "") {
        $table[6] = $table[10];
        $table[10] = $table[14];
        $table[14] = "";
    }

    if ($table[2] !== $table[6] !== $table[14] && $table[10] === "") {
        $table[10] = $table[14];
        $table[14] = "";
    }

    // fusion de 2 blocs

    for (let $i = 2; $i < 14; $i+4) {

        if ($table[2] !== "") {
            if ($table[2] === $table[14] && $table[6] === "" && $table[10] === "") {
                $table[2] += $table[14];
                $table[14] = "";
            }

            if ($table[2] === $table[10] && $table[6] === "" && $table[14] === "") {
                $table[2] += $table[10];
                $table[10] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }

        if ($table[2] === "") {

            if ($table[2] === "" && $table[6] === "" && $table[10] === $table[14]) {
                $table[2] = $table[10] + $table[14];
                $table[10] = "";
                $table[14] = "";
            }

            if ($table[2] === "" && $table[6] === $table[10] && $table[14] === "") {
                $table[2] = $table[6] + $table[10];
                $table[6] = "";
                $table[10] = "";
            }

            if ($table[2] === "" && $table[6] === $table[14] && $table[10] === "") {
                $table[2] = $table[6] + $table[14];
                $table[6] = "";
                $table[14] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[2] === "" && $table[6] === $table[10] === $table[14]) {
        $table[2] = $table[6] + $table[10];
        $table[6] = $table[14];
        $table[10] = "";
        $table[14] = "";
    }

    if ($table[2] === $table[10] === $table[14] && $table[6] === "") {
        $table[2] += $table[10];
        $table[6] = $table[14];
        $table[10] = "";
        $table[14] = "";
    }

    if ($table[2] === $table[6] === $table[14] && $table[10] === "") {
        $table[2] += $table[6];
        $table[6] = $table[14];
        $table[10] = "";
        $table[14] = "";
    }

    if ($table[2] === $table[6] === $table[10] && $table[14] === "" ) {
        $table[2] += $table[6];
        $table[6] = $table[10];
        $table[10] = "";
        $table[14] = "";
    }

// line 4

// mouvement 1 bloc

    if ($table[3] === "" && $table[7] === "" && $table[11] === ""){
        $table[3] = $table[15];
        $table[15] = "";
    }

    if ($table[3] === "" && $table[7] === "" && $table[15] === "") {
        $table[3] = $table[11];
        $table[11] = "";
    }

    if ($table[3] === "" && $table[11] === "" && $table[15] === "") {
        $table[3] = $table[7];
        $table[7] = "";
    }

// mouvement de 2 blocs

    if ($table[3] === "" && $table[7] === "" && $table[11] !== $table[15]) {
        $table[3] = $table[11];
        $table[7] = $table[15];
        $table[11] = "";
        $table[15] = "";
    }

    if ($table[3] === "" && $table[7] !== $table[11] && $table[15] === "") {
        $table[3] = $table[7];
        $table[7] = $table[11];
        $table[11] = "";
    }

    if ($table[3] === "" && $table[7] !== $table[15] && $table[11] === "") {
        $table[3] = $table[7];
        $table[7] = $table[15];
        $table[15] = "";
    }

    if ($table[3] !== $table[15] && $table[7] === "" && $table[11] === "") {
        $table[7] = $table[15];
        $table[15] = "";
    }

    if ($table[3] !== $table[11] && $table[7] === "" && $table[15] === "") {
        $table[7] = $table[11];
        $table[11] = "";
    }

// mouvement de 3 blocs

    if ($table[3] === "" && $table[7] !== $table[11] !== $table[15]) {
        $table[3] = $table[7];
        $table[7] = $table[11];
        $table[11] = $table[15];
        $table[15] = "";
    }

    if ($table[3] !== $table[11] !== $table[15] && $table[7] === "") {
        $table[7] = $table[11];
        $table[11] = $table[15];
        $table[15] = "";
    }

    if ($table[3] !== $table[7] !== $table[15] && $table[11] === "") {
        $table[11] = $table[15];
        $table[15] = "";
    }

// fusion de 2 blocs

    for (let $i = 3; $i < 15; $i+4) {

        if ($table[3] !== "") {
            if ($table[3] === $table[15] && $table[7] === "" && $table[11] === "") {
                $table[3] += $table[15];
                $table[15] = "";
            }

            if ($table[3] === $table[11] && $table[7] === "" && $table[15] === "") {
                $table[3] += $table[11];
                $table[11] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }

        if ($table[3] === "") {

            if ($table[3] === "" && $table[7] === "" && $table[11] === $table[15]) {
                $table[3] = $table[11] + $table[15];
                $table[11] = "";
                $table[15] = "";
            }

            if ($table[3] === "" && $table[7] === $table[11] && $table[15] === "") {
                $table[3] = $table[7] + $table[11];
                $table[7] = "";
                $table[11] = "";
            }

            if ($table[3] === "" && $table[7] === $table[15] && $table[11] === "") {
                $table[3] = $table[7] + $table[15];
                $table[7] = "";
                $table[15] = "";
            }
        } else if ($table[$i] === $table[$i+4] && $table[$i+4] !== $table[$i+8]) {
            $table[$i] += $table[$i+4];
            $table[$i+4] = "";
        }
    }

// fusion en cas de 3 blocs identiques

    if ($table[3] === "" && $table[7] === $table[11] === $table[15]) {
        $table[3] = $table[7] + $table[11];
        $table[7] = $table[15];
        $table[11] = "";
        $table[15] = "";
    }

    if ($table[3] === $table[11] === $table[15] && $table[7] === "") {
        $table[3] += $table[11];
        $table[7] = $table[15];
        $table[11] = "";
        $table[15] = "";
    }

    if ($table[3] === $table[7] === $table[15] && $table[11] === "") {
        $table[3] += $table[7];
        $table[7] = $table[15];
        $table[11] = "";
        $table[15] = "";
    }

    if ($table[3] === $table[7] === $table[11] && $table[15] === "" ) {
        $table[3] += $table[7];
        $table[7] = $table[11];
        $table[11] = "";
        $table[15] = "";
    }

// réécrit le tableau dans les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text($table[$i]);

    }

    console.log($table);
}


function MoveBottom() {

    // line 1

    // vide toutes les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text("");
    }

    // mouvement 1 bloc

    if ($table[12] === "" && $table[8] === "" && $table[4] === ""){
        $table[12] = $table[0];
        $table[0] = "";
    }

    if ($table[12] === "" && $table[8] === "" && $table[0] === "") {
        $table[12] = $table[4];
        $table[4] = "";
    }

    if ($table[12] === "" && $table[4] === "" && $table[0] === "") {
        $table[12] = $table[8];
        $table[8] = "";
    }

    // mouvement de 2 blocs

    if ($table[12] === "" && $table[8] === "" && $table[4] !== $table[0]) {
        $table[12] = $table[4];
        $table[8] = $table[0];
        $table[4] = "";
        $table[0] = "";
    }

    if ($table[12] === "" && $table[8] !== $table[4] && $table[0] === "") {
        $table[12] = $table[8];
        $table[8] = $table[4];
        $table[4] = "";
    }

    if ($table[12] === "" && $table[8] !== $table[0] && $table[4] === "") {
        $table[12] = $table[8];
        $table[8] = $table[0];
        $table[0] = "";
    }

    if ($table[12] !== $table[0] && $table[8] === "" && $table[4] === "") {
        $table[8] = $table[0];
        $table[0] = "";
    }

    if ($table[12] !== $table[4] && $table[8] === "" && $table[0] === "") {
        $table[8] = $table[4];
        $table[4] = "";
    }

    // mouvement de 3 blocs

    if ($table[12] === "" && $table[8] !== $table[4] !== $table[0]) {
        $table[12] = $table[8];
        $table[8] = $table[4];
        $table[4] = $table[0];
        $table[0] = "";
    }

    if ($table[12] !== $table[4] !== $table[0] && $table[8] === "") {
        $table[8] = $table[4];
        $table[4] = $table[0];
        $table[0] = "";
    }

    if ($table[12] !== $table[8] !== $table[0] && $table[4] === "") {
        $table[4] = $table[0];
        $table[0] = "";
    }

    // fusion de 2 blocs

    for (let $i = 12; $i > 0; $i-4) {

        if ($table[12] !== "") {
            if ($table[12] === $table[0] && $table[8] === "" && $table[4] === "") {
                $table[12] += $table[0];
                $table[0] = "";
            }

            if ($table[12] === $table[4] && $table[8] === "" && $table[0] === "") {
                $table[12] += $table[4];
                $table[4] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }

        if ($table[12] === "") {

            if ($table[12] === "" && $table[8] === "" && $table[4] === $table[0]) {
                $table[12] = $table[4] + $table[0];
                $table[4] = "";
                $table[0] = "";
            }

            if ($table[12] === "" && $table[8] === $table[4] && $table[0] === "") {
                $table[12] = $table[8] + $table[4];
                $table[8] = "";
                $table[4] = "";
            }

            if ($table[12] === "" && $table[8] === $table[0] && $table[4] === "") {
                $table[12] = $table[8] + $table[0];
                $table[8] = "";
                $table[0] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[12] === "" && $table[8] === $table[4] === $table[0]) {
        $table[12] = $table[8] + $table[4];
        $table[8] = $table[0];
        $table[4] = "";
        $table[0] = "";
    }

    if ($table[12] === $table[4] === $table[0] && $table[8] === "") {
        $table[12] += $table[4];
        $table[8] = $table[0];
        $table[4] = "";
        $table[0] = "";
    }

    if ($table[12] === $table[8] === $table[0] && $table[4] === "") {
        $table[12] += $table[8];
        $table[8] = $table[0];
        $table[4] = "";
        $table[0] = "";
    }

    if ($table[12] === $table[8] === $table[4] && $table[0] === "" ) {
        $table[12] += $table[8];
        $table[8] = $table[4];
        $table[8] = "";
        $table[0] = "";
    }

// line 2

    // mouvement 1 bloc

    if ($table[13] === "" && $table[9] === "" && $table[5] === ""){
        $table[13] = $table[1];
        $table[1] = "";
    }

    if ($table[13] === "" && $table[9] === "" && $table[1] === "") {
        $table[13] = $table[5];
        $table[5] = "";
    }

    if ($table[13] === "" && $table[5] === "" && $table[1] === "") {
        $table[13] = $table[9];
        $table[9] = "";
    }

    // mouvement de 2 blocs

    if ($table[13] === "" && $table[9] === "" && $table[5] !== $table[1]) {
        $table[13] = $table[5];
        $table[9] = $table[1];
        $table[5] = "";
        $table[1] = "";
    }

    if ($table[13] === "" && $table[9] !== $table[5] && $table[1] === "") {
        $table[13] = $table[9];
        $table[9] = $table[5];
        $table[5] = "";
    }

    if ($table[13] === "" && $table[9] !== $table[1] && $table[5] === "") {
        $table[13] = $table[9];
        $table[9] = $table[1];
        $table[1] = "";
    }

    if ($table[13] !== $table[1] && $table[9] === "" && $table[5] === "") {
        $table[9] = $table[1];
        $table[1] = "";
    }

    if ($table[13] !== $table[5] && $table[9] === "" && $table[1] === "") {
        $table[9] = $table[5];
        $table[5] = "";
    }

    // mouvement de 3 blocs

    if ($table[13] === "" && $table[9] !== $table[5] !== $table[1]) {
        $table[13] = $table[9];
        $table[9] = $table[5];
        $table[5] = $table[1];
        $table[1] = "";
    }

    if ($table[13] !== $table[5] !== $table[1] && $table[9] === "") {
        $table[9] = $table[5];
        $table[5] = $table[1];
        $table[1] = "";
    }

    if ($table[13] !== $table[9] !== $table[1] && $table[5] === "") {
        $table[5] = $table[1];
        $table[1] = "";
    }

    // fusion de 2 blocs

    for (let $i = 13; $i > 1; $i-4) {

        if ($table[13] !== "") {
            if ($table[13] === $table[1] && $table[9] === "" && $table[5] === "") {
                $table[13] += $table[1];
                $table[1] = "";
            }

            if ($table[13] === $table[5] && $table[9] === "" && $table[1] === "") {
                $table[13] += $table[5];
                $table[5] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }

        if ($table[13] === "") {

            if ($table[13] === "" && $table[9] === "" && $table[5] === $table[1]) {
                $table[13] = $table[5] + $table[1];
                $table[5] = "";
                $table[1] = "";
            }

            if ($table[13] === "" && $table[9] === $table[5] && $table[1] === "") {
                $table[13] = $table[9] + $table[5];
                $table[9] = "";
                $table[5] = "";
            }

            if ($table[13] === "" && $table[9] === $table[1] && $table[5] === "") {
                $table[13] = $table[9] + $table[1];
                $table[9] = "";
                $table[1] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[13] === "" && $table[9] === $table[5] === $table[1]) {
        $table[13] = $table[9] + $table[5];
        $table[9] = $table[1];
        $table[5] = "";
        $table[1] = "";
    }

    if ($table[13] === $table[5] === $table[1] && $table[9] === "") {
        $table[13] += $table[5];
        $table[9] = $table[1];
        $table[5] = "";
        $table[1] = "";
    }

    if ($table[13] === $table[9] === $table[1] && $table[5] === "") {
        $table[13] += $table[9];
        $table[9] = $table[1];
        $table[5] = "";
        $table[1] = "";
    }

    if ($table[13] === $table[9] === $table[5] && $table[1] === "" ) {
        $table[13] += $table[9];
        $table[9] = $table[5];
        $table[5] = "";
        $table[1] = "";
    }

// line 3

    // mouvement 1 bloc

    if ($table[14] === "" && $table[10] === "" && $table[6] === ""){
        $table[14] = $table[2];
        $table[2] = "";
    }

    if ($table[14] === "" && $table[10] === "" && $table[2] === "") {
        $table[14] = $table[6];
        $table[6] = "";
    }

    if ($table[14] === "" && $table[6] === "" && $table[2] === "") {
        $table[14] = $table[10];
        $table[10] = "";
    }

    // mouvement de 2 blocs

    if ($table[14] === "" && $table[10] === "" && $table[6] !== $table[2]) {
        $table[14] = $table[6];
        $table[10] = $table[2];
        $table[6] = "";
        $table[2] = "";
    }

    if ($table[14] === "" && $table[10] !== $table[6] && $table[2] === "") {
        $table[14] = $table[10];
        $table[10] = $table[6];
        $table[6] = "";
    }

    if ($table[14] === "" && $table[10] !== $table[2] && $table[6] === "") {
        $table[14] = $table[10];
        $table[10] = $table[2];
        $table[2] = "";
    }

    if ($table[14] !== $table[2] && $table[10] === "" && $table[14] === "") {
        $table[10] = $table[2];
        $table[2] = "";
    }

    if ($table[14] !== $table[6] && $table[10] === "" && $table[2] === "") {
        $table[10] = $table[6];
        $table[6] = "";
    }

    // mouvement de 3 blocs

    if ($table[14] === "" && $table[10] !== $table[6] !== $table[2]) {
        $table[14] = $table[10];
        $table[10] = $table[6];
        $table[6] = $table[2];
        $table[2] = "";
    }

    if ($table[14] !== $table[6] !== $table[2] && $table[10] === "") {
        $table[10] = $table[6];
        $table[6] = $table[2];
        $table[2] = "";
    }

    if ($table[14] !== $table[10] !== $table[2] && $table[6] === "") {
        $table[6] = $table[2];
        $table[2] = "";
    }

    // fusion de 2 blocs

    for (let $i = 14; $i > 2; $i-4) {

        if ($table[14] !== "") {
            if ($table[14] === $table[2] && $table[10] === "" && $table[6] === "") {
                $table[14] += $table[2];
                $table[2] = "";
            }

            if ($table[14] === $table[6] && $table[10] === "" && $table[2] === "") {
                $table[14] += $table[6];
                $table[6] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }

        if ($table[14] === "") {

            if ($table[14] === "" && $table[10] === "" && $table[6] === $table[2]) {
                $table[14] = $table[6] + $table[2];
                $table[6] = "";
                $table[2] = "";
            }

            if ($table[14] === "" && $table[10] === $table[6] && $table[2] === "") {
                $table[14] = $table[10] + $table[6];
                $table[10] = "";
                $table[6] = "";
            }

            if ($table[14] === "" && $table[10] === $table[2] && $table[6] === "") {
                $table[14] = $table[10] + $table[2];
                $table[10] = "";
                $table[2] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i+4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }
    }

    // fusion en cas de 3 blocs identiques

    if ($table[14] === "" && $table[10] === $table[6] === $table[2]) {
        $table[14] = $table[10] + $table[6];
        $table[10] = $table[2];
        $table[6] = "";
        $table[2] = "";
    }

    if ($table[14] === $table[6] === $table[2] && $table[10] === "") {
        $table[14] += $table[6];
        $table[10] = $table[2];
        $table[6] = "";
        $table[2] = "";
    }

    if ($table[14] === $table[10] === $table[2] && $table[6] === "") {
        $table[14] += $table[10];
        $table[10] = $table[2];
        $table[6] = "";
        $table[2] = "";
    }

    if ($table[14] === $table[10] === $table[6] && $table[2] === "" ) {
        $table[14] += $table[10];
        $table[10] = $table[6];
        $table[6] = "";
        $table[2] = "";
    }

// line 4

// mouvement 1 bloc

    if ($table[15] === "" && $table[11] === "" && $table[7] === ""){
        $table[15] = $table[3];
        $table[3] = "";
    }

    if ($table[15] === "" && $table[11] === "" && $table[3] === "") {
        $table[15] = $table[7];
        $table[7] = "";
    }

    if ($table[15] === "" && $table[7] === "" && $table[3] === "") {
        $table[15] = $table[11];
        $table[11] = "";
    }

// mouvement de 2 blocs

    if ($table[15] === "" && $table[11] === "" && $table[7] !== $table[3]) {
        $table[15] = $table[7];
        $table[11] = $table[3];
        $table[7] = "";
        $table[3] = "";
    }

    if ($table[15] === "" && $table[11] !== $table[7] && $table[3] === "") {
        $table[15] = $table[11];
        $table[11] = $table[7];
        $table[7] = "";
    }

    if ($table[15] === "" && $table[11] !== $table[3] && $table[7] === "") {
        $table[15] = $table[11];
        $table[11] = $table[3];
        $table[3] = "";
    }

    if ($table[15] !== $table[3] && $table[11] === "" && $table[7] === "") {
        $table[11] = $table[3];
        $table[3] = "";
    }

    if ($table[15] !== $table[7] && $table[11] === "" && $table[3] === "") {
        $table[11] = $table[7];
        $table[7] = "";
    }

// mouvement de 3 blocs

    if ($table[15] === "" && $table[11] !== $table[7] !== $table[3]) {
        $table[15] = $table[11];
        $table[11] = $table[7];
        $table[7] = $table[3];
        $table[3] = "";
    }

    if ($table[15] !== $table[7] !== $table[3] && $table[11] === "") {
        $table[11] = $table[7];
        $table[7] = $table[3];
        $table[3] = "";
    }

    if ($table[15] !== $table[11] !== $table[3] && $table[7] === "") {
        $table[7] = $table[3];
        $table[3] = "";
    }

// fusion de 2 blocs

    for (let $i = 15; $i > 3; $i-4) {

        if ($table[15] !== "") {
            if ($table[15] === $table[3] && $table[11] === "" && $table[7] === "") {
                $table[15] += $table[3];
                $table[3] = "";
            }

            if ($table[15] === $table[7] && $table[11] === "" && $table[3] === "") {
                $table[15] += $table[7];
                $table[7] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }

        if ($table[15] === "") {

            if ($table[15] === "" && $table[11] === "" && $table[7] === $table[3]) {
                $table[15] = $table[7] + $table[3];
                $table[7] = "";
                $table[3] = "";
            }

            if ($table[15] === "" && $table[11] === $table[7] && $table[3] === "") {
                $table[15] = $table[11] + $table[7];
                $table[11] = "";
                $table[7] = "";
            }

            if ($table[15] === "" && $table[11] === $table[3] && $table[7] === "") {
                $table[15] = $table[11] + $table[3];
                $table[11] = "";
                $table[3] = "";
            }
        } else if ($table[$i] === $table[$i-4] && $table[$i-4] !== $table[$i-8]) {
            $table[$i] += $table[$i-4];
            $table[$i-4] = "";
        }
    }

// fusion en cas de 3 blocs identiques

    if ($table[15] === "" && $table[11] === $table[7] === $table[3]) {
        $table[15] = $table[11] + $table[7];
        $table[11] = $table[3];
        $table[7] = "";
        $table[3] = "";
    }

    if ($table[15] === $table[7] === $table[3] && $table[11] === "") {
        $table[15] += $table[7];
        $table[11] = $table[3];
        $table[7] = "";
        $table[3] = "";
    }

    if ($table[15] === $table[11] === $table[3] && $table[7] === "") {
        $table[15] += $table[11];
        $table[11] = $table[3];
        $table[7] = "";
        $table[3] = "";
    }

    if ($table[15] === $table[11] === $table[7] && $table[3] === "" ) {
        $table[15] += $table[11];
        $table[11] = $table[7];
        $table[7] = "";
        $table[3] = "";
    }

// réécrit le tableau dans les cases

    for (let $i = 0; $i < 16; $i ++) {

        $(".nb" + $i).text($table[$i]);

    }

    console.log($table);
}




