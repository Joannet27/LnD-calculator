
const fourStarBase = 32;
const fiveStarBase = 40;
function myFunction() {
    let bnt = document.querySelector('input[name="rarity"]:checked').value;
    document.getElementById("star").innerHTML = "Rarity:" + bnt;

    let level = document.getElementById("level").value;
    document.getElementById("levelVal").innerHTML = "Level:" + level;
    //calculations
    if (bnt = 4) {
        if (level >= 1 && level < 10) {//10
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase;
        }
        if (level >= 10 && level < 20) {//20
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 2;
        }
        if (level >= 20 && level < 30) {//30
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 4;
        }
        if (level >= 30 && level < 40) {//40
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 8;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fourStarBase * 3.75;
        }
        if (level >= 40 && level < 50) {//50
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 16;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fourStarBase * 7.5;
        }
        if (level >= 50 && level < 60) {//60
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 37.5;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fourStarBase * 15.9375;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fourStarBase * 7.5;
        }
        if (level >= 50 && level < 60) {//70
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 60;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fourStarBase * 25;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fourStarBase * 12.44;
        }
        if (level >= 50 && level < 60) {//60
            document.getElementById('crystN').innerHTML = "CrystalN:" + fourStarBase * 30;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fourStarBase * 12;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fourStarBase * 4.5;
        }
    }//4starend

    if (bnt = 5) {
        if (level >= 1 && level < 10) {//10
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase;
        }
        if (level >= 10 && level < 20) {//20
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 2;
        }
        if (level >= 20 && level < 30) {//30
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 4;
        }
        if (level >= 30 && level < 40) {//40
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 8;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fiveStarBase * 3.75;
        }
        if (level >= 40 && level < 50) {//50
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 16;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fiveStarBase * 7.5;
        }
        if (level >= 50 && level < 60) {//60
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 30;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fiveStarBase * 12.75;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fiveStarBase * 6;
        }
        if (level >= 50 && level < 60) {//70
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 60;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fiveStarBase * 25;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fiveStarBase * 12.45;
        }
        if (level >= 50 && level < 60) {//60
            document.getElementById('crystN').innerHTML = "CrystalN:" + fiveStarBase * 30;
            document.getElementById('crystR').innerHTML = "CrystalR:" + fiveStarBase * 12.125;
            document.getElementById('crystSR').innerHTML = "CrystalSR:" + fiveStarBase * 4.5;
        }
    }//5starend
}
