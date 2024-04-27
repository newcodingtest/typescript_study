/**
 * 문자 리터럴 타입
 */

type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if(easing === "ease-in"){
            console.log("ease-in");
        } else if(easing === "ease-out"){
            console.log("ease-out");
        } else if(easing === "ease-in-out"){
            console.log("ease-in-out");
        } else {
            console.log("nothing");
        }
    }
}

let button = new UIElement();
button.animate(0,0,"ease-in");
//button.animate(0,0,"uneasy"); //오류

/**
 * 숫자 리터럴 타입
 */

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
  }
  
  const result = rollDice();
  console.log(result);

  declare function setupMap(config: MapConfig): void ;

  interface MapConfig {
    lng: number,
    lat: number,
    tileSize: 8 | 16 | 32;
  }

  setupMap({lng:1,lat:2,tileSize:16});