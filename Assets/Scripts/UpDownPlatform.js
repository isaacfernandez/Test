#pragma strict

public var risingSpeed : float = 1.2f;
public var direction : boolean = true; //true is up, false is down

function Start () {
	randomColor();
}

function Update () {
 
 if (transform.position.y > 10) {
 	direction = false;
 	randomColor();
 }
 else if (transform.position.y < 2) {
 	direction = true;
 	randomColor();
 }
 if (direction) {
 	transform.position.y += risingSpeed * Time.deltaTime;
 }
 else {
 	 	transform.position.y -= risingSpeed * Time.deltaTime;
 }
}

 function randomColor () {
	Random.seed = Time.time;
    var r : float = Random.Range(0f,1f);
    var g : float = Random.Range(0f,1f);
    var b : float = Random.Range(0f,1f);
    var randomColour : Color = new Color(r,g,b,1f);
    
    renderer.material.color = randomColour;
}